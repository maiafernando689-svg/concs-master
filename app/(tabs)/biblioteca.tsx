import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, SafeAreaView, ScrollView, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { addWhitelistedNativeProps } from 'react-native-reanimated/lib/typescript/ConfigHelper';

const { width } = Dimensions.get('window');

// --- Dados Simulados dos Assuntos da Biblioteca ---
// Ícones dos cards da matéria
const ICON_GRAMATICA = require("../../assets/images/gramatica.png");
const ICON_MATEMATICA = require("../../assets/images/matematica.png");
const ICON_DIREITO = require("../../assets/images/direito.png");
const ICON_APOSTILAS = require("../../assets/images/apostilas.png");
const ICON_CONHECIMENTO = require("../../assets/images/conhecimento.png");
const ICON_INFORMATICA = require("../../assets/images/informatica.png");
const ICON_HISTORIA = require("../../assets/images/historia.png");
const ICON_FILOSOFIA = require("../../assets/images/filosofia.png");
const ICON_SOCIOLOGIA = require("../../assets/images/sociologia.png");
const ICON_ADMIN = require("../../assets/images/administracao.png");
const ICON_ECONOMIA = require("../../assets/images/economia.png");
const ICON_LOGICA = require("../../assets/images/logica.png");
const ICON_INGLES = require("../../assets/images/ingles.png");
const ICON_QUIMICA = require("../../assets/images/quimica.png");
const ICON_LITERATURA = require("../../assets/images/literatura.png");


// --- Componente do Card do Assunto ---
interface CardItemProps {
  title: string;
  iconSource: any;
  onPress: () => void;
}

const CardItem: React.FC<CardItemProps> = ({ title, iconSource, onPress }) => {
  return (
    <TouchableOpacity style={styles.cardItem} onPress={onPress}>
      <Image source={iconSource} style={styles.cardIcon} resizeMode="contain" />
      <Text style={styles.cardTitle}>{title}</Text>
    </TouchableOpacity>
  );
};


// --- Componente Principal da Biblioteca Screen ---
const BibliotecaScreen: React.FC = () => {
  const router = useRouter();

  const handleSubjectPress = (subjectName: string) => {
    // Futuramente: router.push(/biblioteca/${subjectName.toLowerCase()});
    Alert.alert(
        'Ação Assunto', // Título (string)
        `Você clicou em: ${subjectName}. Navegar para o conteúdo.`, // Mensagem (string interpolada com backticks)
        [{ text: 'OK' }]
    );
};
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* 1. Header/Logo (Simples) */}
        <View style={styles.header}>
            <Image 
                source={require('../../assets/images/athena.png')} 
                style={styles.logo}
                resizeMode="contain"
            />
        </View>

      {/* CARDS DA TELA PRINCIPAL */}
<View style={styles.cardsGrid}>

  <CardItem title="Gramática" iconSource={ICON_GRAMATICA} onPress={() => router.push("/")} />
  <CardItem title="Matemática" iconSource={ICON_MATEMATICA} onPress={() => router.push("/matematica")} />
  <CardItem title="Direito" iconSource={ICON_DIREITO} onPress={() => router.push("/direito")} />

  <CardItem title="Apostilas" iconSource={ICON_APOSTILAS} onPress={() => router.push("/apostilas")} />
  <CardItem title="Conhecimento geral" iconSource={ICON_CONHECIMENTO} onPress={() => router.push("/conhecimento")} />
  <CardItem title="Informática" iconSource={ICON_INFORMATICA} onPress={() => router.push("/informatica")} />

  <CardItem title="História" iconSource={ICON_HISTORIA} onPress={() => router.push("/historia")} />
  <CardItem title="Filosofia" iconSource={ICON_FILOSOFIA} onPress={() => router.push("/filosofia")} />
  <CardItem title="Sociologia" iconSource={ICON_SOCIOLOGIA} onPress={() => router.push("/sociologia")} />

  <CardItem title="Administração" iconSource={ICON_ADMIN} onPress={() => router.push("/administracao")} />
  <CardItem title="Economia" iconSource={ICON_ECONOMIA} onPress={() => router.push("/economia")} />
  <CardItem title="Lógica" iconSource={ICON_LOGICA} onPress={() => router.push("/logica")} />

  <CardItem title="Inglês" iconSource={ICON_INGLES} onPress={() => router.push("/ingles")} />
  <CardItem title="Química" iconSource={ICON_QUIMICA} onPress={() => router.push("/quimica")} />
  <CardItem title="Literatura" iconSource={ICON_LITERATURA} onPress={() => router.push("/(tabs)/literatura")} />

</View>

      </ScrollView>
      {/* NOTA: A Bottom Tab Bar será renderizada automaticamente pelo _layout.tsx se for uma tela de tab */}
    </SafeAreaView>
  );
};

  


// --- Estilos da Tela ---
const CARD_MARGIN = 10;
const CARD_PADDING = 10;
// Calcula o tamanho do card para ter 3 colunas (4 margens)
const NUM_COLUMNS = 3; 
const CARD_SIZE = (width - (CARD_MARGIN * (NUM_COLUMNS + 1))) / NUM_COLUMNS; 
const BLUE_BG = '#28A2D9'; // Cor de fundo principal

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BLUE_BG, 
  },
  scrollContent: {
    paddingBottom: 80, // Espaço extra para não esconder o último item atrás da tab bar
  },
  header: {
    paddingVertical: 20,
    alignItems: 'center',
    marginBottom: 10,
  },
  logo: {
    width: 80, 
    height: 100,
    resizeMode: 'contain', 
  },

  card: {
    width: CARD_SIZE,
    height: CARD_SIZE,
    // Cor de fundo do card no design é o mesmo azul forte, mas podemos usar branco ou um tom mais claro se necessário
    backgroundColor:  '#f2f2f2ff', 
    borderRadius: 15,
    margin: CARD_MARGIN / 2, // Margem para encaixar 3 cards na linha
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    // Sombra sutil para dar profundidade
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3, 
  },
  cardImage: {
    width: '60%', 
    height: '60%', 
    tintColor: '#010101ff', // Os ícones do design são brancos
  },

  cardsGrid: {
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: 15,
  paddingHorizontal: 10,
},

cardItem: {
  width: Dimensions.get("window").width * 0.27,
  height: Dimensions.get("window").width * 0.27,
  backgroundColor: "#FFFFFF",
  borderRadius: 12,
  justifyContent: "center",
  alignItems: "center",
  elevation: 5,
},

cardIcon: {
  width: 45,
  height: 45,
  marginBottom: 8,
  tintColor: "#000"
},

cardTitle: {
  fontSize: 14,
  fontWeight: "600",
  color: "#000",
  textAlign: "center",
},

});


export default BibliotecaScreen;