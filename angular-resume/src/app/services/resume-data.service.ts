import { Injectable } from '@angular/core';
import { IExperience, IEducation, ICertification, ISkill, IAchievement } from '../models/resume.model';

@Injectable({
  providedIn: 'root'
})
export class ResumeDataService {

  constructor() { }

  // --- PERSONAL DETAILS ---
  getName(): string {
    return 'Vivek Kumar';
  }

  getHeadline(): string {
    return 'Senior Associate at Cognizant | CSM® | IIMA | BITS MBA in AI for Business';
  }

  getSummary(): string[] {
    return [
      'A passionate coder with 13+ years of experience, specializing in Core Java, Spring Boot, Microservices, and AWS.',
      'Proven expertise in leading teams, contributing individually, and driving cloud migration projects in the BFSI and Automotive domains.',
      'Seeking a challenging position to utilize my skills in an environment that offers professional growth while being resourceful, innovative, and flexible.'
    ];
  }

  getContactInfo() {
    return {
      email: 'viv1989kumar@gmail.com',
      phone: '+91 9960969420',
      linkedin: 'linkedin.com/in/vivek-kumar-83673a45',
      location: 'Pune, Maharashtra, India',
      profileImageUrl: 'assets/certificates/profile.png', // <-- Add your profile image here
      coverImageUrl: 'assets/certificates/cover.png'      // <-- Add your cover image here
    };
  }

  // --- SKILLS ---
  getSkills(): ISkill[] {
    return [
      {
        area: 'Backend & Cloud',
        skills: ['Java 11', 'Spring Boot', 'Spring MVC', 'Microservices', 'AWS', 'Pivotal Cloud Foundry (PCF)', 'Oracle', 'SQL', 'MySQL']
      },
      {
        area: 'DevOps & Tools',
        skills: ['Jenkins', 'Git', 'GitHub', 'Eclipse IDE', 'UCD']
      },
      {
        area: 'Frontend',
        skills: ['Angular', 'React.js']
      },
      {
        area: 'Management & Strategy',
        skills: ['Corporate Strategy', 'Strategy Management', 'Business Strategy', 'Team Leadership', 'Agile (Scrum)']
      }
    ];
  }

  // --- WORK EXPERIENCE ---
  getExperience(): IExperience[] {
    return [
      {
        role: 'Senior Associate',
        company: 'Cognizant',
        duration: 'Feb 2024 - Present',
        location: 'Pune, Maharashtra, India',
        description: ['Working as a Backend & Cloud Developer for the FIS Global Client.'],
        stack: ['Java', 'Spring Boot', 'Cloud Technologies']
      },
      {
        role: 'Senior Software Engineer',
        company: 'Wipro',
        duration: 'Mar 2022 - Feb 2024 (2 years)',
        location: 'Pune, Maharashtra, India',
        description: [
          'Led a POD of 4 developers and 1 DevOps engineer for a major cloud migration project for Wells Fargo.',
          'Migrated legacy applications from JBoss to Tomcat and from Java 8 to Java 11.',
          'Deployed applications on Pivotal Cloud Foundry (PCF) and managed the DevOps pipeline.',
          'Responsible for code quality checks, vulnerability management, and adding new features.'
        ],
        stack: ['Java 11', 'Spring Boot', 'Spring MVC', 'PCF', 'Jenkins', 'Angular', 'React.js']
      },
      {
        role: 'Team Lead',
        company: 'Sphinx Worldbiz Limited',
        duration: 'Aug 2020 - Mar 2022 (1 year 8 months)',
        location: 'Pune, Maharashtra, India',
        description: [
          'Led a team of 5 in the development of SHRM Pro, an HRMS SaaS product.',
          'Acted as a lead backend developer, understanding business requirements and coding features with unit tests.',
          'Managed bug tracking, environment setup, and documentation for the project.'
        ],
        stack: ['Java 8', 'Spring Boot', 'Microservices', 'AWS', 'MySQL', 'Jenkins']
      },
       {
        role: 'Engineer',
        company: 'Onward Technologies Limited',
        duration: 'Aug 2017 - Aug 2020 (3 years 1 month)',
        location: 'Pune, Maharashtra, India',
        description: [
          'Managed and supported the ERP system for client Jaguar Land Rover (JLR), focusing on inventory management.',
          'Fixed production bugs, provided viable solutions, and ensured the application met organizational needs.',
          'Conducted JUnit testing to find and resolve errors in the production environment.'
        ],
        stack: ['Core Java 5', 'Spring (XML)', 'MySQL', 'JUnit']
      },
      {
        role: 'Engineer',
        company: 'Tata Technologies',
        duration: 'Dec 2014 - Aug 2017 (2 years 9 months)',
        location: 'Pune, Maharashtra, India',
        description: [
          'Provided critical support for PLM software for client Volkswagen (VW).',
          'Troubleshot software-related issues to minimize downtime and enhance manufacturing efficiency.',
          'Individually handled a key component and collaborated with VW stakeholders to implement fixes.'
        ],
        stack: ['Core Java', 'MySQL']
      }
    ];
  }

