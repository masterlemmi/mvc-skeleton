import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor(
    private _http: HttpClient, private router: Router) { }

  hello(): Observable<any> {
    return this._http.get("/api/hello", {responseType: 'text'});
  }

}