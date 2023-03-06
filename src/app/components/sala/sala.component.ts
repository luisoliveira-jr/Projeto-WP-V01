import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Moment } from 'src/app/interfaces/Moment';
import { MomentService } from 'src/app/services/moment.service';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-sala',
  templateUrl: './sala.component.html',
  styleUrls: ['./sala.component.css']
})
export class SalaComponent implements OnInit {
  btnText = "Concluir";
  
  //Pega todas as salas
  allMoments: Moment[] = []

  //Busca uma sala
  moments: Moment[] = []

  moment: any;

  fila?: number;
  idNewRoom?: number;

  baseApiUrl = environment.baseApiUrl

  constructor(
    private momentService: MomentService,
    private messagesService: MessagesService,
    private router: Router,
  ) { }

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

  buildForm() {}

  async createHandler(moment: Moment) {
    const formData = new FormData();

    formData.append('title', moment.title);
    formData.append('description', moment.description);
    formData.append('image', moment.image);

    await this.momentService.createMoment(formData).subscribe()

    this.momentService.getMoments().subscribe((items) => {
      const data = items.data;

      this.allMoments = data

      this.fila = this.allMoments.length
      this.idNewRoom = this.allMoments[this.fila-1].id

      this.messagesService.add(`Sala ${this.allMoments[this.fila-1].title} configurada com sucesso!`)
      this.router.navigate([`/sala/${this.idNewRoom}`])
    })

  }
}
