import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatabindingComponent } from './databinding/databinding.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { CompaniesComponent } from './companies/companies.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,DatabindingComponent,FooterComponent,SidebarComponent,NavbarComponent,LoginComponent, NgifComponent,NgforComponent,NgClassComponent,CompaniesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angulardemo';
}
