import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-ssr';

  constructor(
    private meta: Meta,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.meta.addTag({
      name: 'description',
      content: 'Take GitHub to the command line'
    });
    if (isPlatformBrowser(this.platformId)) {
      navigator.geolocation.getCurrentPosition((res) => {
        console.log(res);
      })
    }
    
  }
}
