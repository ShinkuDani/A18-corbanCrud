import { Component, inject } from '@angular/core';
import { CorbanServiceService } from '../../services/corban-service.service';

@Component({
  selector: 'app-list-clients',
  standalone: true,
  imports: [],
  templateUrl: './list-clients.component.html',
  styleUrl: './list-clients.component.css'
})
export class ListClientsComponent {

  corbanServices = inject(CorbanServiceService)


pegarClients() {
  this.corbanServices.getCustomers().subscribe(
    data => {
      console.log(data);
    }
  )
}

pegarTokens(credentials:string) {
  this.corbanServices.getToken(credentials).subscribe(
    data => localStorage.setItem('corbanToken', data as string) // Precisa alterar pra pegar o valor da chave e não transofrmmar data em uma string.
    
  )
}

}
