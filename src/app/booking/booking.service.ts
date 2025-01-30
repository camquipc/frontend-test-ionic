import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { catchError, Observable, of } from 'rxjs';
import { BookingInterface } from '../interfaces/bookingInterface';
import { environment } from 'src/environments/environment';
import { ErrorHandlerService } from '../core/errorHandler';

@Injectable({
  providedIn: 'root',
})
export class BookingServiceService {
  private apiUrl: string = `${environment.apiUrl}booking`;
  private headers = new HttpHeaders().set('x-api-key', `${environment.apiKey}`);

  private fakeData: BookingInterface[] = [
    {
      "id": "dd4c2c88-2807-4306-95e2-eab65427ac67",
      "TutorId": {
        "id": "1bb0b0b2-baf3-4de5-8e10-68610291df09",
        "FirstName": "Justus",
        "LastName": "Osinski",
        "Email": "Robin_Muller22@example.org",
        "DateOfBirth": "2024-11-13T07:33:34.223Z",
        "Nationality": "Borders",
        "Speciality": "Shoes"
      },
      "StudentId": {
        "Id": "e91d0cd7-7cad-4aaa-9293-20ee94dab6fe",
        "FirstName": "Annette",
        "LastName": "Lakin",
        "DateOfBirth": "2024-03-16T06:28:18.869Z",
        "Address": "Giovanna Ridges"
      },
      "Date": "2025-12-26T22:23:14.716Z",
      "StartTime": "2024-10-25T12:05:49.244Z",
      "EndTime": "2024-10-23T12:02:11.502Z"
    },
    {
      "id": "2fa0eb18-65b4-4348-ab8f-13f8a7fdfd62",
      "TutorId": {
        "id": "3331076f-7ef5-4edc-b12c-4bf2ca4929ce",
        "FirstName": "Eileen",
        "LastName": "Moen",
        "Email": "Erika_Collins@example.org",
        "DateOfBirth": "2024-10-05T08:56:12.340Z",
        "Nationality": "Berkshire",
        "Speciality": "Automotive"
      },
      "StudentId": {
        "Id": "67b65bf5-52b2-4b17-85fc-32f2f7c9b6f9",
        "FirstName": "Crystal",
        "LastName": "Bosco",
        "DateOfBirth": "2024-04-27T20:30:02.207Z",
        "Address": "Lauryn Hollow"
      },
      "Date": "2025-03-22T04:39:07.184Z",
      "StartTime": "2024-10-03T16:46:37.062Z",
      "EndTime": "2024-08-27T23:16:05.468Z"
    },
    {
      "id": "5557d3cd-97e9-43b0-8870-9872244956a8",
      "TutorId": {
        "id": "4dfc7282-8b96-45c1-aa56-9c55cd8bd961",
        "FirstName": "Amanda",
        "LastName": "Hilpert",
        "Email": "Mustafa.Schulist48@example.com",
        "DateOfBirth": "2024-02-04T11:47:44.237Z",
        "Nationality": "Berkshire",
        "Speciality": "Industrial"
      },
      "StudentId": {
        "Id": "5950c532-6829-48ed-87d7-cbd91729da0d",
        "FirstName": "Sylvan",
        "LastName": "Kautzer",
        "DateOfBirth": "2024-09-04T06:47:28.562Z",
        "Address": "Lorena Mountain"
      },
      "Date": "2025-08-16T02:52:57.139Z",
      "StartTime": "2024-11-01T02:12:24.921Z",
      "EndTime": "2024-06-19T17:23:50.523Z"
    }
  ];

  constructor(
    private http: HttpClient,
    private errorHandlerService: ErrorHandlerService
  ) {}

  getBookings(): Observable<BookingInterface[]> {
    return this.http
      .get<BookingInterface[]>(this.apiUrl, { headers: this.headers })
      .pipe(
        catchError(() => {
          this.errorHandlerService.handleError;
          return of(this.fakeData);
        })
      );
  }
}
