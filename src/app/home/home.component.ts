import { Component, inject } from '@angular/core';
import { CartService } from '../shared/services/cart.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

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
