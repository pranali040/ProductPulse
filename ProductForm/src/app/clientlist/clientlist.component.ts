import { Component } from '@angular/core';
import { ProductserviceService } from '../service/productservice.service';

@Component({
  selector: 'app-clientlist',
  standalone: false,
  templateUrl: './clientlist.component.html',
  styleUrl: './clientlist.component.scss'
})
export class ClientlistComponent {
  clients: any[] = [];

  constructor(private clientService: ProductserviceService

  ) {}

  ngOnInit(): void {
    this.clientService.getClients().subscribe((data) => {
      this.clients = data;
    });
  }
}
