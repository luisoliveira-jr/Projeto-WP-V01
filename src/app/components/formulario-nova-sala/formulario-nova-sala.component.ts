import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-formulario-nova-sala',
  templateUrl: './formulario-nova-sala.component.html',
  styleUrls: ['./formulario-nova-sala.component.css']
})
export class FormularioNovaSalaComponent implements OnInit {
  @Input() btnText!: string

  constructor() { }

  ngOnInit(): void {

  }

}
