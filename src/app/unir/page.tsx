"use client";

import React, { useState } from "react";
import { PDFFileUpload } from "@/components/ui/pdf-file-upload";
import { PDFReorderableList } from "@/components/ui/pdf-reorderable-list";
import { Button } from "@/components/ui/button";
import { Loading } from "@/components/ui/loading";
import { ErrorMessage } from "@/components/ui/error-message";
import { API_ENDPOINTS } from "@/lib/api-config";
import axios from "axios";
import { Combine, CheckCircle2, Plus } from "lucide-react";

export default function UnirPage() {
  const [files, setFiles] = useState<File[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showUpload, setShowUpload] = useState(true);

  const handleFileUpload = (uploadedFiles: File[]) => {
    setFiles((prev) => [...prev, ...uploadedFiles]);
    setError(null);
    setSuccess(false);
    if (uploadedFiles.length > 0) {
      setShowUpload(false);
    }
  };

  const handleReorder = (reorderedFiles: File[]) => {
    setFiles(reorderedFiles);
  };

  const handleRemove = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleReset = () => {
    setFiles([]);
    setShowUpload(true);
    setError(null);
    setSuccess(false);
  };

  const handleMerge = async () => {
    if (files.length < 2) {
      setError("Por favor, sube al menos 2 archivos PDF para unir");
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(false);

    const formData = new FormData();
    files.forEach((file) => {
      formData.append("files", file);
    });

    try {
      const response = await axios.post(API_ENDPOINTS.MERGE_PDFS, formData, {
        responseType: "blob",
      });

      if (response.status !== 200) {
        throw new Error("Error en la respuesta del servidor");
      }

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "pdf_unido.pdf");
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
          setError(errorJson.detail || "Error al unir los archivos");
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
            <Combine className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-3">
            Unir PDFs
          </h1>
          <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Combina múltiples archivos PDF en un solo documento
          </p>
        </div>

        {/* Content Card */}
        <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl border border-zinc-200 dark:border-zinc-800 p-6 md:p-8">
          {loading ? (
            <div className="py-16">
              <Loading size="lg" text="Uniendo tus PDFs..." />
            </div>
          ) : success ? (
            <div className="py-16 text-center">
              <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
                ¡PDFs unidos exitosamente!
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                Tu archivo ha sido descargado
              </p>
              <Button onClick={handleReset} variant="outline">
                Unir otros archivos
              </Button>
            </div>
          ) : (
            <>
              {error && <ErrorMessage message={error} className="mb-6" />}

              {showUpload || files.length === 0 ? (
                <PDFFileUpload onChange={handleFileUpload} multiple={true} />
              ) : (
                <>
                  <PDFReorderableList
                    files={files}
                    onReorder={handleReorder}
                    onRemove={handleRemove}
                  />

                  {/* Add More Files Button */}
                  <div className="mt-6">
                    <Button
                      onClick={() => setShowUpload(true)}
                      variant="outline"
                      className="w-full"
                    >
                      <Plus className="h-4 w-4" />
                      Agregar más archivos
                    </Button>
                  </div>
                </>
              )}

              {/* Merge Button */}
              {files.length > 0 && (
                <div className="mt-8 flex justify-center gap-3">
                  {files.length > 0 && !showUpload && (
                    <Button
                      onClick={handleReset}
                      variant="outline"
                      size="lg"
                    >
                      Reiniciar
                    </Button>
                  )}
                  <Button
                    onClick={handleMerge}
                    disabled={files.length < 2 || loading}
                    size="lg"
                    className="flex-1 sm:flex-initial"
                  >
                    <Combine className="h-5 w-5" />
                    Unir {files.length} archivo{files.length !== 1 ? "s" : ""}
                  </Button>
                </div>
              )}
            </>
          )}
        </div>

        {/* Info */}
        <div className="mt-8 text-center text-sm text-zinc-500 dark:text-zinc-400">
          <p>Los archivos se procesan de forma privada y no se almacenan en nuestros servidores</p>
        </div>
      </div>
    </div>
  );
}
