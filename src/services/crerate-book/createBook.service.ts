import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Book } from 'src/app/interfaces/book';
import { Config } from '../config';

@Injectable()
export class CreateaBookService {
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

  public createBook(controller: string, data: Book): Observable<any> {
    this.headers();
    return this.http.post(`${this.url_serve}${controller}`, data, { headers: {
      'Content-Type': 'application/json',
    } });
  }
}
