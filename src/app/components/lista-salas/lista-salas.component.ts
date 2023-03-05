import { Component, OnInit } from '@angular/core';
import { MomentService } from 'src/app/services/moment.service';
import { Moment } from 'src/app/interfaces/Moment';
import { Response } from 'src/app/interfaces/Response';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-salas',
  templateUrl: './lista-salas.component.html',
  styleUrls: ['./lista-salas.component.css']
})
export class ListaSalasComponent implements OnInit {

  baseApiUrl = environment.baseApiUrl
  
  //Pega todas as salas
  allMoments: Moment[] = []

  //Filtra salas de acordo com a busca do usuário
  moments: Moment[] = []

  constructor(private momentService: MomentService) {}

  ngOnInit(): void { 
    this.momentService.getMoments().subscribe((items) => {
      const data = items.data;

      data.map((item) => {
        item.created_at = new Date(item.created_at!).toLocaleDateString(
          'pt-BR'
        );
      });

      this.allMoments = data
      this.moments = data

    })
  }



}
