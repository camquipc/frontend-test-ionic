import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent,  IonList, IonTitle, IonToolbar, IonCardTitle,
IonCardContent, IonCardHeader, IonCard,IonSpinner } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { caretDownSharp, logoIonic, eyeOutline } from 'ionicons/icons';
import { UserServiceService } from './user.service.service';
import { UserInterface } from '../interfaces/userInterface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
  standalone: true,
  imports: [IonSpinner, IonCard,  IonCardContent, 
            IonContent,  IonTitle, 
            IonToolbar, CommonModule, FormsModule,IonList],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UserPage implements OnInit {

  public isLoading = true;
  public users: UserInterface[] = [];

  constructor(private tutorService: UserServiceService, private router: Router) { 
    addIcons({eyeOutline,logoIonic,caretDownSharp}); 
  }


  showDetails(userId:string): void {
    this.router.navigate(['/user-details/', userId]);
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.tutorService.getUsers().subscribe({
      next: (res) => {
        this.users = res;
        this.isLoading = false;
      },
      error: (err) => {
        this.isLoading = false; 
        console.error('Error fetching tutors:', err);   
      }
    });
  }

  

  
}
