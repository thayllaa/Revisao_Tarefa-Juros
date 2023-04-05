import './polyfills';
import { enableProdMode } from '@angular/core';
import { plataformBrowserDynamic } from '@angular/plataform-browser-dynamic';
import { AppModule } from "./app/app.module";

plataformBrowserDynamic().bootstrapModule(AppModule).then(ref => {
  if(window['ngRef']) {
    window['ngRef'].destroy();
}
window['ngRef'] = ref;
}).catch(err => console.error(err));