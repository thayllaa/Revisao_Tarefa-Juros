import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { JurosCompostosComponent } from './components/juros-compostos/juros-compostos.component';
import { JurosSimplesComponent } from './components/juros-simples/juros-simples.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports: [ CommonModule, BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, JurosCompostosComponent, JurosSimplesComponent ],
  bootstrap: [ AppComponent ],
})
export class AppModule {}
