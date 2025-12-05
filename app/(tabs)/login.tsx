import React, { useState } from 'react';
import { useRouter } from 'expo-router'; // 👈 Importe o roteador
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
  Image,
} from 'react-native';

// Corrigindo o erro de credenciais_corretas
// Você deve ter a lógica real de validação aqui (ex: chamada de API)
const credenciais_corretas = (email, password) => {
    return email === 'teste@email.com' && password === '123456'; 
};

const LoginScreen = () => {
  const router = useRouter(); // Inicialize o roteador

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // 1. FUNÇÃO PRINCIPAL DE LOGIN (Unindo a lógica)
  const handleLogin = () => {
    // A. Verifica se os campos estão vazios
    if (email === '' || password === '') {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return; // Sai da função se estiver vazio
    }

    // B. Verifica as credenciais (Usando a função mockada acima)
    if (credenciais_corretas(email, password)) {
      console.log('Login bem-sucedido. Navegando para Home...');
      Alert.alert('Sucesso', `Login realizado com: ${email}`);

      // 🚀 NAVEGAÇÃO PARA A HOME
      // Certifique-se de que a tela Home está acessível em /home
      router.replace('/home'); 

    } else {
      Alert.alert('Erro', 'Credenciais inválidas. Tente novamente.');
      setPassword(''); // Limpa a senha em caso de erro
    }
  };
  
  // 2. FUNÇÃO DE CADASTRO (Mantida)
  const handleSignUp = () => {
    // 💡 Você usaria router.push('/signup') aqui
    Alert.alert('Cadastro', 'Navegar para tela de cadastro.');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* LOGO */}
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/images/athena.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.logoText}>Concursojá</Text>
        </View>

        {/* FORMULÁRIO */}
        <View style={styles.formContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Text style={styles.label}>Senha</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <TouchableOpacity style={styles.forgotPassword} onPress={() => router.push('/(tabs)/senha')}>
            <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.loginButton} onPress={() => handleLogin()}>
            <Text style={styles.loginButtonText}>Entrar</Text>
          </TouchableOpacity>

          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>Não tem conta? </Text>
            <TouchableOpacity onPress={handleSignUp}>
              <Text style={styles.signupLink}>Cadastre-se</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28A2D9',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 10,
  },
  logoText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
  formContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#cfdee66e',
  },
  forgotPassword: {
    alignItems: 'flex-end',
    marginTop: 10,
  },
  forgotPasswordText: {
    color: '#007bffb0',
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: '#007bff93',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  signupText: {
    fontSize: 14,
    color: '#666',
  },
  signupLink: {
    color: '#007AFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default LoginScreen;


