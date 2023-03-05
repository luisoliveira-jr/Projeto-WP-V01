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
  @Output() onSubmit = new EventEmitter<Moment>()

  salaForm!: FormGroup

  constructor() { }

  ngOnInit(): void {
    this.salaForm = new FormGroup({
      id: new FormControl(''),
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required])
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
