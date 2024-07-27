import { fileURLToPath } from 'node:url';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './../navbar/navbar.component';
import { DataStorageService } from '../service/data-storage.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NavbarComponent, CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {




  constructor(private _dataStorage: DataStorageService, private _router: Router) {
  }



  getCartData: any;
  storeCartArray: any = [];
  totalAmount: number = 0;
  numOfProductInCart: number = 0;

  ngOnInit(): void {
    this.getCartData = this._dataStorage.getCartData() || [];
    this.numOfProductInCart = this.getCartData ? this.getCartData.length : 0;
    if (this.getCartData) {
      this.getCartData.filter((ele: any) => {
        this.totalAmount = (ele.pdPrice * ele.plusMinusCounter) + this.totalAmount;
      });
}
  }


  removeCart(data: any) {
    this.totalAmount = 0;
    localStorage.removeItem('cart-data');
    this.storeCartArray = [];

    this.getCartData.filter((ele: any) => {
      if (ele.pdId != data.pdId) {
        this.storeCartArray.push(ele);
        this.totalAmount = ele.pdPrice + this.totalAmount;
      }
    });

    this._dataStorage.storeCartData(this.storeCartArray);
    this.getCartData = this._dataStorage.getCartData() || [];
    this.numOfProductInCart = this.getCartData.length;
  }

  plusMinusCount(data: any, type: any) {
    this.storeCartArray = [];
    this.totalAmount = 0;
    var plusMinusValue = data.plusMinusCounter;

    if (type == 'minus') {
      let minusCount = plusMinusValue - 1;
      this.getCartData.filter((ele: any) => {
        if (data.pdId == ele.pdId) {
          ele['plusMinusCounter'] = minusCount;
        }
        this.totalAmount = (ele.pdPrice * ele.plusMinusCounter) + this.totalAmount;
      });

      this.storeCartArray = this.getCartData;
      this._dataStorage.storeCartData(this.storeCartArray);
      this.getCartData = this._dataStorage.getCartData();
    }

    if (type == 'plus') {
      let plusCount = plusMinusValue + 1;
      this.getCartData.filter((ele: any) => {
        if (data.pdId == ele.pdId) {
          ele['plusMinusCounter'] = plusCount;
        }
        this.totalAmount = (ele.pdPrice * ele.plusMinusCounter) + this.totalAmount;
      });

      this.storeCartArray = this.getCartData;
      this._dataStorage.storeCartData(this.storeCartArray);
      this.getCartData = this._dataStorage.getCartData();
    }

  }

  orderClick() {
    localStorage.removeItem('cart-data');
    this._router.navigate(['/']);
  }
}
