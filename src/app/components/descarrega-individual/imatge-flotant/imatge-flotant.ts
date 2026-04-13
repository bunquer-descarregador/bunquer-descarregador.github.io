import { Component, HostListener, Input } from '@angular/core';
import { Capitol } from 'src/app/models/capitol.model';

@Component({
    selector: 'app-imatge-flotant',
    imports: [],
    templateUrl: './imatge-flotant.html',
    styleUrl: './imatge-flotant.scss'
})
export class ImatgeFlotantComponent {
    @Input() capitol: Capitol | null = null;
    

    get classeRetallar() {
        if (!this.capitol || !this.capitol?.temporada) return;

        if (this.capitol.temporada < 3 ||
            this.capitol.temporada == 3 && this.capitol?.capitol! <= 156)
            return "mode-1";
        else if (this.capitol.temporada == 3 && this.capitol?.capitol! >= 157)
            return "mode-2"
        else
            return "mode-3";
    
    }
    
    // Posició, segir al cursor //
    protected x = 0;
    protected y = 0;
    @HostListener('document:mousemove', ['$event'])
    onMouseMove(e: MouseEvent) {
        // const imgWidth = 200;
        // const imgHeight = 150;

        this.x = e.clientX + 12;
        this.y = e.clientY + 16;

        // límits pantalla
        // const maxX = window.innerWidth - imgWidth - this.margin;
        // const maxY = window.innerHeight - imgHeight - this.margin;
    }
}
