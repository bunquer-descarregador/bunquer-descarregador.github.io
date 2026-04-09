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
    

    x = 0;
    y = 0;

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
