import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { interval, timer, fromEvent } from 'rxjs';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  //   document.addEventListener('click', evt => {
  //     console.log(evt);
  //   });

  //   let counter = 0;
  //   setInterval(() => {
  //     console.log(counter);
  //     counter++;
  //   }, 1000);

  //   setTimeout(() => {
  //     console.log('Timeout has elapsed');
  //   }, 3000);

  // Interval, returns observable of numbers
  // const interval$ = interval(1000);
  // interval$.subscribe((val) => console.log("stream 1 " + val));
  // interval$.subscribe((val) => console.log("stream 2 " + val));

  // Timer, returns observable of numbers with a delay
  // const timer$ = timer(3000, 1000);
  // timer$.subscribe((val) => console.log("stream 1 " + val));

  // Events, returns observable of an Event
  // const click$ = fromEvent(document, 'click');
  // click$.subscribe((val) => console.log(val));

  }
}
