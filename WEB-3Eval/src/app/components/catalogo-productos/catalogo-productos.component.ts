import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../interfaces/producto';

@Component({
  selector: 'app-catalogo-productos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './catalogo-productos.component.html',
  styleUrl: './catalogo-productos.component.css'
})
export class CatalogoProductosComponent implements OnInit {
  productos: Producto[] = [];
  productosFiltrados: Producto[] = [];
  categorias: string[] = [];
  categoriaActiva: string = 'Todos';
  cargando = true;
  error = false;

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    this.productoService.getProductos().subscribe({
      next: (data) => {
        this.productos = data;
        this.productosFiltrados = data;
        this.categorias = ['Todos', ...new Set(data.map(p => p.categoria))];
        this.cargando = false;
      },
      error: () => {
        this.error = true;
        this.cargando = false;
      }
    });
  }

  filtrarCategoria(cat: string): void {
    this.categoriaActiva = cat;
    this.productosFiltrados = cat === 'Todos'
      ? this.productos
      : this.productos.filter(p => p.categoria === cat);
  }

  getEstrellasArray(rating: number): number[] {
    return Array(Math.round(rating)).fill(0);
  }

  getBadgeClass(categoria: string): string {
    const map: Record<string, string> = {
      'Niños': 'bg-warning text-dark',
      'Jóvenes': 'bg-info text-dark',
      'Atletas': 'bg-danger',
      'Mascotas': 'bg-success',
      'Adultos Mayores': 'bg-secondary'
    };
    return map[categoria] || 'bg-primary';
  }
}
