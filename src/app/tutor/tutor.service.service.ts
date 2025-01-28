import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { TutorInterface } from '../interfaces/tutorInterface';
import { catchError, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ErrorHandlerService } from '../core/errorHandler';

@Injectable({
  providedIn: 'root',
})
export class TutorServiceService {
  private apiUrl: string = `${environment.apiUrl}/tutors`;
  private headers = new HttpHeaders().set('x-api-key', `${environment.apiKey}`);

  constructor(
    private http: HttpClient,
    private errorHandlerService: ErrorHandlerService
  ) {}

  getTutors(): Observable<TutorInterface[]> {
    return this.http
      .get<TutorInterface[]>(this.apiUrl, { headers: this.headers })
      .pipe(catchError(this.errorHandlerService.handleError));
  }
}
