import { DatePipe } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatTooltip } from '@angular/material/tooltip';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import { Desarrollador } from '../../domain';

@Component({
  selector: 'app-tabla-desarrolladores',
  standalone: true,
  imports: [MatTableModule, MatIcon, MatIconButton, MatTooltip, DatePipe, MatPaginatorModule, MatSortModule, MatFormFieldModule, MatInputModule],
  templateUrl: './tabla-desarrolladores.component.html',
  styleUrl: './tabla-desarrolladores.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TablaDesarrolladoresComponent implements OnChanges, AfterViewInit {
  @Input() desarrolladores!: Desarrollador[];

  @Output() ver = new EventEmitter<number>();
  @Output() editar = new EventEmitter<number>();
  @Output() eliminar = new EventEmitter<number>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns = ['id', 'nombre', 'correo', 'rol', 'fechaContratacion', 'acciones'];
  dataSource!: MatTableDataSource<Desarrollador>;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['desarrolladores']) {
      this.dataSource = new MatTableDataSource(this.desarrolladores);
    }
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
