import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Ant-Man'},
      { id: 12, name: 'Aquaman'},
      { id: 13, name: 'Asterix'},
      { id: 14, name: 'The Atom'},
      { id: 15, name: 'The Avengers'},
      { id: 16, name: 'Batgirl'},
      { id: 17, name: 'Batman'},
      { id: 18, name: 'Batwoman'},
      { id: 19, name: 'Black Canary'},
      { id: 20, name: 'Black Panther'},
      { id: 21, name: 'Captain America'},
      { id: 22, name: 'Captain Marvel'},
      { id: 23, name: 'Catwoman'},
      { id: 24, name: 'Conan the Barbarian'},
      { id: 25, name: 'Daredevil'},
      { id: 26, name: 'The Defenders'},
      { id: 27, name: 'Doc Savage'},
      { id: 28, name: 'Doctor Strange'},
      { id: 29, name: 'Elektra'},
      { id: 30, name: 'Fantastic Four'},
      { id: 31, name: 'Ghost Rider'},
      { id: 32, name: 'Green Arrow'},
      { id: 33, name: 'Green Lantern'},
      { id: 34, name: 'Guardians of the Galaxy'},
      { id: 35, name: 'Hawkeye'},
      { id: 36, name: 'Hellboy'},
      { id: 37, name: 'Incredible Hulk'},
      { id: 38, name: 'Iron Fist'},
      { id: 39, name: 'Iron Man'},
      { id: 40, name: 'Marvelman'},
      { id: 41, name: 'Robin'},
      { id: 42, name: 'The Rocketeer'},
      { id: 43, name: 'The Shadow'},
      { id: 44, name: 'Spider-Man'},
      { id: 45, name: 'Sub-Mariner'},
      { id: 46, name: 'Supergirl'},
      { id: 47, name: 'Superman'},
      { id: 48, name: 'Teenage Mutant Ninja Turtles'},
      { id: 49, name: 'Thor'},
      { id: 50, name: 'The Wasp'},
      { id: 51, name: 'Watchmen'},
      { id: 52, name: 'Wolverine'},
      { id: 53, name: 'Wonder Woman'},
      { id: 54, name: 'X-Men'},
      { id: 55, name: 'Zatanna'},
      { id: 56, name: 'Zatara'}
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
