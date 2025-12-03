import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from 'react-native';

// --- Imagens Locais (REQUEREM AJUSTE DO CAMINHO) ---
// ATENÇÃO: Os 'require' foram substituídos por 0 (zero) para permitir a compilação neste ambiente.
// NO SEU PROJETO REAL, use os 'require' originais.
const LOGO_ATHENA = require('../../assets/images/athena.png'); 
const IMAGE_ENCEJJA = require('../../assets/images/encejja.png'); 
const IMAGE_EDITAL_MG = require('../../assets/images/edital.png'); 
const IMAGE_ENEM = require('../../assets/images/enem_alunos.png'); 
// ----------------------------------------------------

// Altura e largura para responsividade
const { width } = Dimensions.get('window');

// --- Dados Mock para simular a lista de notícias ---
const mockNews = [
  {
    id: 1,
    title: 'BNI: Inscrições abertas para seleção de elaboradores de itens',
    subtitle: 'Prazo de inscrição segue até 5/11. Classificados farão parte da lista de colaboradores do Banco Nacional de Itens do Encceja',
    image: IMAGE_ENCEJJA,
  },
  {
    id: 2,
    title: 'Edital Polícia Penal MG anunciado',
    subtitle: 'Vagas para agentes de segurança penitenciária. Confira mais detalhes do Edital',
    image: IMAGE_EDITAL_MG,
    styleType: 'dark', // Estilo de card invertido (fundo escuro)
  },
  {
    id: 3,
    title: 'Enem 2025: inscrições serão abertas no sábado',
    subtitle: 'As inscrições para o Exame Nacional do Ensino Médio (Enem) começarão no próximo sábado, 2 de maio.',
    image: IMAGE_ENEM,
    styleType: 'dark', // Estilo de card invertido (fundo escuro)
  },
];



// --- Componente de Card de Notícia ---
interface NewsCardProps {
  title: string;
  subtitle: string;
  image: any; // Tipo para require (number)
  styleType?: 'light' | 'dark';
}

const NewsCard: React.FC<NewsCardProps> = ({ title, subtitle, image, styleType = 'light' }) => {
  const isDark = styleType === 'dark';
  const cardBackgroundColor = isDark ? '#28A2D9' : '#FFFFFF'; // Azul ConcursoJá ou Branco
  const titleColor = isDark ? '#FFFFFF' : '#333333';
  const subtitleColor = isDark ? '#E0E0E0' : '#666666';

  return (
    <TouchableOpacity 
      activeOpacity={0.8} 
      style={[
        styles.cardBase, // Estilos de sombra e borda comuns
        isDark ? styles.cardDarkLayout : styles.cardLightLayout, // Layout (horizontal ou vertical)
        { backgroundColor: cardBackgroundColor },
      ]}
    >
      
      {/* Container da Imagem */}
      <View style={isDark ? styles.darkImageContainer : styles.imageContainer}>
          <Image 
            source={image} 
            style={isDark ? styles.darkImage : styles.lightImage} 
            resizeMode="cover"
          />
      </View>
      
      {/* Texto da Notícia */}
      <View style={styles.textContainer}>
        <Text style={[styles.cardTitle, { color: titleColor }]}>{title}</Text>
        <Text style={[styles.cardSubtitle, { color: subtitleColor }]}>{subtitle}</Text>
      </View>
    </TouchableOpacity>
  );
};


// --- Componente Principal da Tela ---
export default function ConcursosScreen() {
  return (
    <View style={styles.screenContainer}>
      
      {/* 1. Cabeçalho (Fundo Azul Claro) */}
      <View style={styles.header}>
        <Image 
          source={LOGO_ATHENA} 
          style={styles.logo} 
          resizeMode="contain" 
        />
      </View>

      {/* 2. Lista de Notícias */}
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {mockNews.map((news) => (
          <NewsCard 
            key={news.id}
            title={news.title}
            subtitle={news.subtitle}
            image={news.image}
            styleType={news.styleType as 'light' | 'dark'}
          />
        ))}
        {/* Adiciona um padding extra no final para não esconder o último item atrás da Tab Bar */}
        <View style={{ height: 100 }} />
      </ScrollView>

      {/* 3. Simulação da Tab Bar (Fixo na parte inferior - Use a sua implementação real) */}
      <View style={styles.tabBarPlaceholder}>
          <Text style={styles.tabBarText}>Barra de Navegação (Tab Bar)</Text>
      </View>
    </View>
  );
}


// --- Estilos ---
const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#F5F5F5', // Fundo cinza claro
  },
  
  // 1. Estilos do Cabeçalho
  header: {
    backgroundColor: '#28A2D9', // Azul ConcursoJá
    paddingTop: 50, // Ajuste conforme a StatusBar
    paddingBottom: 20,
    alignItems: 'center',
  },
  logo: {
    width: 60,
    height: 60,
    marginBottom: 5,
  },
  
  // 2. Estilos da Lista (ScrollView)
  scrollViewContent: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  
  // Estilo BASE do Card (Comum para todos, sem layout de flexbox)
  cardBase: {
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },

  // Layout para Card CLARO (Imagem no Topo, Texto Abaixo)
  cardLightLayout: {
    flexDirection: 'column',
    // O padding é interno no textContainer para este layout
  },
  
  // Layout para Card ESCURO (Horizontal, Imagem e Texto Lado a Lado)
  cardDarkLayout: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16, // Padding aplicado aqui, pois não há imagem de largura total
  },
  
  // Imagens para o Card CLARO
  imageContainer: {
    width: '100%',
    height: 200, // Altura da imagem de topo
    overflow: 'hidden',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  lightImage: {
    width: '100%',
    height: '100%',
  },
  
  // Texto e layout para o Card Claro
  textContainer: {
    padding: 16, // O padding no card claro vai no texto
    flex: 1, // Garante que o texto ocupe o espaço restante no layout escuro (horizontal)
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 14,
    lineHeight: 20,
  },
  
  // Estilos para o Card ESCURO (Imagem Lateral)
  darkImageContainer: {
    // Para o card escuro, a imagem e o texto ficam lado a lado
    width: 80, // Largura da área da imagem no card escuro
    height: 80,
    borderRadius: 8,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
    flexShrink: 0,
    overflow: 'hidden',
  },
  darkImage: {
    width: '90%',
    height: '90%',
  },
  
  // 3. Estilos da Tab Bar (Apenas Placeholder)
  tabBarPlaceholder: {
      position: 'absolute',
      bottom: 0,
      width: width,
      height: 60, 
      backgroundColor: '#FFFFFF',
      borderTopWidth: 1,
      borderTopColor: '#E0E0E0',
      justifyContent: 'center',
      alignItems: 'center',
  },
  tabBarText: {
      fontSize: 12,
      color: '#666',
  }
});