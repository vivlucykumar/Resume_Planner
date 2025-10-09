import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeDataService } from '../../services/resume-data.service';
import { IAchievement } from '../../models/resume.model';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './achievements.html',
  styleUrls: ['./achievements.css']
})
export class AchievementsComponent implements OnInit {
  achievements: IAchievement[] = [];
  transformStyle: string = 'rotateY(0deg)';
  cellAngle: number = 0;
  currentAngle: number = 0;
  translateZ: number = 0; // Property to hold the calculated distance

  constructor(private resumeDataService: ResumeDataService) { }

  ngOnInit(): void {
    this.achievements = this.resumeDataService.getAchievements();
    if (this.achievements.length > 0) {
      this.cellAngle = 360 / this.achievements.length;
      // Dynamically calculate the translateZ based on panel width (450px) and number of items
      this.translateZ = Math.round((450 / 2) / Math.tan(Math.PI / this.achievements.length));
    }
  }

  getRotation(index: number): string {
    const angle = this.cellAngle * index;
    // Use the dynamically calculated translateZ value
    return `rotateY(${angle}deg) translateZ(${this.translateZ}px)`;
  }

  rotate(direction: 'next' | 'prev'): void {
    this.currentAngle += direction === 'next' ? -this.cellAngle : this.cellAngle;
    this.transformStyle = `rotateY(${this.currentAngle}deg)`;
  }
}

