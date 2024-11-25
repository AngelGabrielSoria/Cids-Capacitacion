import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatListItem, MatListItemIcon, MatListItemTitle, MatNavList } from '@angular/material/list';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [MatNavList, MatListItem, RouterLink, MatIcon, MatListItemIcon, MatListItemTitle],
  template: `
    <mat-nav-list role="list">
      @for (item of items; track item.name) {
      <mat-list-item role="listitem" [routerLink]="item.route" (click)="toggleSidenav.emit()" >
        <mat-icon matListItemIcon>{{ item.icon }}</mat-icon>
        <span matListItemTitle>{{ item.name }}</span>
      </mat-list-item>
      }
    </mat-nav-list>
  ` ,
  styles: ` 
  mat-list-item {
    display: flex;
    align-items: center;
  }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent {
  items = [
    { name: 'Inicio', route: '/', icon: 'home' },
    { name: 'Desarrolladores', route: '/desarrolladores', icon: 'person' },
    { name: 'Proyectos', route: '/proyectos', icon: 'folder' },
    { name: 'Tareas', route: '/tareas', icon: 'task' },
  ];
  
  @Output() toggleSidenav = new EventEmitter<void>();
}
