import { Component, Input } from '@angular/core';
import { Tag } from 'src/app/shared/models/tag';
import { FoodService } from 'src/app/services/food/food.service';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent {
  @Input()
  foodPageTags?:string[] ;

  tags?: Tag[] = [];
  constructor(private foodservice: FoodService) {}
 ngOnInit(): void {
  if (!this.foodPageTags) 
  this.tags=this.foodservice.getAllTags();
 }


}
