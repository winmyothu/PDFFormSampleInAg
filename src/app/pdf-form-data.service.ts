import { Injectable } from '@angular/core';
// import * as pdfjs from 'pdfjs-dist/legacy/build/pdf';
import * as pdfjs from 'pdfjs-dist';

@Injectable({
  providedIn: 'root'
})
export class PdfFormDataService {
  async extractFormData(pdfUrl: string): Promise<any> {
    const pdf = await pdfjs.getDocument(pdfUrl).promise;
    const page = await pdf.getPage(1);
    const annotations = await page.getAnnotations();

    const formData :any = {};
    annotations.forEach((annotation) => {
      if (annotation.fieldName) {
        formData[annotation.fieldName] = annotation.fieldValue;
      }
    });

    return formData;
  }
}
