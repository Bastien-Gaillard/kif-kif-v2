import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';

@Component({
    selector: 'app-offers',
    templateUrl: './offers.component.html',
    styleUrls: ['./offers.component.scss'],
    imports: [IonicModule, HeaderComponent],
    standalone: true,
})
export class OffersComponent implements OnInit {

  constructor() { }

  titlePage: string = 'Les offres à proximité';
  icon: string = 'chevron-back-outline';
  spans: { name: string, proximity: string, offer: string }[] = [{ name: "La belle miche", proximity: "500m", offer: "1 croissant acheté = 1 café offert" }, { name: "La belle miche", proximity: "500m", offer: "1 croissant acheté = 1 café offert" }, { name: "La belle miche", proximity: "500m", offer: "1 croissant acheté = 1 café offert" }, { name: "La belle miche", proximity: "500m", offer: "1 croissant acheté = 1 café offert" },{ name: "La belle miche", proximity: "500m", offer: "1 croissant acheté = 1 café offert" },{ name: "La belle miche", proximity: "500m", offer: "1 croissant acheté = 1 café offert" },{ name: "La belle miche", proximity: "500m", offer: "1 croissant acheté = 1 café offert" }];

  ngOnInit() { }

}
