import React, { useState } from 'react';
import { 
    View, 
    Text, 
    Image, 
    TouchableOpacity, 
    TextInput, 
    StyleSheet,
    ScrollView, // Usado para permitir o scroll do formulário
} from 'react-native';
// Assumindo que você usa Expo Router ou React Navigation
import { useNavigation } from 'expo-router'; 

// Cores utilizadas na aplicação
const BLUE_BG = '#28A2D9';
const INPUT_BG = '#EAF7F8'; 

const LOGO_ATHENA = require('../../assets/images/athena.png'); 

/**
 * Componente Auxiliar: Input com Label
 * Usa View/Text/TextInput
 */
const LabelledInput = ({ label, value, onChange, isPassword, keyboardType = 'default' }) => {
    // Estilos dinâmicos para simular o 'focus'
    const [isFocused, setIsFocused] = useState(false);
    const borderColor = isFocused ? BLUE_BG : INPUT_BG;

    return (
        <View style={styles.inputGroup}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                style={[styles.input, { borderColor: borderColor, backgroundColor: INPUT_BG }]}
                value={value}
                onChangeText={onChange}
                secureTextEntry={isPassword}
                keyboardType={keyboardType}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholderTextColor="#999"
            />
        </View>
    );
};

/**
 * Componente Auxiliar: Select com Label (Simulado com TextInput e Dropdown Indicator)
 * Nota: Implementação real de Select/Picker é complexa em RN. Usaremos TextInput para simplificar.
 */
const LabelledSelect = ({ label, value, onChange, options }) => {
    // Em um app real, isso seria um Modal ou Picker
    return (
        <View style={styles.inputGroup}>
            <Text style={styles.label}>{label}</Text>
            <TouchableOpacity style={styles.selectContainer} onPress={() => console.log('Abrir Modal/Picker para:', label)}>
                <TextInput
                    style={[styles.input, { backgroundColor: INPUT_BG, paddingRight: 40 }]}
                    value={value}
                    editable={false} // Não permite digitar, apenas selecionar
                />
                {/* Seta do Dropdown (SVG em React Native não é fácil, usamos um Text simples ou ícone) */}
                <Text style={styles.dropdownArrow}>▼</Text>
            </TouchableOpacity>
        </View>
    );
};

/**
 * Componente principal para a tela de criação de nova publicação (Mais).
 */
const Mais = () => {
    const navigation = useNavigation();

    // Estados para simular a entrada do usuário
    const [titulo, setTitulo] = useState('concurso petrobras - 2026');
    const [cnpj, setCnpj] = useState('33.000.167/0001-01');
    const [tipoPublicacao, setTipoPublicacao] = useState('concurso publico');
    const [senha, setSenha] = useState('*********');
    const [images, setImages] = useState([
        { id: 1, url: 'https://placehold.co/80x80/6FCF97/FFFFFF?text=Capa+1' },
        { id: 2, url: 'https://placehold.co/80x80/6FCF97/FFFFFF?text=Capa+2' },
    ]);

    // Função de simulação para a criação da publicação
    const handleCriarPublicacao = () => {
        // Lógica real de submissão de dados (FireStore)
        console.log('--- Submissão de Publicação ---');
        console.log('Publicação criada com sucesso (simulação)!');

        // Navegar de volta ou mostrar sucesso.
        // Alert.alert('Sucesso', 'Publicação criada com sucesso (simulação)!'); 
    };

    // Função para remover uma imagem
    const handleRemoveImage = (id) => {
        setImages(images.filter(img => img.id !== id));
        console.log(`Imagem ${id} removida.`);
    };
    
    // Renderiza os placeholders das imagens
    const renderImages = () => (
        <View style={styles.imageGrid}>
            {images.map(img => (
                <View key={img.id} style={styles.imageWrapper}>
                    <Image source={{ uri: img.url }} style={styles.imagePlaceholder} resizeMode="cover" />
                    <TouchableOpacity 
                        style={styles.removeButton} 
                        onPress={() => handleRemoveImage(img.id)}
                    >
                        <Text style={styles.removeButtonText}>X</Text>
                    </TouchableOpacity>
                </View>
            ))}
            {/* Placeholder para adicionar mais imagens */}
            <TouchableOpacity style={styles.addImageButton} onPress={() => console.log('Abrir seleção de imagem')}>
                 {/* Ícone de Plus simples em Text, substituindo o SVG */}
                <Text style={styles.addImageIcon}>+</Text>
            </TouchableOpacity>
        </View>
    );


    return (
        <ScrollView contentContainerStyle={styles.scrollContainer} style={styles.container}>
            
            {/* Cabeçalho Fixo (Logo) */}
            <View style={styles.headerContainer}>
                {/* CORREÇÃO: Usando o componente <Image> */}
                <Image
                    source={LOGO_ATHENA} 
                    style={styles.logo}
                    resizeMode="contain"
                />
            </View>

            {/* Conteúdo do Formulário */}
            <View style={styles.formContainer}>
                
                <Text style={styles.title}>
                    criar uma nova publicação
                </Text>

                {/* 1. Título */}
                <LabelledInput
                    label="Título da publicação"
                    value={titulo}
                    onChange={setTitulo}
                />

                {/* 2. CNPJ */}
                <LabelledInput
                    label="CNPJ"
                    value={cnpj}
                    onChange={setCnpj}
                    keyboardType="numeric"
                />
                
                {/* 3. Tipo de Publicação (Select) */}
                <LabelledSelect
                    label="Tipo de publicação"
                    value={tipoPublicacao}
                    onChange={setTipoPublicacao}
                    options={['concurso publico', 'processo seletivo', 'noticia']}
                />

                {/* 4. Senha */}
                <LabelledInput
                    label="senha"
                    value={senha}
                    onChange={setSenha}
                    isPassword={true}
                />

                {/* Área de Upload de Imagens */}
                <Text style={styles.label}>Adicione uma imagem para capa</Text>
                {renderImages()}


                {/* Botão Criar */}
                <TouchableOpacity
                    onPress={handleCriarPublicacao}
                    style={styles.createButton}
                >
                    <Text style={styles.createButtonText}>Criar</Text>
                </TouchableOpacity>

            </View>

        </ScrollView> 
    );
};

