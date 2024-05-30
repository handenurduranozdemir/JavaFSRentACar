import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeLayoutComponent } from '../../shared/layouts/home-layout/home-layout.component';
import { BrandListTableComponent } from '../../features/brands/components/brand-list-table/brand-list-table.component';

@Component({
  selector: 'app-management-page',
  standalone: true,
  imports: [
    CommonModule, RouterModule, HomeLayoutComponent
  ],
  templateUrl: './management-page.component.html',
  styleUrl: './management-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManagementPageComponent {

}
