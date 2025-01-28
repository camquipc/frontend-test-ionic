import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { catchError, Observable } from 'rxjs';
import { UserInterface } from '../interfaces/userInterface';
import { environment } from 'src/environments/environment';
import { ErrorHandlerService } from '../core/errorHandler';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  private apiUrl: string = `${environment.apiUrl}/users`;
  private headers = new HttpHeaders().set('x-api-key', `${environment.apiKey}`);

  constructor(
    private http: HttpClient,
    private errorHandlerService: ErrorHandlerService
  ) {}

  getUsers(): Observable<UserInterface[]> {
    return this.http
      .get<UserInterface[]>(this.apiUrl, { headers: this.headers })
      .pipe(catchError(this.errorHandlerService.handleError));
  }
}
