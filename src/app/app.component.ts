import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-raf';
  imageSource = 'https://images.pexels.com/photos/924824/pexels-photo-924824.jpeg';
  imageTitle = 'Pexels Image';
  width = 250;
  height = 250;
  colspan = 5;
  isActive = false;
  title_copy = 'test-raf';

  onSave() {
    this.isActive = !this.isActive;
    this.title = this.title_copy ? "This is My App, not Rafeen's!" : this.title;
  }
}

