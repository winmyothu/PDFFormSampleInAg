// pdf-viewer.component.ts
import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgxExtendedPdfViewerComponent, PagesLoadedEvent } from 'ngx-extended-pdf-viewer';
import { pdfDefaultOptions } from 'ngx-extended-pdf-viewer';


export interface Person{
  yearsOfExperience: number | string,
  firstName: string,
  lastName: string,
  country: string,
  jobDescription: string,
  typeScript: string | boolean,
  javaScript: string | boolean,
  java: string | boolean,
  cSharp: string | boolean,
  databases: string[],
  otherJobExperience: string,
  educationLevel: string,
}

export interface Contact {
  firstName: string;
  lastName: string;
  emailAddress: string;
  subject: string;
  questions: string;
}

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.css']
})
export class PdfViewerComponent {
  constructor() {
    pdfDefaultOptions.doubleTapZoomFactor = 'page-actual';
  }
  pdfUrl: string = 'assets/S.pdf'; // Set the PDF URL here


showRes : boolean =false;

   ngAfterViewInit(): void {
    // pdfDefaultOptions.doubleTapZoomFactor = 'page-actual';
  }

  personData:Person ={
    firstName: 'Win Myo',
    lastName: 'Thu',
    country: 'Spain',
    otherJobExperience: 'Web Devloper',
    typeScript: "Yes",
    yearsOfExperience: 11,
    jobDescription: 'UX Designer',
    javaScript: false,
    java: false,
    cSharp: false,
    databases: [ 'oracle'],
    educationLevel: 'masterDegree'
  }



  async submitForm() {
    this.showRes = true;
  }


 initialized = false;

   formData: {
    [fieldName: string]: string | string[] | number | boolean;
  } = {};

   delayedUpdateFormData(): void {
    setTimeout(() => {
      this.initialized = true;
      this.updateFormData();
      console.log('init pdf');
    });
  }

   updateFormData(): void {
    console.log('update pdf field')
    this.formData = {
      firstName : this.personData.firstName,
      lastName: this.personData.lastName,
      country: this.personData.country,
      jobDescription: this.personData.jobDescription,
      typeScript: false,
      javaScript: this.personData.javaScript,
      java: this.personData.java,
      cSharp: this.personData.cSharp,
      databases: this.personData.databases,
      otherJobExperience: this.personData.otherJobExperience,
      yearsOfExperience: this.personData.yearsOfExperience,
      educationLevel: this.personData.educationLevel,
    };
  }

   setFormData(data: { [fieldName: string]: string | string[] | number | boolean } | any) {
    if (this.initialized) {
      this.personData.firstName = data.firstName as string;
      this.personData.lastName = data.lastName as string;
      this.personData.country = data.country as string;
      this.personData.jobDescription = data.jobDescription as string;
      this.personData.typeScript = data.typeScript as string | boolean;
      this.personData.javaScript = data.javaScript as string | boolean;
      this.personData.java = data.java as string | boolean;
      this.personData.cSharp = data.cSharp as string | boolean;
      this.personData.databases = data.databases as string[];
      this.personData.otherJobExperience = data.otherJobExperience as string ;
      this.personData.yearsOfExperience = data.yearsOfExperience as string;
      this.personData.educationLevel = data.educationLevel as string;

      this.showRes = false;

    }
  }
}
