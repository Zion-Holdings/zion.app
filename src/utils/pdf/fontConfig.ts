
import { jsPDF } from 'jspdf';

import {logErrorToProduction} from "@/utils/productionLogger";

export interface FontBuffers {
  regular: ArrayBuffer;
  bold?: ArrayBuffer;
  italic?: ArrayBuffer;
  boldItalic?: ArrayBuffer;
}

export type FontFamily = 'default' | 'montserrat' | 'open-sans' | 'roboto';

/**
 * Loads and registers custom fonts for PDF documents
 */
export async function loadCustomFonts(doc: jsPDF, fontFamily: FontFamily = 'default'): Promise<void> {
  if (fontFamily === 'default') return;
  
  try {
    // Font loading logic would go here
    // For demonstration purposes, we'll just set up the font using standard fonts
    
    switch (fontFamily) {
      case 'montserrat':
        doc.setFont('helvetica');
        break;
      case 'open-sans':
        doc.setFont('helvetica');
        break;
      case 'roboto':
        doc.setFont('helvetica');
        break;
      default:
        doc.setFont('helvetica');
    }
  } catch (error) {
    logErrorToProduction('Error loading custom fonts:', { data: error });
    // Fall back to default font
    doc.setFont('helvetica');
  }
}
