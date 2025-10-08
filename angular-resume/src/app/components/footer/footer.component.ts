import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
      standalone: true, // <-- Make it standalone
  imports: [CommonModule], // <-- Add it to imports
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  currentYear: number = new Date().getFullYear();
  name: string = 'Vivek Kumar';

  constructor() { }

  ngOnInit(): void {
  }

}