  // --- EDUCATION ---
  getEducation(): IEducation[] {
    return [
      {
        degree: 'Executive MBA, Artificial Intelligence for Business',
        institution: 'Birla Institute of Technology and Science, Pilani',
        details: 'Focus on applying AI concepts to solve business problems.',
        duration: 'Apr 2025 - May 2027 (Expected)'
      },
      {
        degree: 'Strategic Management Program',
        institution: 'Indian Institute of Management Ahmedabad',
        details: 'Course focused on Strategic Leadership and corporate strategy.',
        duration: 'May 2025 - Nov 2025 (Expected)'
      },
      {
        degree: 'Bachelor of Engineering, Mechanical',
        institution: 'Savitribai Phule Pune University',
        details: 'Parvatibai Genba Moze College Of Engineering',
        duration: '2006 - 2010'
      },
       {
        degree: 'Post Graduate Diploma in Design',
        institution: 'Indo-German Tool Room',
        details: 'Specialization in Design.',
        duration: '2010 - 2011'
      }
    ];
  }

  // --- CERTIFICATIONS ---
  getCertifications(): ICertification[] {
    return [
       {
         name: 'Certified Scrum Master (CSM)',
         issuer: 'Scrum Alliance',
         date: 'Mar 2025',
         imageUrl: 'assets/certificates/csm.png'
       },
       {
         name: 'AWS Certified Cloud Practitioner',
         issuer: 'Amazon Web Services',
         date: 'Mar 2023',
         imageUrl: 'assets/certificates/aws.png'
       },
       {
         name: 'Full Stack Certification',
         issuer: 'Internal/Details not specified',
         imageUrl: 'assets/certificates/fullstack.png'
       },
       {
         name: 'IIMB Strategic Management course',
         issuer: 'Indian Institute of Management Bangalore',
         imageUrl: 'assets/certificates/iimb.png'
       },
       {
         name: 'Github Copilot',
         issuer: 'GitHub',
         imageUrl: 'assets/certificates/github.png'
       },
       {
         name: 'Google Cloud Migration Summit',
         issuer: 'Google',
         imageUrl: 'assets/certificates/google.png'
       }
    ];
  }

  // --- ACHIEVEMENTS ---
  getAchievements(): IAchievement[] {
    return [
      {
        imageUrl: 'assets/certificates/germany_onsite.png',
        caption: 'Onsite in Germany for Client Engagement & Support'
      },
      {
        imageUrl: 'assets/certificates/wells_fargo_award.png',
        caption: 'Appreciated by Wells Fargo as "Best Supplier 2022" for Wipro'
      },
      {
        imageUrl: 'assets/certificates/team_lead.png',
        caption: 'Leading a High-Performing Team at Sphinx Worldbiz'
      },
      {
        imageUrl: 'assets/certificates/jlr_project.png',
        caption: 'Supporting the ERP System for Jaguar Land Rover'
      },
      {
        imageUrl: 'assets/certificates/vw_project.png',
        caption: 'Optimizing PLM Software for Volkswagen'
      }
    ];
  }

  // --- PROFILE VIDEO ---
  getProfileVideoUrl(): string {
    // Make sure you have a video file named 'profile_video.mp4' in this folder
    return 'assets/certificates/profile_video.mp4';
  }
}

