import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EchangeRatesService } from '../services/echange-rates.service';
import { IEchangeResponse } from '../types/exhangeResponse.types';
import { ConverterComponent } from '../converter/converter.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
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
}
