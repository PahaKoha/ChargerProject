import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }

  govno : number = 0;

  getGovno() {
    return this.govno
  }

  plusGovno() {
    this.govno++;
  }


}
