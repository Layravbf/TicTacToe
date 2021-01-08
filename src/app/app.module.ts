import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';

@NgModule({
  declarations: [
    AppComponent,
    TicTacToeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
