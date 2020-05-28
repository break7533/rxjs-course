import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { interval, timer, fromEvent, Observable, Observer, noop, of, concat, merge } from 'rxjs';
import { createHttpObservable } from '../common/util';
import { map } from 'rxjs/operators';

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
    // click$.subscribe(
    //   (val) => console.log(val),
    //   // Error out at any time, does not call complete
    //   (err) => console.error(err),
    //   // Completed, when the stream emits the last value
    //   () => console.log('Completed'),
    //   );

    // We cam unsubscribe at any time with the subscription returned by the subscribe
    // const timer$ = timer(3000, 1000);
    // const sub = timer$.subscribe((val) => console.log("stream 1 " + val));
    // setTimeout(() => sub.unsubscribe(), 5000);



    // const http$ = createHttpObservable('/api/courses');

    // const courses$ = http$.pipe(
    //   map((res) => Object.values(res['payload'])),
    // );

    // courses$.subscribe(
    //     (courses) => console.log(courses),
    //     noop,
    //     () => console.log('completed'),
    //   );

    // Contact example
    // const source1$ = of(1, 2, 3);
    // const source2$ = of(4, 5, 6);
    // const source3$ = of(7, 8, 9);
    // const results$ = concat(source1$, source2$, source3$);
    // results$.subscribe((val) => console.log(val));

    // Merge Example
    const interval1$ = interval(1000);
    const interval2$ = interval1$.pipe((map((val) => 10 * val)));
    const result$ = merge(interval1$, interval2$);
    result$.subscribe(console.log)

  }
}
