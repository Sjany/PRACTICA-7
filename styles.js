import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, marginTop: 40 },
  titulo: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 8, marginBottom: 10, borderRadius: 5 },
  boton: { backgroundColor: '#007AFF', padding: 10, borderRadius: 5, marginBottom: 20 },
  textoBoton: { color: '#fff', textAlign: 'center' },
  gastoItem: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
  botonPagado: { backgroundColor: 'green', paddingHorizontal: 10, borderRadius: 5 },
  pagado: { textDecorationLine: 'line-through', color: 'gray' },
  total: { fontSize: 18, fontWeight: 'bold', marginTop: 20 },
});

export default styles;
