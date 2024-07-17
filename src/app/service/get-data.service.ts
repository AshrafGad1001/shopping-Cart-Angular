import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor() { }

  categoriesData = [
    {
      id: 1,
      name: 'Fashion',
      img: 'assets/images/categoriesimg/fashion.webp',
      code: 'fashion'
    },
    {
      id: 2,
      name: 'Home & Furniture',
      img: 'assets/images/categoriesimg/home.webp',
      code: 'Homeandfurniture'
    },
    {
      id: 3,
      name: 'Appliance',
      img: 'assets/images/categoriesimg/appliance.webp',
      code: 'appliance'
    },
    {
      id: 4,
      name: 'Toys',
      img: 'assets/images/categoriesimg/toys.webp',
      code: 'toys'
    },

  ];
}
