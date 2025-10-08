import { Component, OnInit } from '@angular/core';
import { ResumeDataService } from '../../services/resume-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
    standalone: true, // <-- Make it standalone
  imports: [CommonModule], // <-- Add it to imports
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  name: string = '';
  headline: string = '';
  contactInfo: any = {};

  constructor(private resumeDataService: ResumeDataService) { }

  ngOnInit(): void {
    this.name = this.resumeDataService.getName();
    this.headline = this.resumeDataService.getHeadline();
    this.contactInfo = this.resumeDataService.getContactInfo();
  }
}