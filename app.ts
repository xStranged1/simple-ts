// Ejercicio: Chismes de la Facu
// // Vamos a trabajar con un conjunto de "chismes" representados como una lista de palabras. 
// Cada palabra puede tener ciertos caracteres especiales (&, $, o una combinación de ambos) 
// que determinan su validez. El objetivo es descifrar el "chismesito real" siguiendo las reglas 
// que se detallan a continuación.
// Reglas:
// Si una palabra contiene el caracter &, es un chisme verdadero y debe ser incluida.
// Si una palabra contiene el caracter $, debe ser desestimada (es decir, no se incluye en el resultado).
// Si una palabra contiene ambos caracteres & y $, se debe remplazar por la palabra "¡Chisme falso!".
// Cualquier palabra que no contenga ni & ni $ debe ser mantenida tal cual.
// Tareas:
// Procesar la lista de palabras siguiendo estas reglas.
// Al final, imprimir la lista de "chismes reales", es decir, las palabras que cumplen con las condiciones anteriores.

export const comprobarChismes = (chismes: string[]): string[] => {


    let resultado: string[] = []

    // OLD FUNCTION

    // chimes.forEach(chime => {
    //     if (chime.includes('&') && chime.includes('$')) {
    //         resultado.push('¡Chisme falso!')
    //         return
    //     }
    //     if (chime.includes('&')) {
    //         resultado.push(chime)
    //         return
    //     }
    //     if (chime.includes('$')) {
    //         return
    //     }
    //     resultado.push(chime)
    // });

    // REFACTOR
    for (let i = 0; i < chismes.length; i++) {
        const chisme = chismes[i];
        let includesAmp: boolean = false
        let includesMoney: boolean = false
        let findSomeSimbol: boolean = false

        for (let j = 0; j < chisme.length; j++) {
            const c = chisme[j];

            if (c === '$') {
                findSomeSimbol = true
                includesMoney = true
                if (includesAmp) {
                    resultado.push('¡Chisme falso!')
                    break
                }
            }

            if (c === '&') {
                findSomeSimbol = true
                includesAmp = true
                if (includesMoney) {
                    resultado.push('¡Chisme falso!')
                    break
                }
            }

        }
        if (!findSomeSimbol) {
            resultado.push(chisme)
            continue
        }
        if (includesMoney && includesAmp) continue
        if (includesMoney) continue
        if (includesAmp) {
            resultado.push(chisme)
            continue
        }
    }
    return resultado
}