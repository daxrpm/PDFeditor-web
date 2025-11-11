"use client";

import React, { useState } from "react";
import { PDFFileUpload } from "@/components/ui/pdf-file-upload";
import { Button } from "@/components/ui/button";
import { Loading } from "@/components/ui/loading";
import { ErrorMessage } from "@/components/ui/error-message";
import { API_ENDPOINTS } from "@/lib/api-config";
import axios from "axios";
import { Archive, Download, CheckCircle2 } from "lucide-react";

export default function ComprimirPage() {
  const [files, setFiles] = useState<File[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleFileUpload = (uploadedFiles: File[]) => {
    setFiles(uploadedFiles);
    setError(null);
    setSuccess(false);
  };

  const handleCompress = async () => {
    if (files.length === 0) {
      setError("Por favor, sube un archivo PDF primero");
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(false);

    const formData = new FormData();
    formData.append("file", files[0]);

    try {
      const response = await axios.post(API_ENDPOINTS.COMPRESS_PDF, formData, {
        responseType: "blob",
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "pdf_comprimido.pdf");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      setSuccess(true);
    } catch (error: any) {
      if (error.response && error.response.data) {
        try {
          const errorMessage = await error.response.data.text();
          const errorJson = JSON.parse(errorMessage);
          setError(errorJson.detail || "Error al comprimir el archivo");
        } catch {
          setError("Error al procesar la respuesta del servidor");
        }
      } else {
        setError(error.message || "Error de conexión con el servidor");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-theme(spacing.32))] bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-950 dark:to-zinc-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center justify-center p-3 mb-4 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 shadow-lg">
            <Archive className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-3">
            Comprimir PDF
          </h1>
          <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Reduce el tamaño de tus archivos PDF sin perder calidad visual
          </p>
        </div>

        {/* Content Card */}
        <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl border border-zinc-200 dark:border-zinc-800 p-6 md:p-8">
          {loading ? (
            <div className="py-16">
              <Loading size="lg" text="Comprimiendo tu PDF..." />
            </div>
          ) : success ? (
            <div className="py-16 text-center">
              <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
                ¡PDF comprimido exitosamente!
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                Tu archivo ha sido descargado
              </p>
              <Button onClick={() => setSuccess(false)} variant="outline">
                Comprimir otro archivo
              </Button>
            </div>
          ) : (
            <>
              {error && (
                <ErrorMessage message={error} className="mb-6" />
              )}

              <PDFFileUpload onChange={handleFileUpload} multiple={false} />

              <div className="mt-8 flex justify-center">
                <Button
                  onClick={handleCompress}
                  disabled={files.length === 0 || loading}
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  <Archive className="h-5 w-5" />
                  Comprimir PDF
                </Button>
              </div>
            </>
          )}
        </div>

        {/* Info */}
        <div className="mt-8 text-center text-sm text-zinc-500 dark:text-zinc-400">
          <p>El archivo se procesa de forma privada y no se almacena en nuestros servidores.</p>
        </div>
      </div>
    </div>
  );
}
