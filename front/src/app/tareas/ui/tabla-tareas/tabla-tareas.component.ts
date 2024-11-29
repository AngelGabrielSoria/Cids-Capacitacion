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
import { Tarea } from '../../domain';
import { MatIcon } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';
import { MatIconButton } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
    selector: 'app-tabla-tareas',
    standalone: true,
    imports: [
        MatTableModule,
        MatIcon,
        MatIconButton,
        MatTooltip,
        DatePipe,
        MatPaginatorModule,
        MatSortModule,
        MatFormFieldModule,
        MatInputModule,
    ],
    templateUrl: './tabla-tareas.component.html',
    styleUrl: './tabla-tareas.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TablaTareasComponent implements OnChanges, AfterViewInit {
    @Input() tareas!: Tarea[];

    @Output() ver = new EventEmitter<number>();
    @Output() editar = new EventEmitter<number>();
    @Output() eliminar = new EventEmitter<number>();

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;

    displayedColumns = ['id', 'titulo', 'descripcion', 'proyecto', 'asignado', 'estado', 'acciones'];
    dataSource!: MatTableDataSource<Tarea>;

    ngOnChanges(changes: SimpleChanges): void {
        this.dataSource = new MatTableDataSource(this.tareas);
    }

    ngAfterViewInit(): void {
        if (this.dataSource) {
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        }
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
}
