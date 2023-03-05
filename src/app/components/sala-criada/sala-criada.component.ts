import { Component, OnInit } from '@angular/core';
import { Moment } from 'src/app/interfaces/Moment';
import { MomentService } from 'src/app/services/moment.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-sala-criada',
  templateUrl: './sala-criada.component.html',
  styleUrls: ['./sala-criada.component.css']
})
export class SalaCriadaComponent implements OnInit{
  moment?: Moment;

  constructor(
    private momentService: MomentService,
    private route: ActivatedRoute) {}
  
  ngOnInit(): void { 
    
    //id que está na URL
    const id = Number(this.route.snapshot.paramMap.get("id"))

    this.momentService
    .getMoment(id)
    .subscribe((item) => (this.moment = item.data));
  }

}
