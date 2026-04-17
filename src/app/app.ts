import { Component, HostListener } from '@angular/core';
import { DescarregaIndividual } from 'src/app/components/descarrega-individual/descarrega-individual';
import { DescarregaMultiple } from 'src/app/components/descarrega-multiple/descarrega-multiple';
import { Footer } from 'src/app/components/footer/footer';
import { ImportExport } from 'src/app/components/import-export/import-export';

@Component({
    selector: 'app-root',
    imports: [ImportExport, DescarregaMultiple, DescarregaIndividual, Footer],
    templateUrl: './app.html',
    styleUrl: './app.scss'
})
export class App {

    public scrolled: boolean;

    constructor() { }


    @HostListener('window:scroll')
    onScroll() {
        this.scrolled = window.scrollY > 150;
    }

}
