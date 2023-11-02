// pdf-viewer.component.ts
import { Component, ElementRef, ViewChild } from '@angular/core';
import { PdfFormDataService } from '../pdf-form-data.service';
import { NgxExtendedPdfViewerComponent, PagesLoadedEvent } from 'ngx-extended-pdf-viewer';


@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.css']
})
export class PdfViewerComponent {
  constructor(private pdfFormDataService: PdfFormDataService) {}

  pdfUrl: string = 'assets/S.pdf'; // Set the PDF URL here

  public height = '100vh';

  public onPagesLoaded(event: PagesLoadedEvent): void {
    const h = event.source.viewer.clientHeight;
    this.height = (h + 35) + 'px';
  }



  async submitForm() {

    // const pdfUrl = this.pdfViewer.src;
    // console.log(pdfUrl)
    // const formData = await this.pdfFormDataService.extractFormData(pdfUrl);
    // console.log('Form Data:', formData);

    // Here you can send the formData to your backend API or process it as needed.

    console.log(this.firstName);

    alert(this.firstName)
  }


  public firstName = 'Jane';

  public lastName = 'Doe';
  public country = 'Spain';
  public jobExperience = '6';
  public typeScript = true;



  public get formData(): { [fieldName: string]: string | number | boolean } {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      yearsOfExperience: this.jobExperience,
      typeScript: this.typeScript,
      country: this.country
    };
  }

  public set formData(data: { [fieldName: string]: string | number | boolean } | any) {
    this.firstName = data.firstName as string;
    this.lastName = data.lastName as string;
    this.jobExperience = data.yearsOfExperience as string;
    this.country = data.country as string;
    this.typeScript = data.typeScript === 'true' || data.typeScript === true;
  }
}
