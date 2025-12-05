import { router } from 'expo-router';
import React, { useState } from 'react';
import { 
    View, Text, StyleSheet, TouchableOpacity, TextInput, 
    SafeAreaView, Dimensions, ActivityIndicator 
} from 'react-native';
// Se estiver usando Expo Router (como no seu código anterior), mantenha esta linha:
// import { useRouter } from 'expo-router'; 
// Se não estiver usando o Expo Router, remova a linha acima e o "router"

// Substituindo 'lucide-react-native' por 'react-native-vector-icons/Feather' 
// para garantir a compatibilidade com ambientes que não suportam o Lucide nativamente.
import Feather from 'react-native-vector-icons/Feather'; 

const { width } = Dimensions.get('window');

const BLUE_BG = '#28A2D9';
const CARD_BG = '#FFFFFF'; // Fundo do formulário branco
const PRIMARY_COLOR = '#28A2D9'; // Cor do botão principal
const TEXT_COLOR_DARK = '#090606';
const ERROR_COLOR = '#dc2626'; // Vermelho
const SUCCESS_COLOR = '#16a34a'; // Verde

// Componente para a tela de Esqueci a Senha
const SenhaScreen: React.FC = () => {
    // const router = useRouter(); // Descomente se estiver usando Expo Router
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    // Função que simula o envio do e-mail de recuperação
    const handleResetPassword = () => {
        setMessage('');
        setIsSuccess(false);
        
        // 1. Validação simples
        if (!email.includes('@') || !email.includes('.')) {
            setMessage('Por favor, insira um e-mail válido.');
            return;
        }

        setLoading(true);

        // 2. Simulação da chamada de API (Substituir pela sua função de Firebase/Auth)
        // Por exemplo: await sendPasswordResetEmail(auth, email);
        setTimeout(() => {
            setLoading(false);

            // Simulação de sucesso
            setMessage('Link de redefinição enviado! Verifique sua caixa de entrada.');
            setIsSuccess(true);
            
            // Opcional: Limpar o campo de e-mail após sucesso
            // setEmail('');

        }, 2500);
    };

    // Componente de Mensagem de Feedback
    const FeedbackMessage: React.FC<{ text: string; success: boolean }> = ({ text, success }) => {
        if (!text) return null;

        return (
            <View style={[
                styles.messageContainer, 
                { backgroundColor: success ? SUCCESS_COLOR : ERROR_COLOR }
            ]}>
                {success ? 
                    <Feather name="check-circle" color={CARD_BG} size={20} style={styles.messageIcon} /> : 
                    <Feather name="alert-triangle" color={CARD_BG} size={20} style={styles.messageIcon} />
                }
                <Text style={styles.messageText}>{text}</Text>
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                
                {/* Botão de Voltar (simulando navegação) */}
                <TouchableOpacity 
                    style={styles.backButton}
                    onPress={() => router.push("/(tabs)/login")} // router.back() se estiver usando Expo Router
                    hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                >
                    <Feather name="arrow-left" color={CARD_BG} size={24} />
                    <Text style={styles.backButtonText}>Login</Text>
                </TouchableOpacity>

                {/* Card Principal */}
                <View style={styles.card}>
                    
                    {/* Título */}
                    <Text style={styles.title}>Esqueceu sua Senha?</Text>
                    
                    {/* Subtítulo */}
                    <Text style={styles.subtitle}>
                        Insira seu e-mail para receber um link de redefinição.
                    </Text>

                    {/* Campo de E-mail */}
                    <View style={styles.inputContainer}>
                        <Feather name="mail" color="#888" size={20} style={styles.inputIcon} />
                        <TextInput
                            style={styles.input}
                            placeholder="Seu e-mail cadastrado"
                            placeholderTextColor="#888"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            value={email}
                            onChangeText={setEmail}
                            editable={!loading}
                        />
                    </View>

                    {/* Mensagem de Feedback */}
                    <FeedbackMessage text={message} success={isSuccess} />

                    {/* Botão de Envio */}
                    <TouchableOpacity
                        style={[styles.button, loading && styles.buttonDisabled]}
                        onPress={handleResetPassword}
                        disabled={loading}
                    >
                        {loading ? (
                            <ActivityIndicator color={CARD_BG} />
                        ) : (
                            <Text style={styles.buttonText}>Redefinir Senha</Text>
                        )}
                    </TouchableOpacity>
                </View>

                {/* Link de Retorno */}
                <TouchableOpacity>
                    <Text style={styles.bottomLinkText}>
                        Lembrou sua senha? <Text style={styles.bottomLinkUnderline} onPress={() => router.push("/(tabs)/login")}>Faça Login</Text>
                    </Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    );
};
  
// --- Estilos ---
const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: BLUE_BG,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    backButton: {
        position: 'absolute',
        top: 50, // Ajuste para SafeAreaView
        left: 20,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
    },
    backButtonText: {
        color: CARD_BG,
        fontSize: 16,
        fontWeight: '600',
        marginLeft: 4,
    },
    card: {
        width: '100%',
        maxWidth: 400,
        backgroundColor: CARD_BG,
        padding: 30,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 8,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
        color: PRIMARY_COLOR,
    },
    subtitle: {
        textAlign: 'center',
        color: '#6b7280', // gray-500
        marginBottom: 25,
        fontSize: 14,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#d1d5db', // gray-300
        borderRadius: 12,
        paddingHorizontal: 15,
        marginBottom: 20,
        backgroundColor: CARD_BG,
    },
    inputIcon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        height: 50,
        color: TEXT_COLOR_DARK,
        fontSize: 16,
    },
    button: {
        backgroundColor: PRIMARY_COLOR,
        paddingVertical: 14,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    buttonDisabled: {
        backgroundColor: '#9ca3af', // gray-400
    },
    buttonText: {
        color: CARD_BG,
        fontSize: 18,
        fontWeight: 'bold',
    },
    messageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
        borderRadius: 8,
        marginBottom: 15,
    },
    messageIcon: {
        marginRight: 10,
    },
    messageText: {
        color: CARD_BG,
        fontSize: 14,
        fontWeight: '500',
        flexShrink: 1,
    },
    bottomLinkText: {
        marginTop: 20,
        color: CARD_BG,
        fontSize: 14,
    },
    bottomLinkUnderline: {
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
});

export default SenhaScreen;