import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
    selector: 'app-shop-list',
    templateUrl: './shop-list.component.html',
    styleUrls: ['./shop-list.component.scss'],
    imports: [IonicModule],
    standalone: true,
})
export class ShopListComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
