import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { NavItem, NavTitle, NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { StorageService } from '../../../auth/services/storage/storage.service';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, RouterLink],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomerComponent {
  constructor(private router: Router){}

  navTitle : NavTitle = { text: 'Quadriga Rental', routerLink: '/'}
  navItems : NavItem[] = [
    { label: 'Home', link: '/' },
    { label: 'About', link: '/about' },
    { label: 'Contact', link: 'mailto:ahmetcetinkaya@tutamail.com' },
    { label: 'Management', link: '/management' },
    { label: 'Brands Management', link: '/management/brands' },
    { label: 'Models Management', link: '/management/models' },
  ];

  logout(){
    StorageService.logout();
    this.router.navigateByUrl("/login")
  }
}
