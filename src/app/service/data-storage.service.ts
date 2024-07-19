// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class DataStorageService {

//   constructor() { }



//   //Store Data In Local Storage
//   storeCartData(data: any) {
//     let cartData = JSON.stringify(data);
//     localStorage.setItem('cart-data', cartData);
//   }

//   //Get All Data From Local Storage
//   getCartData() {




//     let getData: any = localStorage.getItem('cart-data');
//     return JSON.parse(getData);
//   }
// }



import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor() { }

  // Check if localStorage is available
  private isLocalStorageAvailable(): boolean {
    return typeof localStorage !== 'undefined';
  }

  // Store Data In Local Storage 
  storeCartData(data: any): void {
    if (this.isLocalStorageAvailable()) {
      let cartData = JSON.stringify(data);
      localStorage.setItem('cart-data', cartData);
    } else {
      console.warn('localStorage is not available');
    }
  }

  // Get All Data From Local Storage
  getCartData(): any {
    if (this.isLocalStorageAvailable()) {
      let getData: any = localStorage.getItem('cart-data');
      return getData ? JSON.parse(getData) : null;
    } else {
      console.warn('localStorage is not available');
      return null;
    }
  }
}
