import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  getSaludo() {
    return fetch('http://localhost:3000/api/saludo')
      .then(res => res.json());
  }
}
