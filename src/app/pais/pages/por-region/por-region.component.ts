import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent implements OnInit {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises: Country[]=[];

  constructor(private paisService:PaisService) { }

  ngOnInit(): void {
  }

  getClaseCss(region:string): string{
    return (region === this.regionActiva) 
      ? 'btn btn-primary m-1'
      : 'btn btn-outline-primary m-1';
  }

  activarRegion(region:string){
    if(region===this.regionActiva){
      return;
    }
    this.regionActiva=region;
    this.paises = [];
    this.paisService.buscarRegion(region).subscribe( (paises) => {
      console.log(paises[0].name);
      this.paises = paises;
    }, (err) => {
      this.paises = [];
    } );
  }


}
