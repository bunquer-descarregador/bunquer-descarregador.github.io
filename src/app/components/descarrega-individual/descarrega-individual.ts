
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProgressSpinner } from 'primeng/progressspinner';
import { Capitol } from 'src/app/models/capitol.model';
import { CapitolsService } from 'src/app/services/capitols.service';
import { SeleccioTemporadaService } from 'src/app/services/seleccio-temporada.service';
import { ImatgeFlotantComponent } from './imatge-flotant/imatge-flotant';

@Component({
    selector: 'app-descarrega-individual',
    imports: [
        FormsModule,
        ProgressSpinner,
        ImatgeFlotantComponent
    ],
    templateUrl: './descarrega-individual.html',
    styleUrl: './descarrega-individual.scss'
})
export class DescarregaIndividual {

    public textBuscar = "";
    public llistaFiltrada: Capitol[];

    public desplegablesOberts = [false, false, false, false, false, false];

    public capitolHover: Capitol | null = null;

    constructor(
        public cs: CapitolsService,
        public sts: SeleccioTemporadaService
    ) { }

    get llistaPerTemporades() {
        return [...this.cs.capitolsPerTemporades, this.cs.millors];
    }

    get textNumResultats() {
        if (this.llistaFiltrada.length == 1) return "1 resultat";
        else return this.llistaFiltrada.length + " resultats";
    }

    actLlistaFiltrada() {
        this.llistaFiltrada = this.cs.getLlistaFiltrada(this.textBuscar.toLowerCase());
    }

    descarregaTemporada(index: number) {
        window.scrollTo(0, 250);
        this.sts.seleccionar((index + 1) as 1 | 2 | 3 | 4 | 5 | 6);
    }


}
