import { Component } from '@angular/core';
import { Ingredient } from '../../../recipecate-api-client';

import { MatListModule } from '@angular/material/list';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [
    MatListModule,
  ],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.scss'
})
export class ShoppingListComponent {

  ingredientList: Ingredient[] = [];

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.ingredientList = this.route.snapshot.data['shoppingList'];
  }

}
