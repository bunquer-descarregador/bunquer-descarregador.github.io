import { Component } from '@angular/core';
import { CapitolsService } from 'src/app/services/capitols.service';

@Component({
    selector: 'app-import-export',
    imports: [],
    templateUrl: './import-export.html',
    styleUrl: './import-export.scss'
})
export class ImportExport {

    constructor(public cs: CapitolsService) {

    }

    importar(json) {
        [...this.cs.capitols, ...this.cs.millors].forEach(c => {
            if (json.data[c.id])
                c.dataDescarrega = new Date(json.data[c.id]);
        });

        console.log("JSON importat", json.data);
    }

    exportar() {
        let capitolsGuardar: Record<string, Date | null> = {};
        [...this.cs.capitols, ...this.cs.millors].forEach(c => { capitolsGuardar[c.id] = c.dataDescarrega });

        const json = {
            "type": "capitols-descarregats",
            "version": "1",
            "source": "https://bunquer-descarregador.github.io/",
            "exportat-el": new Date().toLocaleString('ca-ES', { dateStyle: 'long', timeStyle: 'short' }),
            "capitols-vistos": this.cs.capitols.filter(c => c.dataDescarrega).length + "/" + this.cs.capitols.length,
            "data": capitolsGuardar,
        };

        console.log(json);

        this.descarregarJSON(json);
    }


    public descarregarJSON(obj: any) {
        const json = JSON.stringify(obj, null, 4);

        const blob = new Blob([json], { type: "application/json" });
        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = "capitols-vistos-bunquer.json";
        a.click();

        URL.revokeObjectURL(url);
    }

    onFileSelected(event: Event) {
        const input = event.target as HTMLInputElement;
        const file = input.files?.[0];
        if (!file) return;

        if (file.type !== "application/json" && !file.name.endsWith(".json")) {
            console.error("No és JSON");
            return;
        }

        const reader = new FileReader();

        reader.onload = () => {
            try {
                const text = reader.result as string;
                const data = JSON.parse(text);

                console.log(data);

                this.importar(data);



            } catch (e) {
                console.error("JSON invàlid", e);
            }
            finally {
                input.value = "";
            }
        };

        reader.readAsText(file);
    }
}
