import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Moment } from 'src/app/interfaces/Moment';
import { MomentService } from 'src/app/services/moment.service';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-editar-sala',
  templateUrl: './editar-sala.component.html',
  styleUrls: ['./editar-sala.component.css']
})

export class EditarSalaComponent implements OnInit {
  moment!: Moment;
  btnText: string = 'Editar'

  constructor(
    private momentService: MomentService,
    private messagesService: MessagesService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.momentService.getMoment(id).subscribe((item) => {
      this.moment = item.data
    });    
  }

  async editHandler(salaData: Moment) {
    const id = this.moment.id;
    const formData = new FormData();

    formData.append('title', salaData.title);
    formData.append('description', salaData.description);
    formData.append('image', salaData.image);

    await this.momentService.updateMoment(id!, formData).subscribe();

    this.messagesService.add(`Moment ${id} foi atualizado com sucesso!`);

    this.router.navigate([`/sala/${id}`])
  }

}
