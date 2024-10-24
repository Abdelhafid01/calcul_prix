import { Component, ElementRef, Input, input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'calcul-prix-project';

  @ViewChild('productPrice') productPrice!: ElementRef;
  @ViewChild('sommePayee') sommePayee!: ElementRef;
  public total = 0;
  public rendu = 0;
  public divide10 = 0;
  public divide5 = 0;
  public divide1 = 0;
  public resteTotal = 0;
  public list: string[] = [];

  public addition(): void {
    this.rendu = Number(this.sommePayee.nativeElement.value) - this.total;

    this.divide10 = this.rendu / 10;
    this.resteTotal = this.rendu - (Math.trunc(this.divide10) * 10);
    if (this.resteTotal >= 5) {
      this.divide5 = this.resteTotal / 5;
      this.resteTotal = this.resteTotal - (Math.trunc(this.divide5) * 5);
    }
    if (this.resteTotal >= 1) {
      this.divide1 = this.resteTotal / 1;
      this.resteTotal = this.resteTotal - (Math.trunc(this.divide1) * 1);
    }

    this.list[0] = '10 Euros X ' + Math.trunc(this.divide10);
    this.list[1] = '5 Euros X ' + Math.trunc(this.divide5);
    this.list[2] = '1 Euro X ' + Math.trunc(this.divide1);
  }

  public add(): void {
    this.total =  this.total + Number(this.productPrice.nativeElement.value);
    this.productPrice.nativeElement.value = null;
  }

  public reset(): void {
    this.productPrice.nativeElement.value = null;
    this.sommePayee.nativeElement.value = null;
    this.rendu = 0;
    this.list.length = 0;
    this.total = 0;
  }


}
