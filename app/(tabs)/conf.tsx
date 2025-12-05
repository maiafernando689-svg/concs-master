import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  Image, 
  Alert 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router'; 

// --- Cores do Projeto ---
const BLUE_BG = '#28A2D9';
const BLUE_LIGHT = '#A9D6E5'; // Um azul claro para os botões

// --- Componente de Item da Lista de Configuração ---
interface SettingsItemProps {
  iconSource: any; // Fonte da imagem do ícone
  title: string;
  onPress: () => void;
  isLogout?: boolean;
}

const SettingsItem: React.FC<SettingsItemProps> = ({ iconSource, title, onPress, isLogout = false }) => (
  <TouchableOpacity 
    style={[styles.button, isLogout && styles.logoutButton]} 
    onPress={onPress}
  >
    <View style={styles.buttonContent}>
      <Image 
        source={iconSource} 
        style={[styles.buttonIcon, isLogout && styles.logoutIcon]} 
        resizeMode="contain" 
      />
      <Text style={[styles.buttonText, isLogout && styles.logoutText]}>{title}</Text>
    </View>
  </TouchableOpacity>
);


// --- Componente Principal da Tela de Configurações ---
const ConfiguracoesScreen: React.FC = () => {
  const router = useRouter();
  
  // Função para simular o Logout
  const handleLogout = () => {
    Alert.alert(
      'Sair do Aplicativo',
      'Você tem certeza que deseja sair?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Sair',
          onPress: () => {
            // Limpa o histórico e volta para a tela raiz (Login ou Onboarding)
            router.replace('/(tabs)/login'); 
          },
        },
      ],
      { cancelable: true }
    );
  };

  const handlePress = (item: string) => {
    // Aqui você adicionaria router.push('alguma-tela')
Alert.alert('Ação', `Você clicou em: ${item}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      
      {/* Imagem do Cabeçalho (Logo) */}
      <View style={styles.header}>
        <Image 
          source={require('../../assets/images/athena.png')} 
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* Título da Página */}
      <Text style={styles.pageTitle}>Configurações</Text>

      {/* Opções de Configuração */}
      <View style={styles.optionsContainer}>
        
        {/* Conta */}
        <SettingsItem
          iconSource={require('../../assets/images/usuario-icon.png')} 
          title="Conta"
          onPress={() => handlePress('Conta')}
        />
        
        {/* Privacidade e Segurança */}
        <SettingsItem
          iconSource={require('../../assets/images/esculdo-icon.png')} 
          title="Privacidade e Segurança"
          onPress={() => handlePress('Privacidade e Segurança')}
        />

        {/* Ajuda e Suporte */}
        <SettingsItem
          iconSource={require('../../assets/images/ajuda-icon.png')} 
          title="Ajuda e Suporte"
          onPress={() => handlePress('Ajuda e Suporte')}
        />

        {/* Sair (Logout) - Usa a flag isLogout para aplicar o estilo diferenciado */}
        <SettingsItem
          iconSource={require('../../assets/images/sair-icon.png')} 
          title="Sair"
          onPress={handleLogout} 
          isLogout={true} 
        />
      </View>
      
      {/* Espaçador (para empurrar o conteúdo para o topo) */}
      <View style={styles.spacer} />

    </SafeAreaView>
  );
};

// --- Estilos da Tela ---
const LOGOUT_RED = '#FF6347'; // Cor de destaque para o botão Sair

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BLUE_BG, 
  },
  header: {
    padding: 20,
    alignItems: 'center',
    marginBottom: 10,
  },
  logo: {
    width: 80,
    height: 80,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 30,
    textTransform: 'uppercase',
  },
  optionsContainer: {
    paddingHorizontal: 20,
    width: '100%',
  },
  button: {
    width: '100%',
    backgroundColor: BLUE_LIGHT,
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  // Estilos para o botão Sair
  logoutButton: {
    backgroundColor: LOGOUT_RED,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonIcon: {
    width: 24,
    height: 24,
    marginRight: 15,
    tintColor: '#333', 
  },
  // Cor do ícone de Sair
  logoutIcon: {
    tintColor: '#fff', 
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  // Cor do texto de Sair
  logoutText: {
    color: '#fff', 
    fontWeight: 'bold',
  },
  spacer: {
    flex: 1,
  },
});

export default ConfiguracoesScreen;