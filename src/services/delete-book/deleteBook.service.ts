import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Config } from '../config';

@Injectable()
export class DeleteBookService {
  private config?: Config;
  private options: any;
  private url_serve!: string;

  constructor(
    private http: HttpClient
  ) {
  }

  private headers() {
    this.config = new Config;
    this.url_serve = this.config.getApiDomain();
    return this.options;
  }

  public deleteBook(controller: string, idBook: any): Observable<any> {
    this.headers();
    return this.http.delete(`${this.url_serve}${controller}?id=${idBook}`, { headers: {
      'Content-Type': 'application/json',
    } });
  }
}
