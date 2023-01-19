import { Component } from '@angular/core';
import { HEROES } from './mock-heroes';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { HeroService } from '../app/hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  // title = 'Tour of Heroes';
  //heroes = HEROES;
  heroes: Hero[] = [];

  //objRegisterModel: Hero= {} as Hero;
  //user: Hero= {} as Hero;

  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  ngOnInit(): void {
    this.getHeroes();
  }
  
  addUserForm = new FormGroup({
    id: new FormControl(0),
    name: new FormControl('', [Validators.required]),
  });

  saveUser() {
    const id = this.addUserForm.get('id')?.value;
    const name = this.addUserForm.get('name')?.value;
    const user = { id, name };
    //this.user.id = id
    //this.user.name = name

    //ythis.objRegisterModel = new Hero(this.objRegisterModel);
    console.log('hej');
    // this.heroService.addHero(this.objRegisterModel).subscribe((response: any) => {
    //console.log(response);

    //this.heroes.push({ id: response.id, name: response.name });
    // });
  }

  getHeroes() {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }

  public constructor(private heroService: HeroService) {}
}

export interface Hero {
  id: number;
  name: string;
}
