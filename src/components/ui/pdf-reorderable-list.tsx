import React, { useState } from "react";
import { motion, Reorder } from "framer-motion";
import { File, GripVertical, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface PDFReorderableListProps {
  files: File[];
  onReorder: (files: File[]) => void;
  onRemove: (index: number) => void;
}

export const PDFReorderableList: React.FC<PDFReorderableListProps> = ({
  files,
  onReorder,
  onRemove,
}) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Archivos a unir ({files.length})
        </h3>
        <p className="text-xs text-zinc-500 dark:text-zinc-400">
          Arrastra para reordenar
        </p>
      </div>

      <Reorder.Group
        axis="y"
        values={files}
        onReorder={onReorder}
        className="space-y-3"
      >
        {files.map((file, index) => (
          <Reorder.Item
            key={`${file.name}-${file.lastModified}`}
            value={file}
            className="list-none"
          >
            <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ delay: index * 0.05 }}
              className="relative overflow-hidden bg-white dark:bg-zinc-900 rounded-xl border-2 border-zinc-200 dark:border-zinc-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors cursor-grab active:cursor-grabbing"
            >
              <div className="flex items-center gap-3 p-4">
                {/* Drag Handle */}
                <div className="flex-shrink-0 p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg cursor-grab active:cursor-grabbing transition-colors">
                  <GripVertical className="h-5 w-5 text-zinc-400" />
                </div>

                {/* Order Number */}
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-sm font-bold">
                  {index + 1}
                </div>

                {/* File Icon */}
                <div className="flex-shrink-0 p-2 rounded-lg bg-blue-100 dark:bg-blue-950">
                  <File className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>

                {/* File Info */}
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

                {/* Remove Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onRemove(index);
                  }}
                  className="flex-shrink-0 p-2 rounded-lg hover:bg-red-100 dark:hover:bg-red-950 transition-colors group"
                  aria-label="Eliminar archivo"
                >
                  <X className="h-5 w-5 text-zinc-400 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors" />
                </button>
              </div>
            </motion.div>
          </Reorder.Item>
        ))}
      </Reorder.Group>

      {/* Info message */}
      <div className="flex items-start gap-2 p-4 rounded-lg bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900">
        <svg
          className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <p className="text-sm text-blue-700 dark:text-blue-300">
          Los PDFs se unirán en el orden mostrado (de arriba hacia abajo). Arrastra
          los archivos para cambiar el orden.
        </p>
      </div>
    </div>
  );
};

