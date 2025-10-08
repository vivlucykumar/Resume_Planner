import { Component, OnInit } from '@angular/core';
import { ResumeDataService } from '../../services/resume-data.service';
import { ICertification } from '../../models/resume.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-certifications',
standalone: true, // <-- Make it standalone
  imports: [CommonModule], // <-- Add it to imports
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent implements OnInit {
  certifications: ICertification[] = [];

  constructor(private resumeDataService: ResumeDataService) { }

  ngOnInit(): void {
    this.certifications = this.resumeDataService.getCertifications();
  }
}