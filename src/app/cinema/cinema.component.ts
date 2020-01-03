import { Component, OnInit } from '@angular/core';
import { CinemaService } from '../services/cinema.service';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.scss']
})
export class CinemaComponent implements OnInit {
  public villes;
  public currentVille;
  public cinemas;
  public salles;
  public currentCinemas;
  
  constructor(private cinemaService : CinemaService ) { }

  ngOnInit() {
    this.cinemaService.getVilles().subscribe(
      data =>{
        this.villes = data;
        console.log(data)
      },
      err =>{
        console.log(err);

      }
    );

  }
  onGetCinema(v){
    this.cinemaService.getCinemas(v).subscribe(
      data =>{
        this.cinemas = data;
        this.salles = "";
        this.currentVille = v;
        console.log(this.currentVille)
      },
      err =>{
        console.log(err);

      }
    );
  }
  onGetSalles(c){
    this.cinemaService.getSalles(c).subscribe(
      data =>{
        this.salles = data;
        this.currentCinemas = c;
        console.log(this.currentCinemas)
      },
      err =>{
        console.log(err);

      }
    );
  }

}
