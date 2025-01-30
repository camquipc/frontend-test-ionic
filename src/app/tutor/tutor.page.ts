import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonList, IonTitle, IonToolbar, IonCardContent, IonCard, IonSelect, IonItem, IonSelectOption, IonSpinner } from '@ionic/angular/standalone';
import { TutorInterface } from '../interfaces/tutorInterface';
import { addIcons } from 'ionicons';
import { caretDownSharp, people, person, book } from 'ionicons/icons';
import { TutorServiceService } from './tutor.service.service';

@Component({
  selector: 'app-tutor',
  templateUrl: './tutor.page.html',
  styleUrls: ['./tutor.page.scss'],
  standalone: true,
  imports: [IonSpinner, IonCard,  IonCardContent,IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonList, IonSelect, IonSelectOption, IonItem],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TutorPage implements OnInit {

  public isLoading = true;
  public items: TutorInterface[] = [];
  public filteredItems: TutorInterface[] = [];
  public specialtys: { specialty: string; }[] | undefined;

  constructor(private tutorService: TutorServiceService) { 
    addIcons({people,person,book,caretDownSharp}); 
  }

  ngOnInit() {
    this.getTutors();
    
  }

  getTutors(): void {
    this.tutorService.getTutors().subscribe({
      next: (res) => {
        this.items = res;
        this.filteredItems = res;
        this.getFilterOptionTutors();
        this.isLoading = false;
        console.log('Tutors:', this.items);
      },
      error: (err) => {
        this.isLoading = false; 
        console.error('Error fetching tutors:', err);   
      }
    });
  }

  filterTutors(specialty: string) {
    if(specialty == 'all') {
      this.filteredItems = this.items;
    } else {
      this.filteredItems = this.items.filter((item: TutorInterface) => {
        return item.Speciality == specialty;
      });
    }
  }


  getFilterOptionTutors() {
    if (this.items.length === 0) {
      return [];
    }
    const uniqueSpecialties = new Set(this.items.map((item: TutorInterface) => item.Speciality));
    console.log('Specialties:', uniqueSpecialties);
    return this.specialtys = Array.from(uniqueSpecialties).map((specialty) => ({ specialty }));
  }

  
}
