import { Component, HostListener, OnInit } from '@angular/core';
import { SliderService } from '../../../shared/Slider.service';

@Component({
  selector: 'app-UPSCALE',
  templateUrl: './UPSCALE.component.html',
  styleUrls: ['./UPSCALE.component.css']
})
export class UPSCALEComponent implements OnInit {
  
  constructor(private sliderService :SliderService) { }

  ngOnInit() {
  }

  zoomImage: any;

  onMouseMove(event: MouseEvent): void {
    const rect = this.zoomImage.nativeElement.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const offsetY = event.clientY - rect.top;

    // Calculate percentage of mouse position
    const xPercent = (offsetX / rect.width) * 100;
    const yPercent = (offsetY / rect.height) * 100;

    // Apply the calculated values to transform-origin for dynamic zoom
    this.zoomImage.nativeElement.style.transformOrigin = `${xPercent}% ${yPercent}%`;
  }

  onMouseLeave(): void {
    // Reset the zoom effect when the mouse leaves
    this.zoomImage.nativeElement.style.transformOrigin = 'center';
  }


  get sliderValue(): number {
    return this.sliderService.sliderValue;
  }

  get clipPath(): string {
    return this.sliderService.getClipPath();
  }

  onSliderInput(event: Event): void {
    this.sliderService.onSliderInput(event);
  }

  startSlide(event: MouseEvent): void {
    this.sliderService.startSlide(event);
  }

  @HostListener('window:mouseup')
  stopSlide(): void {
    this.sliderService.stopSlide();
  }

 
}
