import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Book } from "../hooks/Data/books";

interface Props {
  book: Book;
  onPress: () => void;
}

export default function BookCard({ book, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={book.cover} style={styles.cover} />
      <Text style={styles.title}>{book.title}</Text>
      <Text style={styles.author}>{book.author}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 120,
    margin: 10,
  },
  cover: {
    width: "100%",
    height: 160,
    borderRadius: 8,
  },
  title: {
    fontWeight: "bold",
    fontSize: 14,
    marginTop: 6,
  },
  author: {
    fontSize: 12,
    color: "#555",
  },
});