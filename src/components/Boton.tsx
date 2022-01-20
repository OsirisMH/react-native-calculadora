import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';

interface BotonProps {
    texto: string;
    color?: string;
    ancho?: boolean;
    accion: (numeroTexto: string) => void;
}

export const Boton = ({texto, color = '#2D2D2D', ancho = false, accion}: BotonProps) => {
    return (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={ () => accion(texto) }
            style={{
                padding: 1,
            }}
        >     
            <View
                style={{
                    ...styles.boton,
                    backgroundColor: color,
                    width: ( ancho ) ? 164 : 80,
                }}
            >
                <Text style={{
                    ...styles.botonTexto,
                    color: ( color === '#9B9B9B' ) ? '#000' : '#FFF',
                    textAlign: ( ancho ) ? 'left' : 'center',
                    paddingHorizontal: ( ancho ) ? 35 : 10,
                }}>{texto}</Text>
            </View>
        </TouchableOpacity>
    );
};
