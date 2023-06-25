import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Game } from '../models/game.models';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import * as GameActions from '../actions/game.actions';
import { Player, Weapons } from 'src/models/player.model';

interface GmaeState {
  game: Game
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  board$: Observable<string[]>;

  game$: Observable<Game>;

  gridType$: Observable<Weapons>;

  winnerState$: Observable<boolean[]>;

  won: boolean[];
  

  constructor(private store: Store<GmaeState>){
    this.store.dispatch(GameActions.enterGame());
    this.store.dispatch(GameActions.randomPlayerPick());
    this.game$ = this.store.select('game');
    this.gridType$ = this.store.select(appstate => appstate.game.turn.weapon);
    this.board$ = this.store.select(appstate => appstate.game.board);
    this.winnerState$ = this.store.select(appstate => appstate.game.board_winner_state);
    this.won = [];

    
  }

  reset() {
    this.store.dispatch(GameActions.gameReset());
  }

  onBoardClick(item: number)
  {
    switch (item){
      case 0:
        this.store.dispatch(GameActions.move({gridIndex: item}))
        this.store.dispatch(GameActions.gameFinished());
        break;
      case 1:
        this.store.dispatch(GameActions.move({gridIndex: item}))
        this.store.dispatch(GameActions.gameFinished());
        break;
      case 2:
        this.store.dispatch(GameActions.move({gridIndex: item}))
        this.store.dispatch(GameActions.gameFinished());
        break;
      case 3:
        this.store.dispatch(GameActions.move({gridIndex: item}))
        this.store.dispatch(GameActions.gameFinished());
        break;
      case 4:
        this.store.dispatch(GameActions.move({gridIndex: item}))
        this.store.dispatch(GameActions.gameFinished());
        break;
      case 5:
        this.store.dispatch(GameActions.move({gridIndex: item}))
        this.store.dispatch(GameActions.gameFinished());
        break;
      case 6:
        this.store.dispatch(GameActions.move({gridIndex: item}))
        this.store.dispatch(GameActions.gameFinished());
        break;
      case 7:
        this.store.dispatch(GameActions.move({gridIndex: item}))
        this.store.dispatch(GameActions.gameFinished());
        break;
      case 8:
        this.store.dispatch(GameActions.move({gridIndex: item}))
        this.store.dispatch(GameActions.gameFinished());
        break;
      default:
        console.log('default')
    }
  }
}
