import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Moment } from 'src/app/interfaces/Moment';

@Component({
  selector: 'app-formulario-nova-sala',
  templateUrl: './formulario-nova-sala.component.html',
  styleUrls: ['./formulario-nova-sala.component.css']
})
export class FormularioNovaSalaComponent implements OnInit {
  @Input() btnText!: string
  @Input() salaData: Moment | null = null;
  @Output() onSubmit = new EventEmitter<Moment>()

  salaForm!: FormGroup;
  moment!: Moment;

  constructor(
  ) { }

  ngOnInit(): void {
    this.salaForm = new FormGroup({
      id: new FormControl(this.salaData ? this.salaData.id : ''),
      title: new FormControl(this.salaData ? this.salaData.title : '', [Validators.required]),
      description: new FormControl(this.salaData ? this.salaData.description : '', [Validators.required]),
      image: new FormControl(this.salaData ? this.salaData.image : '', [Validators.required])
    })
   }

   get title() {
    return this.salaForm.get('title')!;
   }

   get description() {
    return this.salaForm.get('description')!;
   }

   get image() {
    return this.salaForm.get('image')!;
   }

 onUrlSelected(event: any) {
    const url: URL = event.target.urls[0];

    this.salaForm.patchValue({ image: url});
   }

  submit() {
    if (this.salaForm.invalid) {
      return;
    }
    
    console.log(this.salaForm.value);

    this.onSubmit.emit(this.salaForm.value);
  }

}
