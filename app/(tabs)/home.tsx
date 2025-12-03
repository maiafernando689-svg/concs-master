import React from "react";
import { useRouter } from "expo-router";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
  Platform,
} from "react-native";

// Importação dos ícones
const LOGO_ATHENA = require("../../assets/images/athena.png");
const ICON_MAPA = require("../../assets/images/mapa.png");
const ICON_CONCURSOS = require("../../assets/images/concursos.png");
const ICON_CALENDARIO = require("../../assets/images/calendario.png");
const ICON_BIBLIOTECA = require("../../assets/images/biblioteca.png");
const ICON_HOME = require("../../assets/images/home.png");
const ICON_SEARCH = require("../../assets/images/pesquisa.png");
const ICON_PLUS = require("../../assets/images/mais.png");
const ICON_BELL = require("../../assets/images/notificacoes.png");
const ICON_SETTINGS = require("../../assets/images/configuracoes.png");



// Cores
const COLORS = {
  blueBackground: "#28A2D9",
  cardBackground: "#FFFFFF",
  textColor: "#333333",
  navInactive: "#999999",
  navActive: "#28A2D9",
  fabButton: "#28A2D9",
};

// ===================================
// Card de Navegação
// ===================================
const CardItem = ({ title, iconSource, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={iconSource} style={styles.cardIcon} resizeMode="contain" />
      <Text style={styles.cardTitle}>{title}</Text>
    </TouchableOpacity>
  );
};


// ===================================
// Tela Principal
// ===================================
const Home = () => {
  const router = useRouter();

  const handleNavigate = (screen) => {
   router.push(`/${screen}`); 
  };

  return (
    <View style={styles.fullScreenContainer}>
      {/* CONTEÚDO PRINCIPAL */}
      <View style={styles.contentContainer}>
        {/* LOGO */}
        <View style={styles.logoContainer}>
          <Image source={LOGO_ATHENA} style={styles.logo} resizeMode="contain" />
        </View>

        {/* CARDS */}
        <View style={styles.cardsGrid}>
          <TouchableOpacity
            style={styles.cardItem}
            onPress={() => router.push("/")}
          >
            <Image source={ICON_MAPA} style={styles.cardIcon} />
            <Text style={styles.cardTitle}>Mapa</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.cardItem}
            onPress={() => router.push("/(tabs)/concursos")}
          >
            <Image source={ICON_CONCURSOS} style={styles.cardIcon} />
            <Text style={styles.cardTitle}>Concursos</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.cardItem}
            onPress={() => router.push("/(tabs)/calendario")}
          >
            <Image source={ICON_CALENDARIO} style={styles.cardIcon} />
            <Text style={styles.cardTitle}>Calendário</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.cardItem}
            onPress={() => router.push("/(tabs)/biblioteca")}
          >
            <Image source={ICON_BIBLIOTECA} style={styles.cardIcon} />
            <Text style={styles.cardTitle}>Biblioteca</Text>
          </TouchableOpacity>
        </View>
      </View>


      {/* Barra de Navegação Inferior */}
      <View style={styles.navbar}>
        <TouchableOpacity
          onPress={() => router.push("/(tabs)/home")}
          style={styles.navItem}
        >
          <Image
            source={ICON_HOME}
            style={[styles.navIcon, { tintColor: COLORS.navActive }]}
          />
        </TouchableOpacity>

       <TouchableOpacity onPress={() => router.push("/(tabs)/pesquisa")}
        style={styles.navItem}
        >
  <Image source={ICON_SEARCH} style={styles.navIcon} />
</TouchableOpacity>


        <TouchableOpacity
          onPress={() => router.push("/(tabs)/mais")}
          style={styles.fabButton}
        >
          <Image source={ICON_PLUS} style={styles.fabIcon} />
        </TouchableOpacity>

      <TouchableOpacity
  style={[styles.navItem, styles.notif]}
  onPress={() => router.push("/(tabs)/notificacoes")}
>
  <Image source={ICON_BELL} style={styles.navIcon} />
</TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push("/(tabs)/conf")}
          style={styles.navItem}
        >
          <Image source={ICON_SETTINGS} style={styles.navIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

// ===================================
// Estilos
// ===================================
const windowWidth = Dimensions.get("window").width;
const cardSize = (windowWidth - 48) / 2;

const styles = StyleSheet.create({
  fullScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.blueBackground,
  },

  contentContainer: {
    flex: 1,
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? 50 : 80,
    paddingHorizontal: 16,
  },

  logoContainer: {
    marginBottom: 60,
  },

  logo: {
    width: 100,
    height: 100,
  },

  cardsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: windowWidth - 32,
  },

  card: {
    width: cardSize - 8,
    height: cardSize - 8,
    backgroundColor: COLORS.cardBackground,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4.65,
    elevation: 8,
  },
  cardItem: {
    width: cardSize - 8,
    height: cardSize - 8,
    backgroundColor: "#FFFFFF", // ou COLORS.cardBackground
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 8,
  },

  cardIcon: {
    width: 70,
    height: 70,
    marginBottom: 8,
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: COLORS.textColor,
  },

 
  navItem: {
    flex: 1,
    alignItems: "center",
  },

  navIcon: {
    width: 26,
    height: 27,
    tintColor: COLORS.navInactive,
  },

 

 fabIcon: {
  width: 30,
  height: 30,
  tintColor: "#fff",

  // ⭐ SOMBRA NO ÍCONE PARA NÃO SE MESCLAR
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 3 },
  shadowOpacity: 0.4,
  shadowRadius: 3,
},



  navbar: {
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
  backgroundColor: COLORS.cardBackground,
  borderTopWidth: 1,
  borderTopColor: "#eee",
  paddingHorizontal: 10,
  paddingBottom: Platform.OS === "ios" ? 20 : 10,
  position: "absolute",
  bottom: 50, // ⬅ A BARRA SOBE UM POUCO
  left: 0,
  right: 0,
  height: 85 + (Platform.OS === "ios" ? 10 : 0),
  shadowColor: "#000",
  shadowOffset: { width: 0, height: -2 },
  shadowOpacity: 0.15,
  shadowRadius: 6,
  elevation: 10,
},

fabButton: {
  backgroundColor: COLORS.fabButton,
  width: 62,
  height: 62,
  borderRadius: 31,
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  top: -30, // mantém centralizado sobre a barra
  alignSelf: "center",

  // ⭐ SOMBRA MAIS FORTE NO BOTÃO (+)
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 6 },
  shadowOpacity: 0.35,
  shadowRadius: 10,
  elevation: 20,
},

});


export default Home;;

