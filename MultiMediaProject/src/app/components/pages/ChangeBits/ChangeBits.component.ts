import { Component, OnInit } from '@angular/core';
import { ReloadService } from '../../../shared/reload.service';

@Component({
  selector: 'app-ChangeBits',
  templateUrl: './ChangeBits.component.html',
  styleUrls: ['./ChangeBits.component.css']
})
export class ChangeBitsComponent implements OnInit {

  constructor(private reloadService: ReloadService) { }
  ngAfterViewInit(): void {
    this.reloadService.initializeLoader();
  }

  ngOnInit() {
  }

}
