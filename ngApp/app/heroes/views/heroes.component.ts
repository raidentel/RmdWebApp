import {Component, Input, OnInit } from "@angular/core";
import { Hero } from '../models/hero';
import { HeroService } from '../services/hero.services';


@Component({

  inputs: ['hero'],
  template: '<h1>{{title}}</h1> <h2>My Heroes</h2> <ul class="heroes"> <li *ngFor="let hero of heroes"[class.selected]="hero === selectedHero"(click)="onSelect(hero)"> <span class="badge">{{hero.id}}</span> {{hero.name}} </li> </ul> <my-hero-detail [hero]="selectedHero"></my-hero-detail>',providers: [HeroService]


})

export class Component1Component implements OnInit{
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) { }
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  ngOnInit(): void {
    this.getHeroes();
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}



