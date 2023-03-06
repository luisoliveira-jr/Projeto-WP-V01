import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Moment } from 'src/app/interfaces/Moment';
import { MomentService } from 'src/app/services/moment.service';
import { MessagesService } from 'src/app/services/messages.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-sala',
  templateUrl: './sala.component.html',
  styleUrls: ['./sala.component.css']
})
export class SalaComponent implements OnInit {
  btnText = "Concluir";
  /* urlSafe!: SafeResourceUrl; */

  constructor(
    private momentService: MomentService,
    private messagesService: MessagesService,
    private router: Router,
    public sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void { }

  async createHandler(moment: Moment) {
    const formData = new FormData();

 /*    const img = moment.image

    let index = img.indexOf("=");
    let resultado = img.slice(index + 1, index + 12);
    console.log(resultado);
    let linkEmbed = `https://www.youtube.com/embed/+${resultado}`
    
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(linkEmbed) */

    formData.append('title', moment.title);
    formData.append('description', moment.description);
    formData.append('image', moment.image);

    await this.momentService.createMoment(formData).subscribe();

    this.messagesService.add('Sala configurada com sucesso!')

    //Redireciona a página
    this.router.navigate(['/'])

  }



}
