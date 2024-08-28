import { HttpClientModule } from '@angular/common/http';
import { RecipesService } from '../recipecate-api-client';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Component, OnInit } from '@angular/core';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatToolbarModule,
    HttpClientModule,
    MatOptionModule,
    MatSelectModule,
    TranslocoModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [
    RecipesService
  ]
})
export class AppComponent implements OnInit {

  title = 'recipecate-ui';
  selectedLanguage = 'en';

  constructor(private translocoService: TranslocoService) {

  }

  ngOnInit(): void {
    this.selectedLanguage = navigator.language.split('-')[0];

    this.translocoService.setDefaultLang('en');
    this.translocoService.setActiveLang(this.selectedLanguage);
  }

  switchLanguage(language: string) {
    this.selectedLanguage = language;
    this.translocoService.setActiveLang(this.selectedLanguage);
  }
}
