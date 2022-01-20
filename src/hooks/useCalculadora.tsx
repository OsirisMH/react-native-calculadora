import { useRef, useState } from 'react';
enum Operadores {
    sumar, restar, multiplicar, dividir
}

export const useCalculadora = () => {
    const [numero, setNumero] = useState('0');
    const [numeroAnterior, setNumeroAnterior] = useState('0');
    
    const ultimaOperacion = useRef<Operadores>(); 

    const limpiar = () => {
        setNumero('0');
        setNumeroAnterior('0');
    };

    const armarNumero = ( numeroTexto: string ) => {
        // No aceptar doble punto
        if ( numero.includes('.') && numeroTexto === '.' ) { return; }

        //
        if ( numero.startsWith('0') || numero.startsWith('-0') ) {
            // Punto decimal
            if  ( numeroTexto === '.' ){
                setNumero( numero + numeroTexto );                
            }
            else if ( numeroTexto === '0' && numero.includes('.') ){ // Evaluar si es otro cero, y hay un punto
                setNumero(numero + numeroTexto);
            }
            else if ( numeroTexto !== '0' && !numero.includes('.') ){ // Evaluar si es diferente de cero y no tiene un punto
                if ( numero === '-0' ){
                    setNumero( '-' + numeroTexto );
                }
                else {
                    setNumero( numeroTexto );
                }
            }
            else if ( numeroTexto === '0' && !numero.includes('.') ) { // Evitar multiple cero inicial
                setNumero( numero );
            }
            else {
                setNumero( numero + numeroTexto );
            }
        }
        else {
            setNumero( numero + numeroTexto );
        }
    };

    const borrarUltimaEntrada = () => {
        // if ( numero === '0' ) { return; }

        // if ( numero.length === 1 || (numero.startsWith('-') && numero.length === 2)  ) {
        //     limpiar();
        // }
        // else {
        //     setNumero( numero.slice(0, -1) );
        // }
        
        let negativo = '';
        let numeroTemp = numero;
        if ( numero.includes('-') ){
            negativo = '-';
            numeroTemp = numero.substring(1);
        }

        if ( numeroTemp.length > 1 ){
            setNumero( negativo + numeroTemp.slice(0, -1) );
        }
        else {
            setNumero('0');
        }
    };

    const positivoNegativo = () => {
        if ( numero.includes('-') ){
            setNumero( numero.replace('-', '') );
        }
        else {
            setNumero( '-' + numero );
        }
    };

    const cambiarNumeroPorAnterior = () => {
        if ( numero.endsWith('.') ){
            setNumeroAnterior( numero.slice(0, -1) );
        }
        else {
            setNumeroAnterior( numero );
        }
        setNumero('0');
    };

    const btnDividir = () => {
        cambiarNumeroPorAnterior();
        ultimaOperacion.current = Operadores.dividir;
    };
    
    const btnMultiplicar = () => {
        cambiarNumeroPorAnterior();
        ultimaOperacion.current = Operadores.multiplicar;
    };

    const btnRestar = () => {
        cambiarNumeroPorAnterior();
        ultimaOperacion.current = Operadores.restar;
    };

    const btnSumar = () => {
        cambiarNumeroPorAnterior();
        ultimaOperacion.current = Operadores.sumar;
    };

    const calcular = () => {
        if ( numeroAnterior === '0' ) { return; }

        const numero1 = Number( numero );
        const numero2 = Number( numeroAnterior );

        switch ( ultimaOperacion.current ) {
            case Operadores.sumar:
                setNumero( `${ numero1 + numero2 }` );
                break;
            case Operadores.restar:
                setNumero( `${ numero2 - numero1 }` );
                break;
            case Operadores.multiplicar:
                setNumero( `${ numero1 * numero2 }` );
                break;
            case Operadores.dividir:
                setNumero( `${ numero2 / numero1 }` );
                break;
        }
        setNumeroAnterior('0');
    };

    return {
        numero,
        numeroAnterior,
        limpiar,
        armarNumero,
        borrarUltimaEntrada,
        positivoNegativo,
        btnDividir,
        btnMultiplicar,
        btnRestar,
        btnSumar,
        calcular,
    };
};
