import { User } from './../../shared/models/user.interface';
import { Http, Response } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConnectionBackend, RequestOptions, Request, RequestOptionsArgs, Headers } from '@angular/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Injectable()
export class RegisterService {

  constructor(private http: Http) { }

  getUsers(): Observable<User[]> {
    return this.http.get('http://localhost:3000/users')
      .pipe(
      map((response: any) => response.json()),
      catchError((error: any) => throwError(error.json()))
      );
  }

  addUser(user): Observable<User> {
    const httpOptions = new RequestOptions();
    httpOptions.headers = new Headers();
    httpOptions.headers.append('Content-Type', 'application/json');

    return this.http.post('http://localhost:3000/users', user, httpOptions)
      .pipe(
      map((response: any) => response.json()),
      catchError((error: any) => throwError(error.json()))
      );
  }

  getUserById(id): Observable<User> {
    const url = `${'http://localhost:3000/users'}/${id}`;
    return this.http.get(url)
      .pipe(
      map((response: any) => response.json()),
      catchError((error: any) => throwError(error.json()))
      );
  }

  updateUserById(user, id): Observable<User> {
    const url = `${'http://localhost:3000/users'}/${id}`;
    const httpOptions = new RequestOptions();
    httpOptions.headers = new Headers();
    httpOptions.headers.append('Content-Type', 'application/json');
    return this.http.put(url, user, httpOptions)
      .pipe(
      map((response: any) => response.json()),
      catchError((error: any) => throwError(error.json()))
      );
  }
}
