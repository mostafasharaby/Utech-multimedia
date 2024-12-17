import { HostListener, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SliderService {

constructor() { }
sliderValue: number = 50;
  isSliding: boolean = false;

 
  getClipPath(): string {
    return `polygon(0 0, ${this.sliderValue}% 0, ${this.sliderValue}% 100%, 0 100%)`;
  }

  onSliderInput(event: Event): void {
    this.sliderValue = (event.target as HTMLInputElement).valueAsNumber;
  }

  startSlide(event: MouseEvent): void {
    this.isSliding = true;
    event.preventDefault(); 
  }

  @HostListener('window:mouseup')
  stopSlide(): void {
    this.isSliding = false;
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    if (this.isSliding) {
      const container = event.target as HTMLElement;
      const rect = container.getBoundingClientRect();
      const offsetX = event.clientX - rect.left;
      const width = rect.width;
      this.sliderValue = Math.max(0, Math.min((offsetX / width) * 100, 100));
    }
  }
}
