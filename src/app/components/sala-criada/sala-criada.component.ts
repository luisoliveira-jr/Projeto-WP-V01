import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { Moment } from 'src/app/interfaces/Moment';
import { Comment } from 'src/app/interfaces/Comment';
import { MomentService } from 'src/app/services/moment.service';
import { CommentService } from 'src/app/services/comment.service';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-sala-criada',
  templateUrl: './sala-criada.component.html',
  styleUrls: ['./sala-criada.component.css']
})
export class SalaCriadaComponent implements OnInit {
  moment?: Moment;
  commentForm!: FormGroup;
  link?: string;
  linkEmbed: string = 'https://www.youtube.com/embed/';
  urlSafe: any;

  constructor(
    private momentService: MomentService,
    private messagesService: MessagesService,
    private route: ActivatedRoute,
    private router: Router,
    private commentService: CommentService,
    private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {

    //id que está na URL
    const id = Number(this.route.snapshot.paramMap.get("id"))

    this.momentService
      .getMoment(id)
      .subscribe((item) => (this.moment = item.data));

    this.commentForm = new FormGroup({
      text: new FormControl(" ", [Validators.required]),
      username: new FormControl(" ", [Validators.required])
    })

    this.momentService
      .getMoment(id)
      .subscribe((item) => {
        this.link = item.data.image

        let index = this.link.indexOf("=");
        this.link = this.link.slice(index + 1, index + 12);

        this.linkEmbed = 'https://www.youtube.com/embed/' + this.link;
        this.urlSafe =
          this.sanitizer.bypassSecurityTrustResourceUrl(this.linkEmbed);

      });

  }

  async removeHandler(id: number) {
    this.momentService.removeMoment(id).subscribe();

    this.messagesService.add("Sala excluída com sucesso!");

    this.router.navigate(['/']);
  }

  get text() {
    return this.commentForm.get('text')!;
  }

  get username() {
    return this.commentForm.get('username')!;
  }

  async onSubmit(formDirective: FormGroupDirective) {

    if (this.commentForm.invalid) {
      return
    };

    const data: Comment = this.commentForm.value;

    data.momentId = Number(this.moment!.id);

    await this.commentService
      .createComment(data)
      .subscribe((comment) => this.moment!.comments!.push(comment.data));

    //Resetar form
    this.commentForm.reset();
    formDirective.resetForm();

  }

}
