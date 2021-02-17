import { Injectable } from '@angular/core';

@Injectable()
export class SessionDataService {

  constructor() { }

  public get(): string {
    return localStorage.getItem('token');
  }

  public set(token: string): void {
    localStorage.setItem('token', token);
  }

  public check(): boolean {
    const dataJson = localStorage.getItem('token');

    return !!dataJson;
  }

  public clear(): void {
    localStorage.removeItem('token');
  }
}
