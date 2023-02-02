import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEchangeResponse } from '../types/exhangeResponse.types';

@Injectable({
  providedIn: 'root',
})
export class EchangeRatesService {
  URL: string =
    'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';

  constructor(private http: HttpClient) {}

  getEchange() {
    return this.http.get<IEchangeResponse[]>(`${this.URL}`);
  }
}
