import { HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateService, TranslateStore } from '@ngx-translate/core';
import { RecipesService } from '../recipecate-api-client';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Component } from '@angular/core';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatToolbarModule,
    HttpClientModule,
    TranslateModule,
    MatOptionModule,
    MatSelectModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [
    RecipesService
  ]
})
export class AppComponent {

  title = 'recipecate-ui';
  selectedLanguage = 'en';

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
    this.translate.use('en');

    const browserLang = this.translate.getBrowserLang();
    if (browserLang) {
      translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
    }
  }

  switchLanguage(language: string) {
    this.selectedLanguage = language;
    this.translate.use(this.selectedLanguage);
  }
}
