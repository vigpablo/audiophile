import { Component, inject } from '@angular/core';
import { CartService } from '../shared/services/cart.service';

@Component({
  selector: 'app-earphones',
  templateUrl: './earphones.component.html',
  styleUrls: []
})
export class EarphonesComponent {

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
