import { Component, Input, OnInit } from '@angular/core';
import { Moment } from 'src/app/interfaces/Moment';
import { MomentService } from 'src/app/services/moment.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  moment?: Moment;
  idSala?: number;

  constructor(
    private momentService: MomentService,
    private route: ActivatedRoute,
  ) {}
  
  ngOnInit(): void { 
    
    //id que está na passado na barra de busca
    const id = Number(this.route.snapshot.paramMap.get("id"))

    this.momentService
    .getMoment(id)
    .subscribe((item) => (this.moment = item.data)) ;   
  }

}
