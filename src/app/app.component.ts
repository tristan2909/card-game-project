import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  colors: string[] = ["Carreau", "Cœur", "Pique", "Trefle"];
  values: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Valet", "Dame", "Roi"];
  hand: string[] = [];
  sortedHand: string[] = [];
  colorOrder: string[] = [];
  valueOrder: string[] = [];
  isHandGenerated: boolean = false;

  shuffleColor() {
    this.colorOrder = this.colors.sort((a, b) => 0.5 - Math.random());
  };

  shuffleValue() {
    this.valueOrder = this.values.sort((a, b) => 0.5 - Math.random());
  };

  getRandomNumber(max: number): number {
    return Math.floor(Math.random() * max);
  };

  generateHand(): void {
    this.isHandGenerated = true;
    this.shuffleColor();
    this.shuffleValue();
    
    this.hand = [];
    this.sortedHand = [];
    do {
      const color: string = this.colors[this.getRandomNumber(3)];
      const value: string = this.values[this.getRandomNumber(12)];
      const card: string = value + " " + color;
      if (!this.hand.includes(card)) {
        this.hand.push(card);
      }
    } while(this.hand.length !== 10);    
  };

  sortHand(): void {
    this.sortedHand = [];
    this.colorOrder.forEach(color => {
      this.valueOrder.forEach(value => {
        if(this.hand.includes(value + " " + color)){
          this.sortedHand.push(value + " " + color)
        }
      });
    });
  };
}
