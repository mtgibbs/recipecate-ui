import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { MealPlan } from 'src/app/api/models/meal-plan';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-meal-plans-page',
  templateUrl: './meal-plans-page.component.html',
  styleUrls: ['./meal-plans-page.component.scss']
})
export class MealPlansPageComponent implements OnInit {

  mealPlans: MealPlan[];
  dataSource: MatTableDataSource<MealPlan>;

  constructor(
    route: ActivatedRoute) {

    route.data.pipe(
      map(data => data.mealPlans)
    ).subscribe(mps => {
      this.mealPlans = mps;
      this.dataSource = new MatTableDataSource(this.mealPlans);
    });

  }

  ngOnInit() {
  }

}
