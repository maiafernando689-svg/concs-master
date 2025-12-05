import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, SafeAreaView, ScrollView, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { addWhitelistedNativeProps } from 'react-native-reanimated/lib/typescript/ConfigHelper';

const { width } = Dimensions.get('window');

// --- Dados Simulados dos Assuntos da Biblioteca ---
const subjects = [
  { name: 'Gramática', icon: require('../../assets/images/gramatica.png') }, // ⚠ Substitua pelos ícones reais
  { name: 'Matemática', icon: require('../../assets/images/matematica.png') },
  { name: 'Direito', icon: require('../../assets/images/direito.png') },
  { name: 'Apostilas', icon: require('../../assets/images/apostilas.png') },
  { name: 'Conhecimento geral', icon: require('../../assets/images/conhecimento.png') },
  { name: 'Informática', icon: require('../../assets/images/informatica.png') },
  { name: 'História', icon: require('../../assets/images/historia.png') },
  { name: 'Filosofia', icon: require('../../assets/images/filosofia.png') },
  { name: 'Sociologia', icon: require('../../assets/images/sociologia.png') },
  { name: 'Administração', icon: require('../../assets/images/administracao.png') },
  { name: 'Economia', icon: require('../../assets/images/economia.png') },
  { name: 'Lógica', icon: require('../../assets/images/logica.png') },
  { name: 'Inglês', icon: require('../../assets/images/ingles.png') },
  { name: 'Química', icon: require('../../assets/images/quimica.png') },
  { name: 'Literatura', icon: require('../../assets/images/literatura.png') },
];

// --- Componente do Card do Assunto ---
interface SubjectCardProps {
  imageSource: any; 
  onPress: () => void;
  title: string;
}

const SubjectCard: React.FC<SubjectCardProps> = ({ imageSource, onPress, title }) => (
  <TouchableOpacity style={styles.card} onPress={onPress}
  >
    <Image 
      source={imageSource}
      style={styles.cardImage} 
      resizeMode="contain"
    />
    <Text style={styles.cardTitle}>{title}</Text> 
  </TouchableOpacity>
);


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

        {/* 2. Grid de Assuntos */}
        <View style={styles.cardGrid}>
          {subjects.map((subject, index) => (
            <SubjectCard
              key={index}
              imageSource={subject.icon}
              title={subject.name}
              onPress={() => handleSubjectPress(subject.name)}
            />
          ))}
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
  cardGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap', 
    justifyContent: 'center', // Alinha à esquerda
    paddingHorizontal: CARD_MARGIN / 2, // Marge lateral
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
  cardTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#090606ff', // Texto branco para combinar com o fundo azul
    textAlign: 'center',
    marginTop: 5,
  },
});

export default BibliotecaScreen;