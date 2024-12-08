    import React, { useState } from "react";
    import {StyleSheet,View,Text,TextInput,Image,ScrollView,TouchableOpacity,} from "react-native";
    import Icon from "react-native-vector-icons/Ionicons";

    const IndexScreen_c = () => {
    const [isSidebarVisible_v, setSidebarVisible_v] = useState(false);

    const toggleSidebar_f = () => {
        setSidebarVisible_v(!isSidebarVisible_v);
    };

    return (
        <View style={styles.Contenedor_p}>
        {isSidebarVisible_v && (
            <View style={styles.Sidebar_c}>
            <TouchableOpacity
                style={styles.BotonCerrar_f}
                onPress={toggleSidebar_f}
            >
                <Icon name="close-outline" size={30} color="#FFFFFF" />
            </TouchableOpacity>
            <Text style={[ styles.ItemSidebar_t,styles.Boton_b]}>Configuración</Text>
            <button style={[ styles.ItemSidebar_t,styles.Boton_b]}>Seguimiento</button>
            </View>
        )}

        
        <View style={styles.Header_c}>
            <TouchableOpacity onPress={toggleSidebar_f}>
            <Icon name="menu" size={30} color="#FFFFFF" />
            </TouchableOpacity>
            <View style={styles.IconosHeader_c}>
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

        
        <View style={styles.ContenedorSaludo_c}>
            <View>
            {/* aquí el nombre esta fijo, q no se te olvide cambiar al nombre del usuario pls*/ }
            <Text style={styles.TextoSaludo_t}>Hola Mythic!</Text>
            <TextInput
                style={styles.BarraBusqueda_f}
                placeholder="¿Qué quieres hacer?"
                placeholderTextColor="#999"
            />
            </View>
            <Image
                        {/* acá igual pero con el icono del perfil cargado */ }

            source={{ uri: "" }}
            style={styles.ImagenPerfil_i}
            />
        </View>

        
        <View style={styles.SeccionHeader_c}>
            <Text style={styles.TituloSeccion_t}>¿Los haz visto?</Text>
            <TouchableOpacity>
            <Text style={styles.VerTodo_t}>Ver todo</Text>
            </TouchableOpacity>
        </View>


        <ScrollView horizontal style={styles.FiltrosContenedor_c}>
            <TouchableOpacity style={[styles.Boton_f, styles.BotonActivo_f]}>
            <Text style={styles.TextoBotonActivo_t}>Reciente</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Boton_f}>
            <Text style={styles.TextoBoton_t}>Perros</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Boton_f}>
            <Text style={styles.TextoBoton_t}>Veterinarias</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Boton_f}>
            <Text style={styles.TextoBoton_t}>...</Text>
            </TouchableOpacity>
        </ScrollView>

        
        <ScrollView style={styles.TarjetasContenedor_c}>
            <View style={styles.Tarjeta_c}>
            <Image
                source={{ }}
                style={styles.ImagenTarjeta_i}
            />
            <View style={styles.ContenidoTarjeta_c}>
                <Text style={styles.TextoTarjeta_t}>Nombre: Lia</Text>
                <Text style={styles.TextoTarjeta_t}>Edad: 1 año</Text>
                <Text style={styles.TextoTarjeta_t}>Característica: collar blanco</Text>
            </View>
            </View>

            <View style={styles.Tarjeta_c}>
            <Image
                source={{}}
                style={styles.ImagenTarjeta_i}
            />
            <View style={styles.ContenidoTarjeta_c}>
                <Text style={styles.TextoTarjeta_t}>Nombre: Max</Text>
                <Text style={styles.TextoTarjeta_t}>Edad: 2 años</Text>
                <Text style={styles.TextoTarjeta_t}>Característica: mancha café</Text>
            </View>
            </View>
        </ScrollView>
        </View>
    );
    };

    const styles = StyleSheet.create({
    Contenedor_p: {
        flex: 1,
        backgroundColor: "#F9F9F9",
    },
    Header_c: {
        backgroundColor: "#F8B13C",
        paddingHorizontal: 15,
        paddingVertical: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    IconosHeader_c: {
        flexDirection: "row",
        gap: 15,
    },
    ContenedorSaludo_c: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 15,
    },
    TextoSaludo_t: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#333",
    },
    BarraBusqueda_f: {
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
        padding: 10,
        marginTop: 10,
        borderColor: "#DDD",
        borderWidth: 1,
        width: 250,

    },
    ImagenPerfil_i: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    SeccionHeader_c: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 15,
    },
    TituloSeccion_t: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
    },
    VerTodo_t: {
        fontSize: 14,
        color: "#F8B13C",
    },
    FiltrosContenedor_c: {
        flexDirection: "row",
        paddingHorizontal: 15,
        marginBottom: 10,
    },
    Boton_f: {
        backgroundColor: "#E0E0E0",
        padding: 10,
        borderRadius: 20,
        marginRight: 10,
    },
    BotonActivo_f: {
        backgroundColor: "#032B30",
    },
    Boton_b: {  
        color: "#333",
        fontWeight: "bold"
    },
    TextoBoton_t: {
        color: "#333",
        fontWeight: "bold",
    },
    TextoBotonActivo_t: {
        color: "#FFFFFF",
        fontWeight: "bold",
    },
    TarjetasContenedor_c: {
        paddingHorizontal: 15,
    },
    Tarjeta_c: {
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        overflow: "hidden",
        marginBottom: 15,
        flexDirection: "row",
        elevation: 2,
    },
    ImagenTarjeta_i: {
        width: 100,
        height: 100,
    },
    ContenidoTarjeta_c: {
        padding: 10,
        justifyContent: "center",
    },
    TextoTarjeta_t: {
        color: "#555",
        fontSize: 14,
    },
    Sidebar_c: {
        position: "absolute",
        top: 0,
        left: 0,
        width: 200,
        height: "100%",
        backgroundColor: "#F8B13C",
        padding: 20,
        zIndex: 100,
    },
    ItemSidebar_t: {
        fontSize: 18,
        color: "#FFFFFF",
        marginBottom: 20,
    },
    BotonCerrar_f: {
        alignSelf: "flex-end",
    },
    });

