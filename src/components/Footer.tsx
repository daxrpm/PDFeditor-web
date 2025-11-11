import Link from "next/link";
import React from "react";
import { FileText, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo & Description */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600">
                <FileText className="h-4 w-4 text-white" />
              </div>
              <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                PDF Editor
              </span>
            </div>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 text-center md:text-left">
              Edita tus PDFs de forma privada.
            </p>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-6 text-sm">
            
            <Link
              href="https://daxrpm.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Dax
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
