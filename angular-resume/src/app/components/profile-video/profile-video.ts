import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeDataService } from '../../services/resume-data.service';

@Component({
  selector: 'app-profile-video',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-video.html',
  styleUrls: ['./profile-video.css']
})
export class ProfileVideoComponent implements OnInit {
  videoUrl: string = '';
  isPanelOpen: boolean = false; // State to manage the panel's visibility

  constructor(private resumeDataService: ResumeDataService) { }

  ngOnInit(): void {
    this.videoUrl = this.resumeDataService.getProfileVideoUrl();
  }

  // Method to toggle the panel open or closed
  togglePanel(): void {
    this.isPanelOpen = !this.isPanelOpen;
  }
}

