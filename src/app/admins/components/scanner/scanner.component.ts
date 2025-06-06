import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { IonButton, IonText } from '@ionic/angular/standalone';
import { AlertController, IonicModule, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.scss'],
  standalone: true,
  imports: [IonText, IonButton, HeaderComponent, IonicModule],
})
export class ScannerComponent implements OnInit {
  photo: string | null | undefined = null;
  points = 70;
  constructor(private modalCtrl: ModalController, private alertCtrl: AlertController) {}
  ngOnInit(): void {}
  async takePhoto() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera,
    });

    this.photo = image.dataUrl;

    this.showPointsPopup();
  }

  async showPointsPopup() {
    const alert = await this.alertCtrl.create({
      header: 'Bastien Gaillard',
      subHeader: `Points actuels : ${this.points}`,
      inputs: [
        {
          name: 'pointsToRemove',
          type: 'number',
          min: 0,
          max: this.points,
          placeholder: 'Points à retirer',
        },
      ],
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
        },
        {
          text: 'Retirer',
          handler: (data: any) => {
            const pts = Number(data.pointsToRemove);
            if (pts >= 0 && pts <= this.points) {
              this.points -= pts;
              // alert(`Points retirés: ${pts}. Points restants: ${this.points}`);
              return true; // permet la fermeture de l'alerte
            } else {
              // alert('Valeur invalide');
              return false; // bloque la fermeture
            }
          },
        },
      ],
    });

    await alert.present();
  }

  logout() {
    localStorage.removeItem('authToken');
    window.location.href = '/';
  }
}
