import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from 'react-native';

// --- Imagem Local (REQUER AJUSTE DO CAMINHO) ---
// ATENÇÃO: Substituído por 0 (zero) para permitir a compilação neste ambiente.
const LOGO_ATHENA =  require('../../assets/images/athena.png'); 
// ----------------------------------------------------

const { width } = Dimensions.get('window');

// --- Dados e Funções de Simulação do Calendário ---

// Nomes dos dias da semana
const DAYS_OF_WEEK = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

// Tipo para os dados de um dia
interface Day {
  day: number;
  isToday: boolean;
  hasEvent: boolean; // Simula a existência de um evento (ex: edital)
}

// Tipo para os dados de um mês
interface MonthData {
  name: string;
  year: number;
  days: Day[];
}

/**
 * Gera um array de objetos Day para simular um mês.
 * @param startDayOfWeek O dia da semana em que o dia 1 do mês cai (0=Dom, 6=Sáb).
 * @param numDays O número total de dias no mês.
 * @param monthIndex O índice do mês (para simular eventos).
 */
const generateMonthData = (monthName: string, year: number, startDayOfWeek: number, numDays: number, monthIndex: number): MonthData => {
  const days: Day[] = [];
  
  // Adiciona células vazias para o preenchimento inicial (antes do dia 1)
  for (let i = 0; i < startDayOfWeek; i++) {
    days.push({ day: 0, isToday: false, hasEvent: false });
  }

  // Adiciona os dias do mês
  for (let i = 1; i <= numDays; i++) {
    // const dayOfWeek = (startDayOfWeek + i - 1) % 7; // Não usado no momento
    let hasEvent = false;

    // Simulação de Eventos (Ex: dias 7, 15, 23 têm eventos)
    if (i === 7 || i === 15 || i === 23) {
      hasEvent = true;
    }

    // O primeiro mês (index 0) simula que o dia 10 é "hoje"
    const isToday = (monthIndex === 0 && i === 10); 

    days.push({ 
      day: i, 
      isToday: isToday, 
      hasEvent: hasEvent
    });
  }

  return { name: monthName, year, days };
};

// Dados Mock do Calendário, baseados na imagem (Dez 2025, Jan 2026, Fev 2026)
const calendarData: MonthData[] = [
  // Dezembro 2025 (Começa em uma Segunda-feira, dia 1. startDayOfWeek = 1)
  generateMonthData('Dezembro', 2025, 1, 31, 0), 
  // Janeiro 2026 (Começa em uma Quinta-feira, dia 1. startDayOfWeek = 4)
  generateMonthData('Janeiro', 2026, 4, 31, 1),
  // Fevereiro 2026 (Começa em um Domingo, dia 1. startDayOfWeek = 0)
  generateMonthData('Fevereiro', 2026, 0, 28, 2),
];

// --- Componente do Mês ---

interface CalendarMonthProps {
  monthData: MonthData;
}

const CalendarMonth: React.FC<CalendarMonthProps> = ({ monthData }) => {
  // O calendário tem 7 colunas (dias da semana)
  const columns = 7;
  // Calcula o número de linhas necessárias (incluindo o cabeçalho do dia)
  const numRows = Math.ceil(monthData.days.length / columns);

  // Divide o array de dias em linhas para renderização
  const rows = [];
  for (let i = 0; i < numRows; i++) {
    rows.push(monthData.days.slice(i * columns, (i + 1) * columns));
  }

  return (
    <View style={styles.monthContainer}>
      <Text style={styles.monthTitle}>{monthData.name} {monthData.year}</Text>
      
      {/* Cabeçalho dos Dias da Semana */}
      <View style={styles.weekHeader}>
        {DAYS_OF_WEEK.map((dayName) => (
          <Text key={dayName} style={styles.dayNameText}>{dayName}</Text>
        ))}
      </View>

      {/* Grid de Dias */}
      <View style={styles.daysGrid}>
        {rows.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.weekRow}>
            {row.map((day, dayIndex) => (
              <TouchableOpacity
                key={dayIndex}
                style={[
                  styles.dayCell,
                  // Estilo para destacar dias com eventos
                  day.hasEvent && styles.dayCellEvent,
                  // Estilo para o "Hoje" (simulado)
                  day.isToday && styles.dayCellToday,
                ]}
                disabled={day.day === 0} // Desabilita cliques em células vazias
              >
                <Text style={[
                  styles.dayText,
                  day.day === 0 && { color: 'transparent' }, // Esconde texto de células vazias
                  day.isToday && styles.dayTextToday
                ]}>
                  {day.day > 0 ? day.day : ''}
                </Text>
              </TouchableOpacity>
            ))}
            {/* Preenche a última linha com células vazias se necessário */}
            {row.length < columns && Array(columns - row.length).fill(0).map((_, i) => (
               <View key={`empty-${rowIndex}-${i}`} style={styles.dayCell} />
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};


// --- Componente Principal da Tela ---
export default function CalendarioScreen() {
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

      {/* 2. Lista de Meses */}
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {calendarData.map((monthData, index) => (
          <CalendarMonth key={index} monthData={monthData} />
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
  
  // Estilos do Mês
  monthContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 20,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  monthTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 10,
    textAlign: 'center',
  },

  // Cabeçalho da Semana
  weekHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
    paddingBottom: 5,
  },
  dayNameText: {
    width: width / 7.8, // Largura para cada dia
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 12,
    color: '#666666',
  },

  // Grid de Dias
  daysGrid: {
    // Não precisa de estilo, as linhas e células o definem
  },
  weekRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  dayCell: {
    width: width / 7.8, // Largura igual à do cabeçalho
    height: width / 7.8, // Mantém a proporção quadrada
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  dayCellEvent: {
    backgroundColor: '#E0F7FF', // Fundo azul claro para dias com eventos (simulado)
  },
  dayCellToday: {
    backgroundColor: '#28A2D9', // Fundo azul para o dia atual (simulado)
  },
  dayText: {
    fontSize: 14,
    color: '#333333',
  },
  dayTextToday: {
    fontWeight: 'bold',
    color: '#FFFFFF', // Cor de texto branca para contraste no dia atual
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