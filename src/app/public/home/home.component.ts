import { Component, inject } from '@angular/core';
import { CatalogService } from '../../core/services/catalog.service';
import { CatalogItem } from '../../core/models/catalog-item.model';

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

  protected getItemUrl(item: CatalogItem): string {
    return item.customUrl ?? `https://wa.me/5491164658826?text=${encodeURIComponent(item.whatsappMessage)}`;
  }
}
