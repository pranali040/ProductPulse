import { Component } from '@angular/core';
import { ProductserviceService } from '../service/productservice.service';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  totalProducts = 0;
  totalClients = 0;

  constructor(private productService: ProductserviceService) {}

  ngOnInit(): void {
    this.loadProductData();
    this.loadClientData();
  }

  loadProductData() {
    this.productService.getproduct().subscribe(products => {
      this.totalProducts = products.length;

      const categoryPrices: any = {};
      const categoryCount: any = {};
      products.forEach(p => {
        categoryCount[p.categories] = (categoryCount[p.categories] || 0) + 1;
        categoryPrices[p.categories] = (categoryPrices[p.categories] || 0) + p.price;
      });

      const avgPriceData: { [key: string]: number } = {};
      for (const cat in categoryPrices) {
        avgPriceData[cat] = categoryPrices[cat] / categoryCount[cat];
      }
      this.initCategoryChart(categoryCount);
      this.initAveragePriceChart(avgPriceData);
    });
  }

  loadClientData() {
    this.productService.getClients().subscribe(clients => {
      this.totalClients = clients.length;

      const dateCount: any = {};
      clients.forEach(c => {
        const date = new Date(c.registeredDate || c.createdAt || new Date()).toLocaleDateString();
        dateCount[date] = (dateCount[date] || 0) + 1;
      });

      this.initClientChart(dateCount);
    });
  }

  initCategoryChart(data: any) {
    const ctx = document.getElementById('categoryChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: Object.keys(data),
        datasets: [{
          label: 'Products by Category',
          data: Object.values(data),
          backgroundColor: ['#3f51b5', '#4caf50', '#ff9800', '#e91e63']
        }]
      }
    });
  }

  initClientChart(data: any) {
    const ctx = document.getElementById('clientChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: Object.keys(data),
        datasets: [{
          label: 'Client Signups',
          data: Object.values(data),
          fill: false,
          borderColor: '#3f51b5',
          tension: 0.3
        }]
      }
    });
  }
  initAveragePriceChart(data: any) {
    const ctx = document.getElementById('avgPriceChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: Object.keys(data),
        datasets: [{
          label: 'Average Price per Category',
          data: Object.values(data),
          backgroundColor: '#3f51b5'
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 5000
            }
          }
        }
      }
    });
  }
}
