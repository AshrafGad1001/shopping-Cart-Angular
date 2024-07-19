import { DataStorageService } from './../service/data-storage.service';
import { NavbarComponent } from './../navbar/navbar.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetDataService } from '../service/get-data.service';
@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [NavbarComponent, CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute,
    private _getData: GetDataService
    , private _dataStorage: DataStorageService) { }

  getParamValue: any;
  getProductDetails: any;
  storeCartData: any = [];
  inCart: boolean = false;

  ngOnInit(): void {
    this.getParamValue = this.route.snapshot.paramMap.get('id');

    this.storeCartData = this._dataStorage.getCartData();

    this.storeCartData.filter((ele: any) => {
      if (ele.pdId == this.getParamValue) {
        this.inCart = true;
      }
    });


    this._getData.productData.filter((ele: any) => {
      if (ele.pdId == this.getParamValue) {
        this.getProductDetails = ele;
      }
    });

  }
  addCart(data: any) {
    this.storeCartData.push(data);
    this._dataStorage.storeCartData(this.storeCartData);

  }
}
