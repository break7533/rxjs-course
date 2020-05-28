import { Component, OnInit } from '@angular/core';
import { Course } from "../model/course";
import { interval, Observable, of, timer, noop, VirtualTimeScheduler, throwError } from 'rxjs';
import { catchError, delayWhen, map, retryWhen, shareReplay, tap, finalize } from 'rxjs/operators';
import { createHttpObservable } from '../common/util';
import { COURSES } from '../../../server/db-data';


@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    beginnersCourses$: Observable<Course[]>;
    advancedCourses$: Observable<Course[]>;

    constructor() {

    }

    ngOnInit() {

        const http$ = createHttpObservable('/api/courses');

        const courses$: Observable<Course[]> = http$.pipe(
            catchError((err) => {
                console.log('Error occured', err);
                return throwError(err);
            }),
            finalize(() => {
                console.log('Finalized was executed')
            }),
            tap(() => console.log('running http')),
            map((res) => Object.values(res['payload'])),
            shareReplay(),
        );

        this.beginnersCourses$ = courses$.pipe(
            map((courses) => courses.filter((course) => course.category === 'BEGINNER'))
        );

        this.advancedCourses$ = courses$.pipe(
            map((courses) => courses.filter((course) => course.category === 'ADVANCED'))
        );
    }

}
