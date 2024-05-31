import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from './language.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'construction';
  constructor(private languageService: LanguageService) { }

  ngOnInit() {
    this.languageService.initializeLanguage();
  }

  switchLanguage(language: string) {
    this.languageService.switchLanguage(language);
  }
}
