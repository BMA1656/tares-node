function converter(a, b) {
    let temp = Number(a);
    let escala = b.toLowerCase();

    switch (escala) {
        case "c":
            let CFahrenheit = (temp * 9 / 5) + 32;
            let Ckelvin = (temp + 273.15);
            return `Los temperatura en Fahrenheit son de: ${CFahrenheit}grados  y en kelvin  de: ${Ckelvin}grados `
        case "f":
            let FCelcius = ((temp - 32) * 5 / 9);
            let FKelvin = ((temp + 459.67) * 5 / 9);
            return `Los temperatura en celcius son de: ${FCelcius}grados  y en kelvin  de: ${FKelvin}grados`
        case "k":
            let KFahrenheit = ((temp - 273.15) * 9 / 5 + 32);
            let Kcelcius = (temp - 273.15);
            return `Los temperatura en celcius son de: ${Kcelcius}grados  y en Fahrenheit  de: ${KFahrenheit}grados`

        default:
            return " Esa letra no pertenece a una escala valida wachin"
    }
}


module.exports = {
    converter: converter,
}