import { Capitol } from "src/app/models/capitol.model";


export class RegistreCapitolsDescarregats {
    private static readonly CLAU = "capitolsDescarregats";

    public static carregar(capitols: Capitol[]) {
        let raw = localStorage.getItem(this.CLAU);
        if (!raw) return;

        let capitolsDescarregats: Record<string, string | null> = JSON.parse(raw);

        capitols.forEach(c => {
            let data = capitolsDescarregats[c.id];
            if (data)
                c.dataDescarrega = new Date(data);
        });
    }

    public static guardar(capitols: Capitol[]) {
        let capitolsGuardar: Record<string, Date | null> = {};
        capitols.forEach(c => { capitolsGuardar[c.id] = c.dataDescarrega });

        localStorage.setItem(this.CLAU, JSON.stringify(capitolsGuardar));
    }

}
