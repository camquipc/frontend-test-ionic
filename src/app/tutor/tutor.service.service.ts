import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { TutorInterface } from '../interfaces/tutorInterface';
import { catchError, Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { ErrorHandlerService } from '../core/errorHandler';

@Injectable({
  providedIn: 'root',
})
export class TutorServiceService {
  private apiUrl: string = `${environment.apiUrl}tutors`;
  private headers = new HttpHeaders().set('x-api-key', `${environment.apiKey}`);
  private fakeData: TutorInterface[] = [{
    "id": "5d9580c4-71b2-495a-bf61-3997379981b4",
    "FirstName": "Eleanore",
    "LastName": "Wiza",
    "Email": "Monica54@example.net",
    "DateOfBirth": "2024-07-04T12:20:57.510Z",
    "Nationality": "Berkshire",
    "Speciality": "Automotive"
  },
  {
    "id": "acda7905-a8bb-4ed8-8bed-9d13cab27774",
    "FirstName": "Ignacio",
    "LastName": "Waelchi",
    "Email": "Evie96@example.net",
    "DateOfBirth": "2024-10-14T19:15:10.607Z",
    "Nationality": "Buckinghamshire",
    "Speciality": "Electronics"
  },
  {
    "id": "bc140957-4bc8-4c3f-a719-e10b3bc0af82",
    "FirstName": "Guadalupe",
    "LastName": "Mertz",
    "Email": "Annabel_Langosh@example.net",
    "DateOfBirth": "2024-09-10T07:19:08.227Z",
    "Nationality": "Cambridgeshire",
    "Speciality": "Jewelery"
  }];

    

  constructor(
    private http: HttpClient,
    private errorHandlerService: ErrorHandlerService
  ) {}

  getTutors(): Observable<TutorInterface[]> {
    return this.http
      .get<TutorInterface[]>(this.apiUrl, { headers: this.headers })
      .pipe(catchError( () => {
        this.errorHandlerService.handleError;
        return of(this.fakeData);
      }));
  }
}
