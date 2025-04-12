import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductserviceService } from '../service/productservice.service';

@Component({
  selector: 'app-addproduct',
  standalone: false,
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.scss'
})
export class AddproductComponent {
  product = {
    id: '',
    name: '',
    price: null,
    quantity: null,
    categories: ['Electronics', 'Food','Home & Kitchen', 'Beauty']
  };

  constructor(private router: Router, private productService: ProductserviceService){}

  submit() {
    this.productService.getproduct().subscribe((products)=>{
      const maxId = products.length > 0 ? Math.max(...products.map(p => +p.id)) : 0;
      this.product.id = (maxId + 1).toString();

      this.productService.addProduct(this.product).subscribe((response) => {
        alert('Product added successfully!');
      });
      this.product = {
        id: '',
        name: '',
        price: null,
        quantity: null,
        categories: ['Electronics', 'Food', 'Home & Kitchen', 'Beauty']
      };
    })
  }

  gotoproductlist(){
    this.router.navigate(['/home/productlist'])
  }
}
