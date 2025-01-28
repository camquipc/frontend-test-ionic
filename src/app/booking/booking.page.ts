
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonList, IonTitle, IonToolbar,
IonCardContent,  IonCard,  IonSpinner ,IonSearchbar} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { caretDownSharp } from 'ionicons/icons';
import { BookingInterface } from '../interfaces/bookingInterface';
import { BookingServiceService } from './booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
  standalone: true,
  imports: [IonSpinner, IonCard, IonCardContent, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,  IonList, IonSearchbar],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BookingPage implements OnInit {

  public isLoading = true;
  public items: BookingInterface[] = [];
  public searchBooking: BookingInterface[] = [];
  public userName: { specialty: string; }[] | undefined;

  constructor(private bookingService: BookingServiceService) { 
    addIcons({ caretDownSharp }); 
  }

  ngOnInit() {
    this.getBookings();
  }

  getBookings(): void {
    this.bookingService.getBookings().subscribe({
      next: (res) => {
        let data = res.map((item: BookingInterface): BookingInterface => {
          const match = item.id?.match(/.{1,8}/g);
          if (match) {
            item.id = match[0];
          }
          return item;
        });
        this.items = data;
        this.searchBooking = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.isLoading = false; 
        console.error('Error fetching tutors:', err);   
      }
    });
  }


 
  searchBookingForUser(event: Event) {
    const target = event.target as HTMLIonSearchbarElement;
    const query = target.value?.toLowerCase() || '';
    this.searchBooking = this.items.filter((d) => d.StudentId.FirstName.toLowerCase().includes(query));
  }


  
}
