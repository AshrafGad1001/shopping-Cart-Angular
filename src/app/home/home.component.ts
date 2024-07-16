import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
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
}