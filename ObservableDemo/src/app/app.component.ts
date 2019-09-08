import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit , OnDestroy{
  title = 'ObservableDemo';
  num : number = 0;
  numberObservable = interval(1000);
  subscription : Subscription;

  constructor(){}

  ngOnInit(){
    this.subscription = this.numberObservable.subscribe(
      (data)=>{
        this.num = data;
      },
      (error)=>{

      },
      ()=>{
        console.log("Complete...!");
      }
    )
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
