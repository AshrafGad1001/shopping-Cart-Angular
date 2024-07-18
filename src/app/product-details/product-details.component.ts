import { NavbarComponent } from './../navbar/navbar.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetDataService } from '../service/get-data.service';
@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute, private _getData: GetDataService) { }

  getParamValue: any;
  getProductDetails: any;



  ngOnInit(): void {
    this.getParamValue = this.route.snapshot.paramMap.get('id');

    this._getData.productData.filter((ele: any) => {
      if (ele.pdId == this.getParamValue) {
        this.getProductDetails = ele;
      }
    });

  }

}
