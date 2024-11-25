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
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Proyecto } from '../../domain';
import { MatIcon } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';
import { MatIconButton } from '@angular/material/button';

@Component({
  selector: 'app-tabla-proyectos',
  standalone: true,
  imports: [MatTableModule, DatePipe, MatPaginatorModule, MatSortModule, MatIcon, MatTooltip, MatIconButton],
  templateUrl: './tabla-proyectos.component.html',
  styleUrls: ['./tabla-proyectos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TablaProyectosComponent implements OnChanges, AfterViewInit {
  @Input() proyectos!: Proyecto[];

  @Output() ver = new EventEmitter<number>();
  @Output() editar = new EventEmitter<number>();
  @Output() eliminar = new EventEmitter<number>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns = ['nombre', 'descripcion', 'fechaInicio', 'fechaFin', 'responsable', 'acciones'];
  dataSource!: MatTableDataSource<Proyecto>;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['proyectos'] && this.proyectos) {
      this.dataSource = new MatTableDataSource(this.proyectos);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

  ngAfterViewInit(): void {
    if (this.dataSource) {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }
}
