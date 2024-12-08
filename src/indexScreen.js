import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  Animated,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const indexScreen = () => {
  const [barraVisible, setBarraVisible] = useState(false);
  const [filtroSel, setFiltroSel] = useState("Reciente");
  const [publicaciones, setPublicaciones] = useState([
    { id: 1, nombre: "Lia", edad: "1 año", detalle: "Collar blanco", filtro: "Reciente", img: require("../img/perro1.jpeg") },
    { id: 2, nombre: "Max", edad: "2 años", detalle: "Mancha café", filtro: "Perros", img: require("../img/perro2.jpeg") },
    { id: 3, nombre: "Rocky", edad: "3 años", detalle: "Pelo negro", filtro: "Veterinaria", img: require("../img/perro2.jpeg") },
  ]);

  const filtros = ["Reciente", "Perros", "Veterinaria", "..."];
  const animBarra = useState(new Animated.Value(-250))[0];

  const alternarBarra = () => {
    if (barraVisible) {
      Animated.timing(animBarra, {
        toValue: -250,
        duration: 300,
        useNativeDriver: false,
      }).start(() => setBarraVisible(false));
    } else {
      setBarraVisible(true);
      Animated.timing(animBarra, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  };

  const cambiarFiltro = (filtro) => {
    setFiltroSel(filtro);
    const publicacionesOrdenadas = publicaciones
      .filter((pub) => pub.filtro === filtro)
      .concat(publicaciones.filter((pub) => pub.filtro !== filtro));
    setPublicaciones(publicacionesOrdenadas);
  };

  return (
    <View style={estilos.cont_p}>
    
      {barraVisible && (
        <Animated.View style={[estilos.barra_l, { left: animBarra }]}>
          <TouchableOpacity style={estilos.btn_cerrar} onPress={alternarBarra}>
            <Icon name="close-outline" size={30} color="#FFFFFF" />
          </TouchableOpacity>
          <TouchableOpacity style={estilos.btn_l}>
            <Icon name="settings-outline" size={24} color="#FFFFFF" style={estilos.icono_btn} />
            <Text style={estilos.texto_btn}>Configuración</Text>
          </TouchableOpacity>
          <TouchableOpacity style={estilos.btn_l}>
            <Icon name="add-circle-outline" size={24} color="#FFFFFF" style={estilos.icono_btn} />
            <Text style={estilos.texto_btn}>Crear Publicación</Text>
          </TouchableOpacity>
        </Animated.View>
      )}

      
      <View style={estilos.encabezado_c}>
        <TouchableOpacity onPress={alternarBarra}>
          <Icon name="menu" size={30} color="#FFFFFF" />
        </TouchableOpacity>
        <View style={estilos.iconos_c}>
          <TouchableOpacity>
            <Icon name="calendar-outline" size={24} color="#FFFFFF" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="document-text-outline" size={24} color="#FFFFFF" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="search-outline" size={24} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Icon name="chatbubble-ellipses-outline" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      
      <View style={estilos.saludo_c}>
        <View>
                  {/*Aquí cambia el nombre pq no es mythic, es del usuario w*/ }

          <Text style={estilos.texto_s}>¡Hola Mythic!</Text>
          <TextInput
            style={estilos.busqueda_i}
            placeholder="¿Qué quieres hacer?"
            placeholderTextColor="#999"
          />
        </View>
        {/*acá tmb cambias la la ruta de imagen por cual se va actualizar pq esa es fija*/ }
        <Image source={require("../img/icon.jpg")} style={estilos.perfil_i} />
      </View>

      <View style={estilos.seccion_e}>
        <Text style={estilos.texto_s}>¿Los has visto?</Text>
        <TouchableOpacity>
          <Text style={estilos.ver_todo}>Ver todo</Text>
        </TouchableOpacity>
      </View>

      <ScrollView horizontal style={estilos.filtros_c}>
        {filtros.map((filtro, index) => (
          <TouchableOpacity
            key={index}
            style={[
              estilos.filtro_btn,
              filtro === filtroSel ? estilos.filtro_act : null,
            ]}
            onPress={() => cambiarFiltro(filtro)}
          >
            <Text style={filtro === filtroSel ? estilos.filtro_t_a : estilos.texto_f}>
              {filtro}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <ScrollView style={estilos.tarjetas_c}>
        {publicaciones.map((pub) => (
          <View key={pub.id} style={estilos.tarjeta_c}>
            <Image source={pub.img} style={estilos.tarjeta_i} />
            <View style={estilos.tarjeta_cont}>
              <Text style={estilos.tarjeta_t}>Nombre: {pub.nombre}</Text>
              <Text style={estilos.tarjeta_t}>Edad: {pub.edad}</Text>
              <Text style={estilos.tarjeta_t}>Detalle: {pub.detalle}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      
      <TouchableOpacity style={estilos.btn_f}>
        <Icon name="add" size={30} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
};

const estilos = StyleSheet.create({
  cont_p: { flex: 1, backgroundColor: "#F9F9F9" },
  barra_l: {
    position: "absolute",
    top: 0,
    bottom: 0,
    width: 250,
    backgroundColor: "#F8B13C",
    zIndex: 1000,
    elevation: 5,
    paddingHorizontal: 10,
    paddingVertical: 20,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  btn_cerrar: {
    alignSelf: "flex-end",
    marginBottom: 20,
  },
  btn_l: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomColor: "#444",
    borderBottomWidth: 0.5,
    marginBottom: 10,
  },
  icono_btn: { marginRight: 10 },
  texto_btn: { fontSize: 16, color: "#FFFFFF", fontWeight: "bold" },
  encabezado_c: {
    backgroundColor: "#F8B13C",
    paddingHorizontal: 15,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconos_c: { flexDirection: "row", gap: 15 },
  saludo_c: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
  },
  texto_s: { fontSize: 24, fontWeight: "bold", color: "#333" },
  busqueda_i: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 10,
    marginTop: 10,
    borderColor: "#DDD",
    borderWidth: 1,
    width: 250,
  },
  perfil_i: { width: 50, height: 50, borderRadius: 25 },
  seccion_e: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
  },
  ver_todo: { fontSize: 14, color: "#F8B13C" },
  filtros_c: { flexDirection: "row", paddingHorizontal: 15, marginBottom: 10 },
  filtro_btn: {
    backgroundColor: "#E0E0E0",
    borderRadius: 25,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    height: 30,
  },
  filtro_act: { backgroundColor: "#032B30" },
  texto_f: { color: "#333", fontWeight: "bold", fontSize: 12 },
  filtro_t_a: { color: "#FFFFFF", fontWeight: "bold", fontSize: 12 },
  tarjetas_c: { paddingHorizontal: 15 },
  tarjeta_c: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    marginBottom: 20,
    overflow: "hidden",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    padding: 10,
    flexDirection: "row",
  },
  tarjeta_i: { width: 120, height: 120, borderRadius: 10 },
  tarjeta_cont: { marginLeft: 15, flex: 1, justifyContent: "center" },
  tarjeta_t: { fontSize: 14, color: "#333" },
  btn_f: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#F8B13C",
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
  },
});

