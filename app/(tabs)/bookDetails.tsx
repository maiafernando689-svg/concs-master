import React from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { books } from "../../hooks/Data/booksliteratura";

export default function BookDetails() {
  const { id } = useLocalSearchParams();
  const book = books.find((b) => b.id === Number(id));

  if (!book) return <Text>Livro não encontrado.</Text>;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={book.cover} style={styles.cover} />

      <Text style={styles.title}>{book.title}</Text>
      <Text style={styles.author}>{book.author}</Text>

      <Text style={styles.sectionTitle}>Descrição</Text>
      <Text style={styles.text}>{book.description}</Text>

      <Text style={styles.sectionTitle}>Assuntos</Text>
      {book.topics.map((topic, index) => (
        <Text key={index} style={styles.topic}>• {topic}</Text>
      ))}

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Baixar PDF</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
  },
  cover: {
    width: 200,
    height: 300,
    borderRadius: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginTop: 12,
  },
  author: {
    fontSize: 16,
    color: "#666",
  },
  sectionTitle: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "flex-start",
  },
  text: {
    fontSize: 14,
    marginTop: 8,
    color: "#555",
  },
  topic: {
    fontSize: 14,
    alignSelf: "flex-start",
    marginLeft: 10,
    color: "#444",
  },
  button: {
    backgroundColor: "#007bff",
    padding: 12,
    borderRadius: 10,
    marginTop: 30,
    width: "90%",
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});