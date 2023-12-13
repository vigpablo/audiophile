import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { producto } from '../interfaces/producto.interface';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styles: [
  ]
})
export class CartComponent implements OnInit {


constructor (private cartService: CartService) {}

ngOnInit(): void {
  this.cartService.precioTotal()
}

get carrito():producto[] {
  return this.cartService.carrito
}

get total():number {
  return this.cartService.total
}

aumentarCantidad(id:number):void {
  this.cartService.aumentarCantidadService(id)
}

restarCantidad(id:number):void {
  this.cartService.restarCantidadService(id)
}

vaciarCarrito():void {
  this.cartService.vaciarCarrito()
}

get showBg():boolean {
  return this.cartService.show
  }

clickOutsideCart():void {
  if(this.showBg){
    this.cartService.toggleShowService()
  }
}


}
