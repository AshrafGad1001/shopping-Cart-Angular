import { DataStorageService } from './../service/data-storage.service';
import { NavbarComponent } from './../navbar/navbar.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetDataService } from '../service/get-data.service';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [NavbarComponent, CommonModule, RouterModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit {
  constructor(private _route: ActivatedRoute,
    private _getData: GetDataService
    , private _dataStorage: DataStorageService
    , private _router: Router) { }

  getParamValue: any;
  getProductDetails: any;
  storeCartData: any = [];
  inCart: boolean = false;

  ngOnInit(): void {
    this.getParamValue = this._route.snapshot.paramMap.get('id');



    var getVal = this._dataStorage.getCartData();

    this.storeCartData = getVal ? getVal : [];

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
    data['plusMinusCounter'] = 1;
    this.storeCartData.push(data);
    this._dataStorage.storeCartData(this.storeCartData);
    this._router.navigate(['/cart']);
  }
}
