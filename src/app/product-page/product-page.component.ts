import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { ActivatedRoute } from '@angular/router';
import { GetDataService } from '../service/get-data.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [NavbarComponent, RouterModule, CommonModule],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent implements OnInit {
  getParamValue: any;
  getProductData: any = [];
  FilterProductsData: any = [];
  getSubCategoryOptions: any = [];



  constructor(private _router: ActivatedRoute, private _getData: GetDataService) {

  }


  ngOnInit(): void {
    this.getParamValue = this._router.snapshot.paramMap.get('name');

    this._getData.productData.filter((ele: any) => {
      if (ele.pdCategory == this.getParamValue) {
        this.getProductData.push(ele);
        this.FilterProductsData.push(ele);
      }
    });
    this._getData.subCategorisFilterData.filter((ele: any) => {
      if (ele.categories == this.getParamValue) {
        this.getSubCategoryOptions.push(ele);
      }
    });
  }


  filterSelect(data: any) {
    this.FilterProductsData = [];
    var getFilterValue: any = data.target.value;

    if (getFilterValue != 'all') {
      this._getData.productData.filter((ele: any) => {
        if (ele.pdSubCategory == getFilterValue) {
          this.FilterProductsData.push(ele);
        }
      });
    }
    else {
      this.FilterProductsData = this.getProductData;
    }
  }
}
