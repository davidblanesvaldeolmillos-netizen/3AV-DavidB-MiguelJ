import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../interfaces/producto';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent implements OnInit {
  producto: Producto | undefined;
  cargando = true;
  agregado = false;
  cantidad = 1;

  constructor(
    private route: ActivatedRoute,
    private productoService: ProductoService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productoService.getProductos().subscribe({
      next: (productos) => {
        this.producto = productos.find(p => p.id === id);
        this.cargando = false;
      },
      error: () => { this.cargando = false; }
    });
  }

  agregarAlCarrito(): void {
    this.agregado = true;
    setTimeout(() => this.agregado = false, 3000);
  }

  cambiarCantidad(delta: number): void {
    this.cantidad = Math.max(1, Math.min(this.cantidad + delta, this.producto?.stock ?? 1));
  }

  getEstrellas(rating: number): number[] {
    return Array(5).fill(0).map((_, i) => i < Math.round(rating) ? 1 : 0);
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