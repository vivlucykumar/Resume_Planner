import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { SummaryComponent } from './components/summary/summary.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { CertificationsComponent } from './components/certifications/certifications.component';
import { FooterComponent } from './components/footer/footer.component';
import { AchievementsComponent } from './components/achievements/achievements';
import { ProfileVideoComponent } from './components/profile-video/profile-video';

@Component({
  selector: 'app-root',
  standalone: true,
  // This imports array is the fix. It tells AppComponent about the child components.
  imports: [
    HeaderComponent,
    SummaryComponent,
    SkillsComponent,
    ExperienceComponent,
    EducationComponent,
    CertificationsComponent,
    FooterComponent,
    AchievementsComponent,
    ProfileVideoComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'angular-resume';
}

