import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IInvoice, IInvoiceResponse, InvoiceMapper } from '../mappers/invoice.mapper';


@Injectable()
export class InvoiceService {

  constructor(
    private readonly _httpClient: HttpClient,
  ) { }

  public list(): Observable<IInvoice[]> {
    return this._httpClient.get<IInvoiceResponse[]>('invoices')
      .pipe(
        map((response) => response.map((item) => InvoiceMapper.fromJson(item))),
      );
  }

  public get(id: string): Observable<IInvoice> {
    return this._httpClient.get<IInvoiceResponse>(`invoices/${id}`)
      .pipe(
        map((response) => InvoiceMapper.fromJson(response)),
      );
  }

  public create(data: object): Observable<IInvoice> {
    return this._httpClient.post<IInvoiceResponse>('invoices', data)
      .pipe(
        map((response) => InvoiceMapper.fromJson(response)),
      );
  }

  public edit(data: object, id: string): Observable<IInvoice> {
    return this._httpClient.put<IInvoiceResponse>(`invoice/${id}`, data)
      .pipe(
        map((response) => InvoiceMapper.fromJson(response)),
      );
  }

  public download(data: unknown): Observable<unknown> {
    return;
  }
}
