
export function cercaProvincia(sigla_provincia_da_cercare) {
    return function(provincia) {
        //console.log(" ❤   "+sigla_provincia_da_cercare)
        //console.log(provincia.sigla, provincia.sigla === sigla_provincia_da_cercare )

        return provincia.sigla === sigla_provincia_da_cercare;

    }
}
export function cercaRegione(regione_da_cercare) {
    return function (regione) {
        return regione.regione === regione_da_cercare;
    }

}