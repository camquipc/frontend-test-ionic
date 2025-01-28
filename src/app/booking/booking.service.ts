import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { catchError, Observable } from 'rxjs';
import { BookingInterface } from '../interfaces/bookingInterface';
import { environment } from 'src/environments/environment';
import { ErrorHandlerService } from '../core/errorHandler';

@Injectable({
  providedIn: 'root',
})
export class BookingServiceService {
  private apiUrl: string = `${environment.apiUrl}/booking`;
  private headers = new HttpHeaders().set('x-api-key', `${environment.apiKey}`);

  constructor(
    private http: HttpClient,
    private errorHandlerService: ErrorHandlerService
  ) {}

  getBookings(): Observable<BookingInterface[]> {
    return this.http
      .get<BookingInterface[]>(this.apiUrl, { headers: this.headers })
      .pipe(catchError(this.errorHandlerService.handleError));
  }
}
