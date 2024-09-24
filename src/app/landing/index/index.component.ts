import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import {Producto} from 'src/app/core/data/iproductos.interface'

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  currentSection = 'home';
  showNavigationArrows: any;
  showNavigationIndicators: any;

  productos: Producto[] = [];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos() {
    this.productos = [
      {
        id: 1,
        name: "Producto1",
        image: "https://sipoonline.cl/wp-content/uploads/2023/06/Pc-Halo-5600x_rtx-4060.png",
        costo: 1000,
        descripcion: "Esta es la descripción del Producto 1"
      },
      {
        id: 2,
        name: "Producto2",
        image: "https://sipoonline.cl/wp-content/uploads/2022/11/Pc-Maxus.png",
        costo: 2000,
        descripcion: "Esta es la descripción del Producto 2"
      },
    ];
  }

  visualizarProducto(producto: Producto) {
    this.dialog.open(ProductDetailsComponent, {
      width: '500px', // Ajustamos el tamaño del modal
      data: producto
    });
  }

  /**
   * Window scroll method
   */
  windowScroll() {
    const navbar = document.getElementById('navbar');
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
      navbar?.classList.add('is-sticky');
    }
    else {
      navbar?.classList.remove('is-sticky');
    }

    // Top Btn Set
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      (document.getElementById("back-to-top") as HTMLElement).style.display = "block";
    } else {
      (document.getElementById("back-to-top") as HTMLElement).style.display = "none";
    }
  }

  /**
   * Section changed method
   * @param sectionId specify the current sectionID
   */
  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }

  /**
   * Toggle navbar
   */
  toggleMenu() {
    document.getElementById('navbarSupportedContent')?.classList.toggle('show');
  }

  // When the user clicks on the button, scroll to the top of the document
  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

}
