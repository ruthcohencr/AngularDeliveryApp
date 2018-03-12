import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.css']
})
export class SplashScreenComponent implements OnInit {


splashTitle: string;

constructor() {
  this.splashTitle = "SUPPLIER DELIVERY";
}

ngOnInit() {
}

}