// ===================================
// STYLESHEET - React Native Styles
// ===================================
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    scrollContainer: {
        paddingBottom: 20, // Padding extra no final para evitar que o teclado cubra o último campo
        alignItems: 'center',
    },
    headerContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 16,
        backgroundColor: '#FFFFFF',
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 5,
        marginBottom: 20, // Espaçamento entre o header e o formulário
    },
    logo: {
        width: 64, 
        height: 64, 
        borderRadius: 32, 
    },
    formContainer: {
        width: '90%',
        maxWidth: 400,
        paddingHorizontal: 10,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333333',
        marginBottom: 24,
        textAlign: 'center',
        textTransform: 'uppercase',
    },
    inputGroup: {
        marginBottom: 16,
    },
    label: {
        fontSize: 14,
        fontWeight: '600',
        color: '#666666',
        marginBottom: 4,
    },
    input: {
        width: '100%',
        padding: 12,
        borderRadius: 12, // rounded-xl
        borderWidth: 2,
        color: '#333',
        fontSize: 16,
    },
    selectContainer: {
        position: 'relative',
        justifyContent: 'center',
    },
    dropdownArrow: {
        position: 'absolute',
        right: 15,
        fontSize: 14,
        color: '#777',
    },
    // Estilos para a área de upload de imagens
    imageGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 16, // Espaçamento entre as imagens
        padding: 16,
        borderRadius: 12,
        backgroundColor: INPUT_BG,
        marginBottom: 32,
        // RN não suporta gap diretamente, mas o flexWrap ajuda.
    },
    imageWrapper: {
        width: 80,
        height: 80,
        borderRadius: 8,
        position: 'relative',
        overflow: 'hidden',
    },
    imagePlaceholder: {
        width: '100%',
        height: '100%',
    },
    removeButton: {
        position: 'absolute',
        top: -5,
        right: -5,
        backgroundColor: 'red',
        borderRadius: 10,
        width: 20,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10,
    },
    removeButtonText: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
    },
    addImageButton: {
        width: 80,
        height: 80,
        borderRadius: 8,
        borderWidth: 2,
        borderStyle: 'dashed',
        borderColor: '#AAAAAA',
        alignItems: 'center',
        justifyContent: 'center',
    },
    addImageIcon: {
        fontSize: 30,
        color: '#AAAAAA',
    },
    // Estilos para o Botão Criar
    createButton: {
        width: '100%',
        paddingVertical: 16,
        backgroundColor: BLUE_BG,
        borderRadius: 16, // rounded-2xl
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: BLUE_BG,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 10,
        elevation: 10, // Para Android
    },
    createButtonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
});

export default Mais;