import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  TextInput, 
  TouchableOpacity, 
  ScrollView,
  Image,
} from 'react-native';
import { Feather } from '@expo/vector-icons'; // Usaremos um ícone do Expo

const BLUE_BG = '#28A2D9'; 
const WHITE_BG = '#fff';

// --- Dados Simulados para os Resultados ---
const searchResults = [
  { id: 1, title: 'Concurso PM', link: 'Concurso PM' },
  { id: 2, title: 'Concurso Bombeiros', link: 'Concurso Bombeiros' },
  { id: 3, title: 'Concurso BB', link: 'Concurso BB' },
  { id: 4, title: 'Encceja 2025', link: 'Encceja 2025' },
];

// --- Componente para Item de Resultado ---
interface ResultItemProps {
  title: string;
  onPress: () => void;
}

const ResultItem: React.FC<ResultItemProps> = ({ title, onPress }) => (
  <TouchableOpacity style={styles.resultItem} onPress={onPress}>
    {/* Ícone de seta apontando para cima/direita, como no design */}
    <Feather name="arrow-up-right" size={18} color={BLUE_BG} style={styles.resultIcon} />
    <Text style={[styles.resultText, title === 'Concurso Bombeiros' && styles.highlightedText]}>
      {title}
    </Text>
  </TouchableOpacity>
);


// --- Componente Principal da Tela de Pesquisa ---
const PesquisaScreen: React.FC = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    console.log('Pesquisando por:', searchText);
    // Lógica real de busca seria adicionada aqui
  };

  const handleResultPress = (title: string) => {
    console.log('Navegar para detalhes de:', title);
    // router.push(`/concurso/${title}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      
      {/* 1. Barra de Pesquisa */}
      <View style={styles.searchBarContainer}>
        {/* Logo (opcional, se quiser manter como no design image_ff63ac.png) */}
        <Image 
          source={require('../../assets/images/athena.png')} 
          style={styles.smallLogo}
          resizeMode="contain"
        />
        
        {/* Input de Texto */}
        <TextInput
          style={styles.searchInput}
          placeholder="Pesquisar concursos..."
          placeholderTextColor="#aaa"
          value={searchText}
          onChangeText={setSearchText}
          onSubmitEditing={handleSearch}
          returnKeyType="search"
        />

        {/* Botão de Busca (Ícone de Lupa) */}
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Feather name="search" size={24} color={WHITE_BG} />
        </TouchableOpacity>
      </View>

      {/* 2. Conteúdo e Resultados */}
      <ScrollView style={styles.contentContainer} contentContainerStyle={styles.scrollContent}>
        
        {/* Lista de Sugestões/Resultados */}
        {searchText === '' && searchResults.map(item => (
          <ResultItem
            key={item.id}
            title={item.title}
            onPress={() => handleResultPress(item.title)}
          />
        ))}

        {/* Aqui viriam os resultados filtrados se houvesse lógica de busca */}
        
      </ScrollView>
      
      {/* A Bottom Tab Bar será renderizada automaticamente pelo _layout.tsx */}
    </SafeAreaView>
  );
};

// --- Estilos da Tela ---
const SEARCH_HEIGHT = 50;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE_BG, // Fundo branco na área de resultados
  },
  searchBarContainer: {
    backgroundColor: BLUE_BG,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  smallLogo: {
    width: 30, 
    height: 60,
    marginRight: 10,
    marginTop: 30,
    // O logo original é azul sobre branco. Se necessário, use tintColor: '#333' se o logo fosse branco.
  },
  searchInput: {
    flex: 1,
    backgroundColor: WHITE_BG,
    borderRadius: 25,
    paddingHorizontal: 15,
    height: SEARCH_HEIGHT,
    fontSize: 16,
    color: '#333',
    // O input tem a largura expandida, tomando o espaço entre a logo e o botão de busca
    marginRight: 10, 
    marginTop: 30,
  },
  searchButton: {
    width: SEARCH_HEIGHT,
    height: SEARCH_HEIGHT,
    borderRadius: SEARCH_HEIGHT / 2,
    backgroundColor: BLUE_BG, // A lupa está sobre o fundo azul
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    // O ícone da lupa deve vir de uma imagem ou de uma biblioteca de ícones
  },
  contentContainer: {
    flex: 1,
    backgroundColor: WHITE_BG,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 80, // Espaço para a tab bar
  },
  // Estilos da Lista de Resultados
  resultItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  resultIcon: {
    marginRight: 10,
  },
  resultText: {
    fontSize: 16,
    color: '#333',
  },
  highlightedText: {
    color: BLUE_BG, // Cor azul para o link, como em "Concurso Bombeiros"
    textDecorationLine: 'underline',
  }
});

export default PesquisaScreen;