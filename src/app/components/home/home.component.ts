import { Component, OnInit } from '@angular/core';
import { Moment } from 'src/app/interfaces/Moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  moment?: Moment;
  idSala?: number;

  constructor(
  ) {}
  
  ngOnInit(): void { }

}