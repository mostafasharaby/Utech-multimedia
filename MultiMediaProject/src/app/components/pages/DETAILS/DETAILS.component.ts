import { Component, HostListener, OnInit } from '@angular/core';
import { SliderService } from '../../../shared/Slider.service';
import { ReloadService } from '../../../shared/reload.service';

@Component({
  selector: 'app-DETAILS',
  templateUrl: './DETAILS.component.html',
  styleUrls: ['./DETAILS.component.css']
})
export class DETAILSComponent implements OnInit {

  constructor(private sliderService: SliderService, private reloadService: ReloadService) { }
  ngAfterViewInit(): void {
    this.reloadService.initializeLoader();
  }
  ngOnInit() {
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

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    this.sliderService.onMouseMove(event);
  }
}
