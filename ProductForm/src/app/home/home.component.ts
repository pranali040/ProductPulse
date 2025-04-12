import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  isLeftSidebarCollapsed: boolean = true;
  headerTitle: string = 'Dashboard';

  constructor(private router: Router, private route: ActivatedRoute) {}
  items = [
    { routeLink: '/home/dashboard', label: 'Dashboard', icon: 'dashboard' },
    { routeLink: '/home/addproduct', label: 'Add Product', icon: 'add_box' },
    { routeLink: '/home/productlist', label: 'Product List', icon: 'inventory' },
    { routeLink: '/home/clientlist', label: 'Client List', icon: 'group' },
  ];

  toggleCollapse(): void {
    this.isLeftSidebarCollapsed = !this.isLeftSidebarCollapsed;
  }

  updateHeaderTitle(label: string): void {
    this.headerTitle = label;
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
