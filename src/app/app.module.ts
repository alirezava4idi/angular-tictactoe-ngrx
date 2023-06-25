import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app.component';

import { gameReducer } from '../reducers/game.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({game: gameReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
