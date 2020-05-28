import { Observable, Observer } from "rxjs";

export function createHttpObservable(url: string) {
  return Observable.create((observer: Observer<string>) => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch(url, { signal }).then((response) => {
      return response.json();
    }).then((body) => {
      observer.next(body);
      observer.complete();
    })
      .catch((err) => {
        observer.error(err);
      });

      return () => controller.abort();
  });
}

