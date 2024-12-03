import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Animated,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function RegistroScreen() {
  const [i_uri, setIUri] = useState(null); // Imagen seleccionada
  const [s_valor] = useState(new Animated.Value(1)); // Escala de animación
  const [a_opacidad] = useState(new Animated.Value(0)); // Animación de opacidad
  const [a_desplazamiento] = useState(new Animated.Value(50)); // Desplazamiento desde abajo

  useEffect(() => {
    // Animación de entrada al cargar la pantalla
    Animated.timing(a_opacidad, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();

    Animated.spring(a_desplazamiento, {
      toValue: 0,
      friction: 5,
      useNativeDriver: true,
    }).start();
  }, []);

  const i_selecciona = async () => {
    const r_resultado = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!r_resultado.canceled) {
      setIUri(r_resultado.assets[0].uri);
    }
  };

  const s_presiona = () => {
    Animated.spring(s_valor, {
      toValue: 0.9,
      useNativeDriver: true,
    }).start();
  };

  const s_libera = () => {
    Animated.spring(s_valor, {
      toValue: 1,
      friction: 3,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View
      style={[
        styles.v_contenedor,
        {
          opacity: a_opacidad,
          transform: [{ translateY: a_desplazamiento }],
        },
      ]}
    >
      <View style={styles.v_cabecera}>
        <Image source={require("../img/logo.png")} style={styles.i_logo} />
        <Text style={styles.t_titulo}>PET-LY</Text>
        <Text style={styles.t_subtitulo}>SOCIAL MEDIA</Text>
      </View>

      {/* Formulario */}
      <View style={styles.v_formulario}>
        {/* Selección de Imagen */}
        <TouchableOpacity style={styles.t_imagen} onPress={i_selecciona}>
          {i_uri ? (
            <Image source={{ uri: i_uri }} style={styles.i_perfil} />
          ) : (
            <View style={styles.v_imagen}>
              <Text style={styles.t_imagenTexto}>Foto de perfil</Text>
            </View>
          )}
        </TouchableOpacity>

        {/* Entradas */}
        <TextInput
          style={styles.ti_entrada}
          placeholder="Nombre de usuario"
          placeholderTextColor="#A4A4A4"
        />
        <TextInput
          style={styles.ti_entrada}
          placeholder="Correo electrónico"
          placeholderTextColor="#A4A4A4"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.ti_entrada}
          placeholder="Contraseña"
          placeholderTextColor="#A4A4A4"
          secureTextEntry
        />
        <TextInput
          style={styles.ti_entrada}
          placeholder="Confirmar contraseña"
          placeholderTextColor="#A4A4A4"
          secureTextEntry
        />

        {/* Botón */}
        <Animated.View style={{ transform: [{ scale: s_valor }] }}>
          <TouchableOpacity
            style={styles.t_boton}
            onPressIn={s_presiona}
            onPressOut={s_libera}
          >
            <Text style={styles.t_botonTexto}>Registrarse</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>

      {/* Pie de Página */}
      <View style={styles.v_pie}>
        <Text style={styles.t_pieTexto}>
          ¿Ya tienes cuenta? <Text style={styles.t_pieEnlace}>Inicia sesión</Text>
        </Text>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  v_contenedor: {
    flex: 1,
    backgroundColor: "#F4F8FB",
    justifyContent: "space-between",
    padding: 20,
  },
  v_cabecera: {
    alignItems: "center",
    marginTop: 40,
  },
  i_logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  t_titulo: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#F39200",
  },
  t_subtitulo: {
    fontSize: 16,
    color: "#7B8C98",
  },
  v_formulario: {
    flex: 1,
    justifyContent: "center",
    marginTop: 20,
  },
  t_imagen: {
    alignItems: "center",
    marginBottom: 20,
  },
  v_imagen: {
    width: 100,
    height: 100,
    backgroundColor: "#D9E5F2",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  i_perfil: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  t_imagenTexto: {
    color: "#7B8C98",
    fontSize: 14,
  },
  ti_entrada: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    fontSize: 16,
    color: "#333333",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  t_boton: {
    backgroundColor: "#F39200",
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  t_botonTexto: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  v_pie: {
    alignItems: "center",
    marginBottom: 20,
  },
  t_pieTexto: {
    fontSize: 14,
    color: "#7B8C98",
  },
  t_pieEnlace: {
    color: "#4A90E2",
    fontWeight: "bold",
  },
});
