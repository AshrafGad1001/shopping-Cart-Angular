import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor() { }



  //Store Data In Local Storage 
  storeCartData(data: any) {
    let cartData = JSON.stringify(data);
    localStorage.setItem('cart-data', cartData);
  }

  //Get All Data From Local Storage
  getCartData() {
    let getData: any = localStorage.getItem('cart-data');
    return JSON.parse(getData);
  }
}
