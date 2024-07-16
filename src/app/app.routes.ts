import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' } // Default route for unmatched paths
];
