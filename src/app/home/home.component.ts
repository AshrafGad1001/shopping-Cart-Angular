import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../navbar/navbar.component";
import { GetDataService } from '../service/get-data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  BannerImages = [
    {
      id: 1,
      img: 'assets/images/banner/1.jpg',
    },
    {
      id: 2,
      img: 'assets/images/banner/2.jpg',
    },
    {
      id: 3,
      img: 'assets/images/banner/3.jpg',
    },
  ];




  getCategoryData: any;
  getApplianceProductData: any = [];
  constructor(private _getData: GetDataService) {
  }
  ngOnInit(): void {
    this.getCategoryData = this._getData.categoriesData;
    this._getData.productData.filter((ele: any) => {
      if (ele.pdCategory == 'appliances') {
        this.getApplianceProductData.push(ele);
      }
    });
  }



}