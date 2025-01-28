import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonCardTitle,
IonCardContent, IonCardHeader, IonCard } from '@ionic/angular/standalone';

import { UserInterface } from '../interfaces/userInterface';
import { ActivatedRoute, Router } from '@angular/router';
import { UserPage } from './user.page';
import { UserServiceService } from './user.service.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user.details.html',
  styleUrls: ['./user.page.scss'],
  standalone: true,
  imports: [IonCard, IonCardHeader, IonCardContent, 
            IonCardTitle, CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UserDetailsPage implements OnInit {

  public user: UserInterface | undefined;

  constructor(private userService: UserServiceService,private activatedRoute: ActivatedRoute,private router: Router) {}

  ngOnInit() {
    const userId = this.activatedRoute.snapshot.paramMap.get('userId');
    if (userId) {
      this.getUsers(userId);
    } else {
      console.error('User ID is null');
    }
  }


  getUsers(userId:string): void {
    this.userService.getUsers().subscribe({
      next: (res) => {
        this.user = res.filter((user) => user.Id === userId)[0];
      },
      error: (err) => {
        console.error('Error fetching tutors:', err);   
      }
    });
  }

  
  goToBack(): void {
    this.router.navigate(['/home/user']);
  }
  
}
