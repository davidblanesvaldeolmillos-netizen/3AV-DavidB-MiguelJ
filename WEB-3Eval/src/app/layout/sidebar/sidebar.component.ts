import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  links = [
    {
      nombre: 'Star Wars',
      url: '/starwars'
    },
    {
      nombre: 'Pokemon',
      url: '/pokemon'
    },
    {
      nombre: 'Rick y Morty',
      url: '/rickymorty'
    },
    {
      nombre: 'Valorant',
      url: '/valorant'
    },
  ]

}
