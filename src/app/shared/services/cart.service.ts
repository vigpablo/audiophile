import { Injectable } from '@angular/core';
import { producto } from '../interfaces/producto.interface';



@Injectable({
  providedIn: 'root'
})
export class CartService {

  public carrito: producto[] = []

  public productos: producto [] = [
    { nombre: 'XX99 MKII', imagen: '../../assets/cart/image-xx99-mark-two-headphones.jpg', precio: 2999, cantidad: 0, id: 1 },
    { nombre: 'XX99 MKI', imagen: '../../assets/cart/image-xx99-mark-one-headphones.jpg', precio: 1750, cantidad: 0, id: 2 },
    { nombre: 'XX59', imagen: '../../assets/cart/image-xx59-headphones.jpg', precio: 899, cantidad: 0, id: 3 },
    { nombre: 'ZX9', imagen: '../../assets/cart/image-zx9-speaker.jpg', precio: 4500, cantidad: 0, id: 4 },
    { nombre: 'ZX7', imagen: '../../assets/cart/image-zx7-speaker.jpg', precio: 3500, cantidad: 0, id: 5 },
    { nombre: 'YX1', imagen: '../../assets/cart/image-yx1-earphones.jpg', precio: 599, cantidad: 0, id: 6 },
  ]

  public show:boolean = false

  public total:number = 0

  public contadorService:number = 0

  public menu:boolean = false

  constructor() {
    this.loadLocalStorage()
    this.precioTotal()
  }

  private loadLocalStorage():void {
    if ( !localStorage.getItem('carrito')) return;

    this.carrito = JSON.parse( localStorage.getItem('carrito')!);

  }

  agregarProductoService(id:number, cantidad:number) {
    let item = this.productos[id - 1];

    if (this.carrito.some(prod => prod.id === item.id)) {
      for (let producto of this.carrito) {
        if (item.id === producto.id ) {
          producto.cantidad = producto.cantidad + cantidad
        }
      }
      localStorage.setItem('carrito', JSON.stringify(this.carrito))
    }else {
      item.cantidad = item.cantidad + cantidad
      this.carrito.push(item)
      localStorage.setItem('carrito', JSON.stringify(this.carrito))
    }
  }

  eliminarProducto(i:number) {
    delete this.carrito[i]
    localStorage.setItem('carrito', JSON.stringify(this.carrito))
  }

  toggleShowService ():void {
    this.show = !this.show
  }

  aumentarCantidadService(id:number):void {
   const array = this.carrito.map((prod) => {
    if (prod.id === id) {
      return {
        ...prod,
        cantidad: prod.cantidad +1
      }
    } return prod
   } )
    this.carrito = array
    this.precioTotal()
  }

  restarCantidadService(id:number):void {
    const array = this.carrito.map((prod) => {
      if (prod.id === id) {
        if (prod.cantidad === 0) {
          return prod
        }else {
          return {
            ...prod,
            cantidad: prod.cantidad -1
          }
        }
      } return prod
    } )
    this.carrito = array
    this.precioTotal()
  }


  precioTotal ():void {
    let suma = 0
    for (let item of this.carrito) {
      suma += item.precio * item.cantidad
    }
    this.total = suma
  }

  vaciarCarrito():void {
    this.carrito = []
    this.precioTotal()
    localStorage.removeItem("carrito")
  }


}
