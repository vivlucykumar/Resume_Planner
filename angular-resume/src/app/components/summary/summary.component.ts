import { Component, OnInit } from '@angular/core';
import { ResumeDataService } from '../../services/resume-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-summary',
      standalone: true, // <-- Make it standalone
  imports: [CommonModule], // <-- Add it to imports
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  summary: string[] = [];

  constructor(private resumeDataService: ResumeDataService) { }

  ngOnInit(): void {
    this.summary = this.resumeDataService.getSummary();
  }
}