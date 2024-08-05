import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule , SharedModule, HomePage]
})
export class HomePage implements OnInit {

  characters: any [] = [];
  params = {} as any;

  constructor(
    private rickAndMortySvc:RickAndMortyService
  ) { }

  ngOnInit() {
    this.params = 0;
    this.getCharacters();
  }

  getCharacters(event?: any){
    this.params.page += 1;
    this.rickAndMortySvc.getCharacters(this.params).subscribe({
      next: (response: any) => {

        this.characters.push(...response.results)
        console.log(this.characters);

      },
      error: (error: any) => {

      }


    })
  }

}
