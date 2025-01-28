import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonCardTitle,
IonCardContent, IonCardHeader, IonCard } from '@ionic/angular/standalone';

import { UserInterface } from '../interfaces/userInterface';
import { ActivatedRoute, Router } from '@angular/router';
import { UserPage } from './user.page';

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
[x: string]: any;

  public user: UserInterface | undefined = {
    "Id": "3b500762-2b16-4b55-8d3f-7d76983a6c1b",
    "FirstName": "Estrella",
    "LastName": "Kunde",
    "DateOfBirth": "2024-12-04T04:46:50.835Z",
    "Address": "Cara Drive"
  };
  constructor(private activatedRoute: ActivatedRoute,private router: Router) {}

  ngOnInit() {
    const userString = this.activatedRoute.snapshot.paramMap.get('userId');
    console.log('userString:', userString);
    //this.user = userString ? JSON.parse(userString) as UserInterface : undefined;
  }
  
  goToBack(): void {
    console.log('goToBack');
    this.router.navigate(['/home/user']);
  }
  
}
