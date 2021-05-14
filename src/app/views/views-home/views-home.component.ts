import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent implements OnInit {

  stats = [
    {value: 22, label: "# of Users"},
    {value: 500, label: "Revenue"},
    {value: 50, label: "Satisfaction Score"}
  ];

  items = [
    {
      image: "/assets/images/couch.jpeg",
      title: "Couch",
      description: "This is fantastic couch to seat on"
    },
    {
      image: "/assets/images/dresser.jpeg",
      title: "Dreser",
      description: "This is fantastic dresser to put stuffs in"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
