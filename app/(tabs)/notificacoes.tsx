import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useRouter } from 'expo-router';

const BLUE_BG = '#28A2D9';
const LIGHT_BLUE_CHAT = '#A9D6E5';

// --- Interface para as Notificações ---
interface NotificationItemProps {
  date: string;
  children: React.ReactNode;
}

// --- Componente do Balão de Notificação ---
const NotificationItem: React.FC<NotificationItemProps> = ({ date, children }) => (
  <View style={styles.notificationGroup}>
    <View style={styles.messageBubble}>{children}</View>
    <Text style={styles.dateText}>{date}</Text>
  </View>
);

// --- Componente Principal da Tela de Notificações ---
const NotificacoesScreen: React.FC = () => {
  const router = useRouter();

  const handleLinkPress = () => {
    console.log('Navegar para detalhes da notificação');
    // router.push('/detalhes-notificacao');
  };

  const handleBackPress = () => {
    router.back();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* Header com botão de voltar e logo */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
            <Image source={require('../../assets/images/voltar.png')}/>
          </TouchableOpacity>
          <Image
            source={require('../../assets/images/athena.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        {/* Notificação 1: ENCCEJA */}
        <NotificationItem date="10/09/2025">
          <Text style={styles.bubbleText}>
            <Text style={styles.bubbleTitle}>⚠ Notificação Importante!</Text>{'\n'}
            🔔 Estão abertas as Inscrições para o ENCCEJA – Exame Nacional para Certificação de Competências de Jovens e Adultos.{'\n'}
            🎓 Público-alvo: Jovens e
            <Text style={styles.linkText} onPress={handleLinkPress}> SAIBA MAIS...</Text>
          </Text>
        </NotificationItem>

        {/* Notificação 2: Concurso Público */}
        <NotificationItem date="01/10/2025">
          <Text style={styles.bubbleText}>
            <Text style={styles.bubbleTitle}>⚠ Nova Oportunidade de Concurso!</Text>{'\n'}
            🔥 Saiu o edital do Concurso Público [NOME DO ÓRGÃO]!{'\n'}
            📍 Local: [Estado/Cidade]{'\n'}
            💰 Salários de até R$ 7.500,00{'\n'}
            📚 Nível:
            <Text style={styles.linkText} onPress={handleLinkPress}> SAIBA MAIS...</Text>
          </Text>
        </NotificationItem>

        {/* Notificação 3: Repetição ENCCEJA */}
        <NotificationItem date="15/10/2025">
          <Text style={styles.bubbleText}>
            <Text style={styles.bubbleTitle}>🔔 Notificação Importante!</Text>{'\n'}
            Estão abertas as Inscrições para o ENCCEJA – Exame Nacional para Certificação de Competências de Jovens e Adultos.{'\n'}
            🎓 Público-alvo: Jovens e
            <Text style={styles.linkText} onPress={handleLinkPress}> SAIBA MAIS...</Text>
          </Text>
        </NotificationItem>

        <View style={{ height: 30 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

// --- Estilos ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BLUE_BG,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 80,
  },
  header: {
    paddingVertical: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 0,
    marginTop:50,
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  notificationGroup: {
    width: '100%',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  messageBubble: {
    backgroundColor: LIGHT_BLUE_CHAT,
    borderRadius: 15,
    padding: 15,
    maxWidth: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
  bubbleText: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
  bubbleTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#000',
  },
  linkText: {
    color: BLUE_BG,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  dateText: {
    fontSize: 12,
    color: '#fff',
    marginTop: 5,
    alignSelf: 'flex-start',
  },
});

export default NotificacoesScreen;
