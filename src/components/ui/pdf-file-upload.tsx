import { cn } from "@/lib/utils";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Upload, File, X } from "lucide-react";
import { useDropzone } from "react-dropzone";

const mainVariant = {
  initial: { x: 0, y: 0 },
  animate: { x: 20, y: -20, opacity: 0.9 },
};

const secondaryVariant = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

interface PDFFileUploadProps {
  onChange?: (files: File[]) => void;
  multiple?: boolean;
  maxFiles?: number;
}

export const PDFFileUpload: React.FC<PDFFileUploadProps> = ({
  onChange,
  multiple = false,
  maxFiles,
}) => {
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (newFiles: File[]) => {
    const filesToAdd = maxFiles
      ? newFiles.slice(0, maxFiles - files.length)
      : newFiles;
    
    const updatedFiles = multiple 
      ? [...files, ...filesToAdd]
      : filesToAdd.slice(0, 1);
    
    setFiles(updatedFiles);
    onChange && onChange(updatedFiles);
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const removeFile = (index: number) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);
    onChange && onChange(updatedFiles);
  };

  const { getRootProps, isDragActive } = useDropzone({
    accept: { "application/pdf": [".pdf"] },
    multiple,
    maxFiles,
    noClick: true,
    onDrop: handleFileChange,
    onDropRejected: (rejections) => {
      console.log("Files rejected:", rejections);
    },
  });

  return (
    <div className="w-full" {...getRootProps()}>
      <motion.div
        onClick={handleClick}
        whileHover="animate"
        className="group/file block rounded-xl cursor-pointer w-full relative overflow-hidden border-2 border-dashed border-zinc-300 dark:border-zinc-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors duration-200 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm"
      >
        <input
          ref={fileInputRef}
          id="pdf-file-upload"
          type="file"
          accept=".pdf,application/pdf"
          multiple={multiple}
          onChange={(e) => handleFileChange(Array.from(e.target.files || []))}
          className="hidden"
        />

        <div className="flex flex-col items-center justify-center p-8 md:p-12">
          {/* Upload Icon */}
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            className="mb-4"
          >
            <div className="p-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg">
              <Upload className="h-8 w-8 text-white" />
            </div>
          </motion.div>

          {/* Text */}
          <h3 className="relative z-20 font-semibold text-zinc-700 dark:text-zinc-300 text-lg mb-2">
            {isDragActive ? "Suelta el archivo aquí" : "Sube tu archivo PDF"}
          </h3>
          <p className="relative z-20 font-normal text-zinc-500 dark:text-zinc-400 text-sm text-center max-w-xs">
            Arrastra y suelta o haz clic para seleccionar
            {multiple && " (múltiples archivos permitidos)"}
          </p>

          {/* File count indicator */}
          {files.length > 0 && (
            <div className="mt-4 text-sm font-medium text-blue-600 dark:text-blue-400">
              {files.length} archivo{files.length !== 1 ? "s" : ""} seleccionado{files.length !== 1 ? "s" : ""}
            </div>
          )}
        </div>
      </motion.div>

      {/* Files List */}
      {files.length > 0 && (
        <div className="mt-6 space-y-3">
          {files.map((file, idx) => (
            <motion.div
              key={`file-${idx}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="relative overflow-hidden bg-white dark:bg-zinc-900 rounded-xl border-2 border-zinc-200 dark:border-zinc-800 p-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-950">
                    <File className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300 truncate">
                      {file.name}
                    </p>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-xs text-zinc-500 dark:text-zinc-400">
                        {(file.size / (1024 * 1024)).toFixed(2)} MB
                      </span>
                      <span className="text-xs text-zinc-400 dark:text-zinc-500">
                        {new Date(file.lastModified).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFile(idx);
                  }}
                  className="p-2 rounded-lg hover:bg-red-100 dark:hover:bg-red-950 transition-colors group"
                  aria-label="Eliminar archivo"
                >
                  <X className="h-5 w-5 text-zinc-400 group-hover:text-red-600 dark:group-hover:text-red-400" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

