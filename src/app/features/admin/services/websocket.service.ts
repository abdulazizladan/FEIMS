import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from "rxjs/webSocket";
import * as Rx from 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

const subject = webSocket("ws://localhost:8081");

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  constructor() {
    subject.subscribe(
      msg => console.log('message received: ' + msg), // Called whenever there is a message from the server.
      err => console.log(err), // Called if at any point WebSocket API signals some kind of error.
      () => console.log('complete') // Called when connection is closed (for whatever reason).
    );
  }

  /*private subject: Rx.Subject<MessageEvent>;

  public connect(url): Rx.Subject<MessageEvent>{
    if(!this.subject){
      this.subject = this.create(url);
      console.log("Successfully conneted: " + url)
    }
    return this.subject;
  }

  private create(url: string): Rx.Subject<MessageEvent>{
    let ws = new WebSocket(url);

    let observable = new Rx.Observable(
      (obs: Rx.Observable<MessageEvent>) => {
        ws.onmessage = obs.next.bind(obs);
        ws.onerror = obs.error.bind(obs);
        ws.onclose = obs.complete.bind(obs);
        return ws.close.bind(ws);
      }
    )

    let observer = {
      next: (data: object) => {
        if(ws.readyState === WebSocket.OPEN){
          ws.send(JSON.stringify(data))        }

      }
    }

    return Rx.Subject.create(observer, observable);
  }*/
}
