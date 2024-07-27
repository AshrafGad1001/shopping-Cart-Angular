import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DataStorageService } from '../service/data-storage.service';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  constructor(private _dataStorage: DataStorageService) {

  }
  @Input() cartCount: number = 0;

  ngOnInit(): void {
    var getVal = this._dataStorage.getCartData();
    this.cartCount = getVal ? getVal.length : 0;
  }

}
