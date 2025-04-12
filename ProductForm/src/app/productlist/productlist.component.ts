import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductserviceService } from '../service/productservice.service';
import { MatDialog } from '@angular/material/dialog';
import { ProductdetailsComponent } from '../productdetails/productdetails.component';
import { EditproductComponent } from '../editproduct/editproduct.component';

@Component({
  selector: 'app-productlist',
  standalone: false,
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.scss'
})
export class ProductlistComponent {
  products: any[] = [];

  constructor(private router: Router, 
    private productService: ProductserviceService,
    private dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getproduct().subscribe(
      (data)=>{
        this.products = data ;
        },
    );
  }

  viewProductDetails(productId: number) {
    const selectedProduct = this.products.find(p => p.id === productId);
    this.dialog.open(ProductdetailsComponent, {
    width: '400px',
    data: selectedProduct
  });
  }

  editproductdetails(id:number){
    this.productService.productIDdetails(id).subscribe((product) => {
      const dialogRef = this.dialog.open(EditproductComponent, {
        width: '500px',
        height: '450px',
        data: product
      });
  
      dialogRef.afterClosed().subscribe((updated) => {
        if (updated) {
          this.loadProducts();
        }
      });
    });
  }
  
  Deleteproduct(productId:number){
    if (confirm('Are you sure you want to delete this product?')) {
      this.productService.deleteproduct(productId).subscribe(() => {
        alert('Product deleted successfully!');
        this.loadProducts();
      });
    }
  }
}