/*     import React, { useState } from "react";
    import {StyleSheet,View,Text,TextInput,Image,ScrollView,TouchableOpacity,} from "react-native";
    import Icon from "react-native-vector-icons/Ionicons";

    const IndexScreen_c = () => {
    const [isSidebarVisible_v, setSidebarVisible_v] = useState(false);

    const toggleSidebar_f = () => {
        setSidebarVisible_v(!isSidebarVisible_v);
    };

    return (
        <View style={styles.Contenedor_p}>
        {isSidebarVisible_v && (
            <View style={styles.Sidebar_c}>
            <TouchableOpacity
                style={styles.BotonCerrar_f}
                onPress={toggleSidebar_f}
            >
                <Icon name="close-outline" size={30} color="#FFFFFF" />
            </TouchableOpacity>
            <Text style={[ styles.ItemSidebar_t,styles.Boton_b]}>Configuración</Text>
            <button style={[ styles.ItemSidebar_t,styles.Boton_b]}>Seguimiento</button>
            </View>
        )}

        
        <View style={styles.Header_c}>
            <TouchableOpacity onPress={toggleSidebar_f}>
            <Icon name="menu" size={30} color="#FFFFFF" />
            </TouchableOpacity>
            <View style={styles.IconosHeader_c}>
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

        
        <View style={styles.ContenedorSaludo_c}>
            <View>
            <Text style={styles.TextoSaludo_t}>Hola Mythic!</Text>
            <TextInput
                style={styles.BarraBusqueda_f}
                placeholder="¿Qué quieres hacer?"
                placeholderTextColor="#999"
            />
            </View>
            <Image
            source={{ uri: "" }}
            style={styles.ImagenPerfil_i}
            />
        </View>

        
        <View style={styles.SeccionHeader_c}>
            <Text style={styles.TituloSeccion_t}>¿Los haz visto?</Text>
            <TouchableOpacity>
            <Text style={styles.VerTodo_t}>Ver todo</Text>
            </TouchableOpacity>
        </View>


        <ScrollView horizontal style={styles.FiltrosContenedor_c}>
            <TouchableOpacity style={[styles.Boton_f, styles.BotonActivo_f]}>
            <Text style={styles.TextoBotonActivo_t}>Reciente</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Boton_f}>
            <Text style={styles.TextoBoton_t}>Perros</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Boton_f}>
            <Text style={styles.TextoBoton_t}>Veterinarias</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Boton_f}>
            <Text style={styles.TextoBoton_t}>...</Text>
            </TouchableOpacity>
        </ScrollView>

        
        <ScrollView style={styles.TarjetasContenedor_c}>
            <View style={styles.Tarjeta_c}>
            <Image
                source={{ }}
                style={styles.ImagenTarjeta_i}
            />
            <View style={styles.ContenidoTarjeta_c}>
                <Text style={styles.TextoTarjeta_t}>Nombre: Lia</Text>
                <Text style={styles.TextoTarjeta_t}>Edad: 1 año</Text>
                <Text style={styles.TextoTarjeta_t}>Característica: collar blanco</Text>
            </View>
            </View>

            <View style={styles.Tarjeta_c}>
            <Image
                source={{}}
                style={styles.ImagenTarjeta_i}
            />
            <View style={styles.ContenidoTarjeta_c}>
                <Text style={styles.TextoTarjeta_t}>Nombre: Max</Text>
                <Text style={styles.TextoTarjeta_t}>Edad: 2 años</Text>
                <Text style={styles.TextoTarjeta_t}>Característica: mancha café</Text>
            </View>
            </View>
        </ScrollView>
        </View>
    );
    };

    const styles = StyleSheet.create({
    Contenedor_p: {
        flex: 1,
        backgroundColor: "#F9F9F9",
    },
    Header_c: {
        backgroundColor: "#F8B13C",
        paddingHorizontal: 15,
        paddingVertical: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    IconosHeader_c: {
        flexDirection: "row",
        gap: 15,
    },
    ContenedorSaludo_c: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 15,
    },
    TextoSaludo_t: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#333",
    },
    BarraBusqueda_f: {
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
        padding: 10,
        marginTop: 10,
        borderColor: "#DDD",
        borderWidth: 1,
        width: 250,

    },
    ImagenPerfil_i: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    SeccionHeader_c: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 15,
    },
    TituloSeccion_t: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
    },
    VerTodo_t: {
        fontSize: 14,
        color: "#F8B13C",
    },
    FiltrosContenedor_c: {
        flexDirection: "row",
        paddingHorizontal: 15,
        marginBottom: 10,
    },
    Boton_f: {
        backgroundColor: "#E0E0E0",
        padding: 10,
        borderRadius: 20,
        marginRight: 10,
    },
    BotonActivo_f: {
        backgroundColor: "#032B30",
    },
    Boton_b: {  
        color: "#333",
        fontWeight: "bold"
    },
    TextoBoton_t: {
        color: "#333",
        fontWeight: "bold",
    },
    TextoBotonActivo_t: {
        color: "#FFFFFF",
        fontWeight: "bold",
    },
    TarjetasContenedor_c: {
        paddingHorizontal: 15,
    },
    Tarjeta_c: {
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        overflow: "hidden",
        marginBottom: 15,
        flexDirection: "row",
        elevation: 2,
    },
    ImagenTarjeta_i: {
        width: 100,
        height: 100,
    },
    ContenidoTarjeta_c: {
        padding: 10,
        justifyContent: "center",
    },
    TextoTarjeta_t: {
        color: "#555",
        fontSize: 14,
    },
    Sidebar_c: {
        position: "absolute",
        top: 0,
        left: 0,
        width: 200,
        height: "100%",
        backgroundColor: "#F8B13C",
        padding: 20,
        zIndex: 100,
    },
    ItemSidebar_t: {
        fontSize: 18,
        color: "#FFFFFF",
        marginBottom: 20,
    },
    BotonCerrar_f: {
        alignSelf: "flex-end",
    },
    });*/
