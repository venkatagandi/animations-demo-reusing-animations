import { Component, OnInit } from "@angular/core";
import {
  trigger,
  state,
  transition,
  style,
  animate,
  keyframes,
  useAnimation
} from "@angular/animations";
import { bounceOutLeftAnimation } from "../app.animations";

@Component({
  selector: "custom-todo",
  templateUrl: "./custom-todo.component.html",
  styleUrls: ["./custom-todo.component.css"],
  animations: [
    trigger("todoAnimation", [
      transition(":enter", [style({ opacity: 0 }), animate(2000)]),
      transition(":leave", [
        style({ backgroundColor: "red" }),
        animate(1000),
        useAnimation(bounceOutLeftAnimation)
      ])
    ])
  ]
})
export class CustomTodoComponent {
  items: any[] = [
    "Wash the dishes",
    "Call the accountant",
    "Apply for a car insurance"
  ];

  addItem(input: HTMLInputElement) {
    this.items.splice(0, 0, input.value);
    input.value = "";
  }

  removeItem(item) {
    let index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }
}
