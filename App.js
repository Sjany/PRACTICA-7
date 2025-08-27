import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function App() {
  const [tituloGasto, setTituloGasto] = useState('');
  const [costoGasto, setCostoGasto] = useState('');
  const [gastos, setGastos] = useState([]);
  const [total, setTotal] = useState(0);

  const agregarGasto = () => {
    if (!tituloGasto || !costoGasto) return;
    const nuevo = {
      id: Date.now().toString(),
      titulo: tituloGasto,
      costo: parseFloat(costoGasto),
      pagado: false,
    };
    setGastos([...gastos, nuevo]);
    setTotal(total + nuevo.costo);
    setTituloGasto('');
    setCostoGasto('');
  };

  const marcarPagado = (id, costo) => {
 setGastos(
  gastos.map(g => {
    if (g.id === id) {
      return { ...g, pagado: true };
    }
    return g;
  })
);

    setTotal(total - costo);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>App De Control de Gastos</Text>

      <TextInput
        placeholder="Título del gasto"
        value={tituloGasto}
        onChangeText={setTituloGasto}
        style={styles.input}
      />
      <TextInput
        placeholder="Costo"
        value={costoGasto}
        onChangeText={setCostoGasto}
        keyboardType="numeric"
        style={styles.input}
      />

      <TouchableOpacity onPress={agregarGasto} style={styles.boton}>
        <Text style={styles.textoBoton}>Agregar Gasto</Text>
      </TouchableOpacity>

      {gastos.map(item => (
        <View key={item.id} style={styles.gastoItem}>
          <Text style={item.pagado ? styles.pagado : null}>
            {item.titulo} - ${item.costo}
          </Text>
          {!item.pagado && (
            <TouchableOpacity onPress={() => marcarPagado(item.id, item.costo)} style={styles.botonPagado}>
              <Text style={styles.textoBoton}>Pagado</Text>
            </TouchableOpacity>
          )}
        </View>
      ))}

      <Text style={styles.total}>Total: ${total.toFixed(2)}</Text>
    </View>
  );
}