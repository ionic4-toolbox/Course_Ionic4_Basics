import { Component } from '@angular/core';

import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading-page',
  template: `
  <ion-app>
    <ion-header>
        <ion-toolbar><ion-buttons slot="start"><ion-menu-button></ion-menu-button></ion-buttons>
        <ion-title>Loading</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding>
      <ion-button (click)="clickMe()">Open Basic Loading</ion-button>
    </ion-content>
</ion-app>
  `
})
export class LoadingPage {

  constructor(private loadingController: LoadingController) {

  }

  async clickMe() {
    const loading = await this.loadingController.create({
      duration: 1000,
      content: 'Ahem. Please wait.'
    });
    return loading.present();
  }

}
