import { Component } from '@angular/core';
import { Food } from 'src/app/shared/models/food';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/food/food.service';
@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent {

 food!:Food;
constructor(private route:ActivatedRoute,private foodservice:FoodService){

}
ngOnInit():void{
  this.route.params.subscribe(params =>

 this.food=this.foodservice.getDetails(params['id']));
}

}
