import { Component, OnInit } from '@angular/core';
import {Producto} from 'src/app/core/data/iproductos.interface'
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
  export class ProductDetailsComponent implements OnInit {
    producto:Partial<Producto> = {};
  ngOnInit(): void {

  }

  comprarProducto(){
    
  }
  
}
