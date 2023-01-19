import { Component, OnInit } from '@angular/core';
import { Hero } from '../app.component';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
heroes: Hero[] = [];
//heroes = HEROES;
//return Observable<Hero[]>.
// getHeroes(): void {
// this.heroes = this.heroService.getHeroes();
//}
//return a Hero[]

GetHeroes(): void {
  this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  console.log("1");
  console.log(this.heroes)
}

AddhHero():void{
  console.log("adasd");
}

DeleteHero():void{
  this.heroService
  //.deleteHero(hero.id)
  //.subscribe();
}

  selectedHero?: Hero;
  onSelect(hero: Hero): void 
  {
    this.selectedHero = hero;
  }

  constructor(private heroService: HeroService) 
  {
     
  }

  ngOnInit(): void {
  // this.getHeroes();
  }

}