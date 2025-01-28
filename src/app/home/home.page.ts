
import { Component } from '@angular/core';
import {
  IonIcon,
  IonTabBar,
  IonTabButton,
  IonTabs,

} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { book, person, people } from 'ionicons/icons';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonIcon, IonTabBar, IonTabButton, IonTabs]

})
export class HomePage {
  constructor() {
    addIcons({ book, person, people });
  }
}
