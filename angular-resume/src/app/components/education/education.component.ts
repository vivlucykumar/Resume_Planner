import { Component, OnInit } from '@angular/core';
import { ResumeDataService } from '../../services/resume-data.service';
import { IEducation } from '../../models/resume.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
    standalone: true, // <-- Make it standalone
  imports: [CommonModule], // <-- Add it to imports
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  education: IEducation[] = [];

  constructor(private resumeDataService: ResumeDataService) { }

  ngOnInit(): void {
    this.education = this.resumeDataService.getEducation();
  }
}