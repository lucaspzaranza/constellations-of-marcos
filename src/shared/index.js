import { signs, planets } from "../data/zodiac";

export default function getTransformedLongitude(longitude) {
    const signIndex = Math.trunc(longitude / 30);
    const signDegree = longitude % 30;

    var [numericPart, decimalPart] = signDegree.toString().split('.');
    if(decimalPart === undefined) {
        decimalPart = '00';
    }
    else {
        decimalPart = decimalPart.length === 1 ? `${decimalPart}0` : decimalPart.substring(0, 2);
    }

    const sign = signs[signIndex];

    return `${numericPart}° ${sign.symbol} ${sign.short} ${decimalPart}'`;
}

export const removeAccents = str =>
        str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

export function getStarNatureName(nature) {

    if(nature === null) {
        return 'Não especificada'
    }
    else {
        var name = '';

        nature.forEach((natureValue, index) => {
            const planet = planets[natureValue];
            //console.log(planet);
            name += `${planet.name} ${planet.symbol}`

           if(index < nature.length - 1) {
            name += ' e ';
           }
        })

        return name;
    }
}