import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { Recipe } from '../../../recipecate-api-client';

@Component({
  selector: 'app-recipe-card',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
  ],
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.scss'
})
export class RecipeCardComponent {

  @Input() recipeCardInfo = {} as RecipeCardInfo;

  @Output() recipeSelected = new EventEmitter<RecipeCardInfo>();

  toggleSelection() {
    this.recipeCardInfo.isSelected = !this.recipeCardInfo.isSelected;
    this.recipeSelected.emit(this.recipeCardInfo);
  }
}

export interface RecipeCardInfo extends Recipe {
  isSelected: boolean;
}