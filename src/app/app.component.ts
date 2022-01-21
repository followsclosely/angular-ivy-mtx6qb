import { Component, VERSION } from '@angular/core';

import { PlayerPoolService } from './services/player-pool.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  constructor(private playerPool: PlayerPoolService){

  }
}
