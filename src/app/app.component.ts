import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecipesService } from '../recipecate-api-client';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatToolbarModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [RecipesService]
})
export class AppComponent {
  title = 'recipecate-ui';
}
