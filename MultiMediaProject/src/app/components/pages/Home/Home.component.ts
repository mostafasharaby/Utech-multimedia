import { Component, OnInit } from '@angular/core';
import { ReloadService } from '../../../shared/reload.service';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private reloadService: ReloadService) { }
  ngAfterViewInit(): void {
    this.reloadService.initializeLoader();
  }

  ngOnInit() {
  }
  isVideoVisible = false;

  showVideo(): void {
    this.isVideoVisible = true;
  }

}
