import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(private translate:TranslateService) {
    translate.addLangs(['en','hy']);
    const browserLang = translate.getBrowserLang();
    const langToUse = browserLang && browserLang.match(/en|hy|ru/) ? browserLang : 'en';
    translate.use(langToUse);
   }
   switchLanguage(language: string) {
    this.translate.use(language);
    localStorage.setItem('language', language);
  }

  initializeLanguage() {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      this.translate.use(savedLanguage);
    } else {
      const browserLang = this.translate.getBrowserLang();
      const langToUse = browserLang && browserLang.match(/en|hy|ru/) ? browserLang : 'en';
      this.translate.use(langToUse);
    }
  }
}
