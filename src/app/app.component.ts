import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  board = ['off', 'off', 'off', 'off', 'off', 'off', 'off', 'off'];
  switch(idx){
    for (var i = 0; i < this.board.length; i++){
      if (i == idx){
        console.log(this.board[i]);
        if (this.board[i] == 'on') { this.board[i] = 'off';}
        else if (this.board[i] == 'off') { this.board[i] = 'on';}
      }
    }
  }
}
