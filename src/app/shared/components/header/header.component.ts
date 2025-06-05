import { Component, Input, OnInit } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { chevronBackOutline, logOut, logOutOutline, timeOutline, } from "ionicons/icons";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [IonicModule],
  standalone: true,
})
export class HeaderComponent implements OnInit {
  constructor(private navCtrl: NavController) { }

  @Input() title: string = 'Mon Titre';
  @Input() icon: string | null = 'Mon icone';
  ngOnInit() {
    addIcons({
      'chevron-back-outline': chevronBackOutline,
      'log-out-outline': logOutOutline,
    });
  }

  goBack() {
    if (this.icon === 'log-out-outline') {
      localStorage.removeItem ('authToken');
      this.navCtrl.navigateRoot('/');

    } else {
      this.navCtrl.back();
    }
  }
}
