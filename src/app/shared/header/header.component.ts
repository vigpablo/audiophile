import { Component, inject } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class HeaderComponent {

  cartService = inject (CartService)

  get menu() {
    return this.cartService.menu
  }

  get show(){
    return this.cartService.show
  }

  toggleShow():void{
    this.cartService.toggleShowService()
  }

  toggleMenu():void {
    this.cartService.menu = !this.cartService.menu
  }

  outsideHamMenu():void {
    this.cartService.menu = false
  }

}
