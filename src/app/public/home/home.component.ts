import { Component, inject } from '@angular/core';
import { CatalogService } from '../../core/services/catalog.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private readonly catalogService = inject(CatalogService);
  protected readonly catalogItems = this.catalogService.items;

  protected getWhatsAppUrl(message: string): string {
    return `https://wa.me/5491164658826?text=${encodeURIComponent(message)}`;
  }
}
