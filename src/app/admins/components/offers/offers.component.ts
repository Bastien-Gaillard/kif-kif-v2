import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss'],
  standalone: true,
  imports: [IonicModule, HeaderComponent],
})
export class OffersComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  logout() {
    localStorage.removeItem('authToken');
    window.location.href = '/';
  }
}
