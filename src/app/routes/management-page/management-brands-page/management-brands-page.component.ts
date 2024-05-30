import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { RouterModule } from '@angular/router';
import { BrandListTableComponent } from '../../../features/brands/components/brand-list-table/brand-list-table.component';

@Component({
  selector: 'app-management-brands-page',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    BrandListTableComponent,
    RouterModule,
  ],
  templateUrl: './management-brands-page.component.html',
  styleUrl: './management-brands-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManagementBrandsPageComponent {

}
