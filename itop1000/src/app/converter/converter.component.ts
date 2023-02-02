import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IEchangeResponse } from '../types/exhangeResponse.types';
import { EchangeRatesService } from '../services/echange-rates.service';

@Component({
  selector: 'app-converter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss'],
  providers: [],
})
export class ConverterComponent {
  firstValue: number | undefined;
  secondValue: number | undefined;
  selectedCurrencyFirst: string = 'UAH';
  selectedCurrencySecond: string = 'EUR';
  items: IEchangeResponse[] | undefined;

  constructor(private echangeRatesService: EchangeRatesService) {}

  ngOnInit(): void {
    this.submit();
  }

  submit() {
    this.echangeRatesService.getEchange().subscribe({
      next: (response) => {
        this.items = response;
      },
      error: (errorResponse) => {
        console.log('errorResponse: ', errorResponse);
      },
    });
  }

  firstInputConvert(
    value: number,
    currencyFirst: string,
    currencySecond: string
  ) {
    this.secondValue = 0;
    if (currencyFirst === 'UAH' && currencySecond === 'USD') {
      this.secondValue = +(value * (1 / this.items![24].rate)).toFixed(2);
    }
    if (currencyFirst === 'UAH' && currencySecond === 'EUR') {
      this.secondValue = +(value * (1 / this.items![31].rate)).toFixed(2);
    }
    if (currencyFirst === 'EUR' && currencySecond === 'USD') {
      this.secondValue =
        value * +(this.items![31].rate / this.items![24].rate).toFixed(2);
    }
    if (currencyFirst === 'USD' && currencySecond === 'EUR') {
      this.secondValue = +(
        value *
        (this.items![24].rate / this.items![31].rate)
      ).toFixed(2);
    }
    if (currencyFirst === 'USD' && currencySecond === 'UAH') {
      this.secondValue = +(value * this.items![24].rate).toFixed(2);
    }
    if (currencyFirst === 'EUR' && currencySecond === 'UAH') {
      this.secondValue = +(value * this.items![31].rate).toFixed(2);
    }
    if (
      (currencyFirst === 'EUR' && currencySecond === 'EUR') ||
      (currencyFirst === 'UAH' && currencySecond === 'UAH') ||
      (currencyFirst === 'USD' && currencySecond === 'USD')
    ) {
      this.secondValue = +(value * 1).toFixed(2);
    }
  }

  secondInputConvert(
    value: number,
    currencyFirst: string,
    currencySecond: string
  ) {
    this.firstValue = 0;
    if (currencyFirst === 'UAH' && currencySecond === 'USD') {
      this.firstValue = +(value * this.items![24].rate).toFixed(2);
    }
    if (currencyFirst === 'UAH' && currencySecond === 'EUR') {
      this.firstValue = +(value * this.items![31].rate).toFixed(2);
    }
    if (currencyFirst === 'EUR' && currencySecond === 'USD') {
      this.firstValue = +(
        value *
        (this.items![31].rate / this.items![24].rate)
      ).toFixed(2);
    }
    if (currencyFirst === 'USD' && currencySecond === 'EUR') {
      this.firstValue = +(
        value *
        (this.items![24].rate / this.items![31].rate)
      ).toFixed(2);
    }
    if (currencyFirst === 'USD' && currencySecond === 'UAH') {
      this.firstValue = +(value * (1 / this.items![24].rate)).toFixed(2);
    }
    if (currencyFirst === 'EUR' && currencySecond === 'UAH') {
      this.firstValue = +(value * (1 / this.items![31].rate)).toFixed(2);
    }
    if (
      (currencyFirst === 'EUR' && currencySecond === 'EUR') ||
      (currencyFirst === 'USD' && currencySecond === 'USD') ||
      (currencyFirst === 'UAH' && currencySecond === 'UAH')
    ) {
      this.firstValue = +(value * 1).toFixed(2);
    }
  }
}
