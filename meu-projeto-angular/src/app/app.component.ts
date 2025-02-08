import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  amigos: string[] = []; // Lista de amigos
  nomeAmigo: string = ''; // Nome digitado no input
  sorteios: string[] = []; // Lista de sorteios

  adicionar(): void {
    if (this.nomeAmigo.trim() !== '') {
      this.amigos.push(this.nomeAmigo);
      this.nomeAmigo = ''; // Limpa o campo após adicionar
    }
  }

  sortear(): void {
    this.embaralha(this.amigos);
    this.sorteios = [];

    for (let i = 0; i < this.amigos.length - 1; i++) {
      this.sorteios.push(`${this.amigos[i]} → ${this.amigos[i + 1]}`);
    }
  }

  embaralha(lista: string[]): void {
    for (let i = lista.length; i; i--) {
      const indiceAleatorio = Math.floor(Math.random() * i);
      [lista[i - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[i - 1]];
    }
  }

  reiniciar(): void {
    this.amigos = [];
    this.sorteios = [];
  }
}
