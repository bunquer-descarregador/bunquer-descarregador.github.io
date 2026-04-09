export class Capitol {
    id: string;
    title: string;
    urlArxiu: string;
    urlPagina: string;
    temporada: number;
    capitol?: number;
    setmana?: number;
    mida: number;

    imatge_hd: any;
    imatge: any;
    durada_text: any;
    durada_ms: any;
    data_text: any;
    data: any;

    textNormalitzat: string;

    descarregant: boolean = false;
    descarregat: boolean = false;

    dataDescarrega: Date | null = null;

    get titolMostrar() {
        return this.title.includes(" - ") ? this.title.split(" - ")[1] : this.title;
    }
    get nomArxiu() {
        return this.title
            .replaceAll("\"", "'")
            .replaceAll("?", ".") + ".mp3"; // [bunquer-descarregador.github.io].mp3
    }
}
