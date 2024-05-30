import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { NavItem, NavTitle, NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { StorageService } from '../../../auth/services/storage/storage.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent, RouterLink],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class AdminComponent {
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
