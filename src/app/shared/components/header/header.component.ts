import { Component, Input, OnInit } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    imports: [IonicModule],
    standalone: true,
})
export class HeaderComponent  implements OnInit {

  constructor(private navCtrl: NavController) {}

  @Input() title: string = 'Mon Titre';
  @Input() icon: string | null = "Mon icone"
  ngOnInit() {

  }

  goBack() {
    this.navCtrl.back();
  }

}
