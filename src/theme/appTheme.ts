import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    fondo: {
        backgroundColor: '#000000',
        flex: 1,
    },
    calculadoraContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        marginBottom: 30,
    },
    resultado: {
        color: '#FFFFFF',
        fontSize: 60,
        textAlign: 'right',
        marginBottom: 10,
    },
    resultadoPequeno: {
        color: 'rgba(255,255,255,0.5)',
        fontSize: 30,
        textAlign: 'right',
    },

    fila: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 10,
    },
    boton: {
        height: 80,
        width: 80,
        justifyContent: 'center',
        backgroundColor: '#2D2D2D',
        borderRadius: 100,
        marginHorizontal: 10,
    },
    botonTexto: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color: '#FFF',
        fontWeight: '500',
    },
});
