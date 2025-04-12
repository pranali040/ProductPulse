import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductserviceService } from '../service/productservice.service';

@Component({
  selector: 'app-editproduct',
  standalone: false,
  templateUrl: './editproduct.component.html',
  styleUrl: './editproduct.component.scss'
})
export class EditproductComponent {
  productForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private productService: ProductserviceService,
    private dialogRef: MatDialogRef<EditproductComponent>,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.productForm = this.fb.group({
      name: [this.data.name, Validators.required],
      price: [this.data.price, [Validators.required, Validators.min(0)]],
      quantity: [this.data.quantity, [Validators.required, Validators.min(0)]],
      categories: [this.data.categories, Validators.required]
    });
  }

  updateProduct(): void {
    if (this.productForm.valid) {
      const updatedProduct = {
        ...this.data,
        ...this.productForm.value
      };
      this.productService.updateproduct(this.data.id, updatedProduct).subscribe(() => {
        this.snackBar.open('Product updated successfully!', 'Close', {
          duration: 3000
        });
        this.dialogRef.close(true); // true signals successful edit
      });
    }
  }

  close(): void {
    this.dialogRef.close();
  }
}
