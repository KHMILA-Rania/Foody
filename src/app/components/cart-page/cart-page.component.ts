import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';
import { FoodService } from 'src/app/services/food/food.service';
import { Cart } from 'src/app/shared/models/cart';
import { CartItem } from 'src/app/shared/models/cartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {
  cart!: Cart;
  constructor(private cartservice:CartService, private foodService:FoodService){
   
    this.setCart();
  }
  setCart(){
    this.cart = this.cartservice.getCart();
  }

  removeFromCart(cartitem:CartItem){
    this.cartservice.removefromCart(cartitem.food.id);
  }

  changeQuantity(cartitem:CartItem, quantityInString:string){
    const quantity = parseInt(quantityInString)
    this.cartservice.changeQuantity(cartitem.food.id, quantity);
    this.setCart();

  }

}
