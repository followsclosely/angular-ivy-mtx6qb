import { Injectable, OnInit } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

import {Player} from '../player';

@Injectable()
export class PlayerPoolService implements OnInit {

  constructor(private http: HttpClient) {
    this.http.get('https://raw.githubusercontent.com/followsclosely/fantasy-sports/master/nfl/playoff/src/main/resources/stats/2015/2015.csv', {responseType: "text"} ).subscribe(data => {
      //console.log(data);

      data.split('\n').forEach( (line) => {
        
        if( !line.startsWith('#')){
          console.log(line);
          var elements = line.split(',');
          console.log(elements[0]);
        }
    });

    });
  }
  
  ngOnInit(){ }


}