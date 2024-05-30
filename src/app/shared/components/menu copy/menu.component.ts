import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-menu-copy',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponentCopy {
  @Input() items: Array<{
    //imageUrl: string;
    title: string;
    //description: string;
    details: string[];
    link1: { url: string; text: string };
    link2: { url: string; text: string };
  }> = [];

  @Input() selectedItemIndex: number | null = null;

  
}
