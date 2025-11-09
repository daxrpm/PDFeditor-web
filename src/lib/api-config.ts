/**
 * API Configuration
 * 
 * Centralized API configuration management.
 * This file exports the base API URL from environment variables.
 */

/**
 * Base URL for the PDF API service
 * @throws {Error} If NEXT_PUBLIC_API_URL is not defined in environment variables
 */
const getApiUrl = (): string => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  
  if (!apiUrl) {
    throw new Error(
      'NEXT_PUBLIC_API_URL is not defined in environment variables. ' +
      'Please check your .env.local file.'
    );
  }
  
  return apiUrl;
};

export const API_URL = getApiUrl();

/**
 * API Endpoints
 */
export const API_ENDPOINTS = {
  COMPRESS_PDF: `${API_URL}/comprimir_pdf/`,
  MERGE_PDFS: `${API_URL}/unir_pdfs/`,
  SPLIT_PDF: `${API_URL}/dividir_pdf/`,
} as const;

