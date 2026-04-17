import { Injectable } from "@angular/core";
import { Capitol } from "../models/capitol.model";

@Injectable({
    providedIn: 'root',
})
export class RegistreCapitolsDescarregatsService {

    public carregar(capitols: Capitol[]) {
        let raw = localStorage.getItem("capitolsDescarregats");
        if (!raw) return;

        let capitolsDescarregats: Record<string, string | null> = JSON.parse(raw);

        capitols.forEach(c => {
            let data = capitolsDescarregats[c.id];
            if (data)
                c.dataDescarrega = new Date(data);
        });
    }

    public guardar(capitols: Capitol[]) {
        let capitolsGuardar: Record<string, Date | null> = {};
        capitols.forEach(c => { capitolsGuardar[c.id] = c.dataDescarrega });

        localStorage.setItem("capitolsDescarregats", JSON.stringify(capitolsGuardar));
    }

}
