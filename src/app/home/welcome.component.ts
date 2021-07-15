import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ad-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {

  title: string = "Welcome";

  constructor() { }

  ngOnInit(): void {
  }

}
