import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Config } from '../config';

@Injectable()
export class HomeServices {
  private config?: Config;
  options: any;
  url_serve!: string;

  constructor(
    public http: HttpClient
  ) {
  }

  public headers() {
    this.config = new Config;
    this.url_serve = this.config.getApiDomain();
    return this.options;
  }

  public getAll(controller: string): Observable<any> {
    this.headers();
    return this.http.get(`${this.url_serve}${controller}`, { headers: {
      'Content-Type': 'application/json',
    } });
  }
}
