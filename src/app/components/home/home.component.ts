import { Component } from '@angular/core';
import { FoodService } from 'src/app/services/food/food.service';
import { Food } from 'src/app/shared/models/food';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  foods:Food[] = [];
  constructor(private foodService: FoodService){}

 ngOnInit() {
  this.foods = this.foodService.getAll();
 }
}
