import { Component, inject } from '@angular/core';
import { CartService } from '../../shared/services/cart.service';

@Component({
  selector: 'app-markii',
  templateUrl: './markii.component.html',
  styles: [
  ]
})
export class MarkiiComponent {

  cartService = inject(CartService)

  get showBg():boolean {
    return this.cartService.show
  }

  agregarProducto(id:number, cantidad:number):void {
    this.cartService.agregarProductoService(id, cantidad)
  }

  clickOutsideCart():void {
    if(this.showBg){
      this.cartService.toggleShowService()
    }
  }

  contador: number = 1

  aumentarContador():void {
    this.contador ++
  }

  restarContador():void {
    if(this.contador == 0) return;
    this.contador --
  }

  outsideHamMenu():void {
    this.cartService.menu = false
  }

}
