import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Store, provideStore, StoreModule } from '@ngrx/store';
import { routing } from './routing';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GameComponent } from './game/game.component';
import { ScoreboardComponent } from './game/scoreboard/scoreboard.component';

import { RESTART_GAME, MATCH_STEP } from './actions'; // The actions
import { gameReducer } from './reducers';
import { BoardComponent } from './game/board/board.component';

//Pipes
import { moveLabelPipe } from './shared/pipes/game.pipe';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    GameComponent,
    ScoreboardComponent,
    BoardComponent,
    moveLabelPipe,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    StoreModule.provideStore({ gameReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})

// , provideStore({ gameReducer })

export class AppModule { }
