import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { JurosCompostosComponent } from './components/juros-compostos/juros-compostos.component';
import { JurosSimplesComponent } from './components/juros-simples/juros-simples.component';

@NgModule ({
  imports: [],
  declarations: [
    AppComponent, JurosCompostosComponent, JurosSimplesComponent
  ],
  bootstrap: [ AppComponent ]
})


export class AppModule{}