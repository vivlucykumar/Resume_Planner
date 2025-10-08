import { Component, OnInit } from '@angular/core';
import { ResumeDataService } from '../../services/resume-data.service';
import { ISkill } from '../../models/resume.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
      standalone: true, // <-- Make it standalone
  imports: [CommonModule], // <-- Add it to imports
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skillGroups: ISkill[] = [];

  constructor(private resumeDataService: ResumeDataService) { }

  ngOnInit(): void {
    this.skillGroups = this.resumeDataService.getSkills();
  }
}