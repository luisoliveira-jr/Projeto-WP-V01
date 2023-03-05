import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-nova-sala',
  templateUrl: './formulario-nova-sala.component.html',
  styleUrls: ['./formulario-nova-sala.component.css']
})
export class FormularioNovaSalaComponent implements OnInit {
  @Input() btnText!: string
  salaForm!: FormGroup

  constructor() { }

  ngOnInit(): void {
    this.salaForm = new FormGroup({
      id: new FormControl(''),
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      video: new FormControl('', [Validators.required])
    })
   }

   get title() {
    return this.salaForm.get('title')!;
   }

   get description() {
    return this.salaForm.get('description')!;
   }

   get video() {
    return this.salaForm.get('video')!;
   }

  submit() {
    if (this.salaForm.invalid) {
      return
    }
    console.log("Enviou formulário")
  }

}
