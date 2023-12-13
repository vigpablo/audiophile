import { Component, inject } from '@angular/core';
import { CartService } from '../shared/services/cart.service';
import { producto } from '../shared/interfaces/producto.interface';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styles: [
  ]
})
export class CheckoutComponent {

  cartService = inject(CartService)

  showOrder:boolean = false

  bg:boolean = true

  nameControl = new FormControl('', [Validators.required])
  emailControl =  new FormControl('', [Validators.required, Validators.email])
  phoneControl = new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")])
  adressControl = new FormControl('', [Validators.required])
  zipCodeControl = new FormControl('', [Validators.required])
  cityControl =  new FormControl('', [Validators.required])
  countryControl = new FormControl('', [Validators.required])

  constructor(public fb: FormBuilder) {}

  myForm:FormGroup = this.fb.group ({
    name: this.nameControl,
    email: this.emailControl,
    phone: this.phoneControl,
    adress: this.adressControl,
    zipCode: this.zipCodeControl,
    city: this.cityControl,
    country: this.countryControl
  })


  get showBg():boolean {
  return this.cartService.show
  }

  toggleShowOrder():void{
    this.showOrder = !this.showOrder
  }

  onSubmit():void {
    if(this.myForm.valid) {
      this.toggleShowOrder()
    }
  }

  clickOutsideCart():void {
   if(this.showBg){
     this.cartService.toggleShowService()
   }
  }

  get carrito():producto[] {
  return this.cartService.carrito
  }

  get total():number {
  return this.cartService.total
  }

  changeBg(){
    this.bg = true
  }

  changeBg2():void {
    this.bg = false
  }

  vaciarCarrito():void {
    this.cartService.vaciarCarrito()
  }

  outsideHamMenu():void {
    this.cartService.menu = false
  }


}
