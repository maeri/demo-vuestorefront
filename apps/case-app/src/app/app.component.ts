import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'playground-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'case-app';

  constructor(private appTitle: Title, private meta: Meta) {
    this.appTitle.setTitle('case-app');
    this.meta.addTag({
      name: "Marcin 'maeri' Zawadzki",
      content: 'case-app application'
    });
  }
}
