import { Component } from '@angular/core';
import { ReloadService } from './shared/reload.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'MultiMedia';
  constructor(private router: Router ,
    private reload : ReloadService
  ) { }


  ngAfterViewInit(): void {   
    this.reload.initializeLoader();
  }
  showHeaderAndNavbar: boolean = true;
  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.showHeaderAndNavbar =  !this.router.url.includes('/error') ;
    });
  }
  
  
}
