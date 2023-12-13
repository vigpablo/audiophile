import { Component, inject } from '@angular/core';
import { CartService } from '../shared/services/cart.service';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: []
})
export class SpeakersComponent {

  cartService = inject(CartService)

  get showBg():boolean {
   return this.cartService.show
  }

  clickOutsideCart():void {
    if(this.showBg){
      this.cartService.toggleShowService()
    }
  }

  outsideHamMenu():void {
    this.cartService.menu = false
  }


}
