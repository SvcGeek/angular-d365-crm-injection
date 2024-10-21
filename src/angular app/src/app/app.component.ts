import { Component } from '@angular/core';
import { SearchComponent } from "./components/search/search.component";
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [SearchComponent, MatButtonModule]
})
export class AppComponent {
  title = 'angular-d365-crm-injection';
  show: boolean = false;
  showCmp2(s: Event) {
    alert('Hi, my pleasure!')
    this.show = !this.show;
  }
}
