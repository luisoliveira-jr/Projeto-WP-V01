import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Moment } from 'src/app/interfaces/Moment';
import { MomentService } from 'src/app/services/moment.service';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-sala',
  templateUrl: './sala.component.html',
  styleUrls: ['./sala.component.css']
})
export class SalaComponent implements OnInit {
  btnText = "Concluir"

  constructor(
    private momentService: MomentService, 
    private messagesService: MessagesService,
    private router: Router 
  ){ }

  ngOnInit(): void { }

  async createHandler(moment: Moment) {
    const formData = new FormData();

    formData.append('title', moment.title);
    formData.append('description', moment.description);
    formData.append('image', moment.image)

    await this.momentService.createMoment(formData).subscribe();

    this.messagesService.add('Sala configurada com sucesso!')

    //Redireciona a página
    this.router.navigate(['/'])

  }



}
