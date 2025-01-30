import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { catchError, Observable, of } from 'rxjs';
import { UserInterface } from '../interfaces/userInterface';
import { environment } from 'src/environments/environment';
import { ErrorHandlerService } from '../core/errorHandler';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  private apiUrl: string = `${environment.apiUrl}users`;
  private headers = new HttpHeaders().set('x-api-key', `${environment.apiKey}`);
  private fakeData: UserInterface[] = [
    {
      Id: '3b500762-2b16-4b55-8d3f-7d76983a6c1b',
      FirstName: 'Estrella',
      LastName: 'Kunde',
      DateOfBirth: '2024-12-04T04:46:50.835Z',
      Address: 'Cara Drive',
    },
    {
      Id: 'e0c2c68b-960d-4c3a-9ec4-30c507f5e04e',
      FirstName: 'Ivy',
      LastName: 'Stehr',
      DateOfBirth: '2024-12-24T03:53:27.259Z',
      Address: 'Littel Stream',
    },
    {
      Id: '22977191-9b39-414d-9d4a-5768a303447d',
      FirstName: 'Mario',
      LastName: 'Franey',
      DateOfBirth: '2025-01-21T17:05:42.337Z',
      Address: 'Germaine Crest',
    },
    {
      Id: '8982850b-3e05-4885-ae80-f2d84de3b243',
      FirstName: 'Jayson',
      LastName: 'Miller',
      DateOfBirth: '2024-12-24T10:55:12.157Z',
      Address: 'Shields Crest',
    },
    {
      Id: 'f63b2cfa-0d4b-48c2-aff6-488c1cf56682',
      FirstName: 'Evans',
      LastName: 'Schinner',
      DateOfBirth: '2024-02-21T15:43:51.461Z',
      Address: 'Konopelski Valley',
    },
  ];

  constructor(
    private http: HttpClient,
    private errorHandlerService: ErrorHandlerService
  ) {}

  getUsers(): Observable<UserInterface[]> {
    return this.http
      .get<UserInterface[]>(this.apiUrl, { headers: this.headers })
      .pipe(
        catchError(() => {
          this.errorHandlerService.handleError;
          return of(this.fakeData);
        })
      );
  }
}
