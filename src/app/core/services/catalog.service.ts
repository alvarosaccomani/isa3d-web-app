import { Injectable, signal } from '@angular/core';
import { CatalogItem } from '../models/catalog-item.model';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  private readonly itemsSignal = signal<CatalogItem[]>([
    {
      id: 'llaveros',
      title: 'Llaveros Personalizados',
      description: 'Identidad para tu marca, eventos o regalos originales con acabados limpios y colores combinados.',
      icon: 'fas fa-key',
      gradient: 'from-violet-100 to-purple-50',
      whatsappMessage: 'Hola! Me interesan los llaveros personalizados',
      actionText: 'Consultar modelos'
    },
    {
      id: 'sacro',
      title: 'Devoción en Detalle',
      description: 'Imágenes y esculturas religiosas trabajadas con máxima definición en pliegues, rostros y texturas.',
      icon: 'fas fa-praying-hands',
      gradient: 'from-violet-100 to-indigo-50',
      whatsappMessage: 'Hola! Quiero consultar por piezas religiosas',
      actionText: 'Ver catálogo sacro'
    },
    {
      id: 'a-medida',
      title: 'Soluciones a Medida',
      description: '¿Tenés un archivo .STL o una idea para fabricar? Fabricamos prototipos y piezas que no encontrás en ningún lado.',
      icon: 'fas fa-drafting-compass',
      gradient: 'from-gray-100 to-violet-50',
      whatsappMessage: 'Hola! Tengo un proyecto a medida para cotizar',
      actionText: 'Enviar archivo'
    }
  ]);

  readonly items = this.itemsSignal.asReadonly();
}
