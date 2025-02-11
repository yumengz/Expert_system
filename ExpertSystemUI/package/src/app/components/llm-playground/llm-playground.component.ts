import { Component } from '@angular/core';

@Component({
  selector: 'app-llm-playground',
  templateUrl: './llm-playground.component.html',
  styleUrls: ['./llm-playground.component.css']
})
export class AppLlmPlaygroundComponent {
  userInput: string = '';
  isLoading: boolean = false;
  response: string = '';

  // Simulating API call
  async sendQuery() {
    if (!this.userInput.trim()) return;
    
    this.isLoading = true;
    this.response = ''; // Clear previous response

    // Simulating a delay (Replace with real API call)
    setTimeout(() => {
      this.response = `🤖 AI Response: ${this.userInput} (Processed)`;
      this.isLoading = false;
    }, 2000);
  }
}
