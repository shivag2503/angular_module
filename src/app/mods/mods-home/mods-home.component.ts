import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css'],
})
export class ModsHomeComponent implements OnInit {
  modalOpen = false;

  items = [
    { title: "what's the value of 2+2?", content: "It's 4" },
    { title: "What's the capital of India?", content: "It's New Delhi" },
    { title: "What's the color of the sky?", content: "It's blue" },
  ];

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.modalOpen = !this.modalOpen;
  }
}
