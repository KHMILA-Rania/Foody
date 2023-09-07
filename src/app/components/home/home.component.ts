import { Component } from '@angular/core';
import { FoodService } from 'src/app/services/food/food.service';
import { Food } from 'src/app/shared/models/food';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  foods:Food[] = [];
  constructor(private foodService: FoodService,private route:ActivatedRoute){}

 ngOnInit():void {
  this.route.params.subscribe(params =>
    {if(params['searchTerm']){
     this.foods=this.foodService.getAllFoodsBySearchTerm(params['searchTerm']);
     
     console.log("search works");
    }
    else if(params['tag1']){
      this.foods=this.foodService.getAllFoodsByTag(params['tag1']) ;
      console.log("work work");
    }
     else {this.foods=this.foodService.getAll(); console.log("normal");}
    })

 
 }
}
