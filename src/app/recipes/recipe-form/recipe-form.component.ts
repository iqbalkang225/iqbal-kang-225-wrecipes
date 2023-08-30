import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css'],
})
export class RecipeFormComponent implements OnInit {
  isEditing = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // const ss = this.route.snapshot.params.id;
    this.isEditing = this.route.snapshot.params.id !== undefined && true;
    console.log(this.isEditing);
  }
}
