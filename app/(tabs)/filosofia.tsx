import React, { useState } from "react";
import { View, Text, TextInput, FlatList, StyleSheet } from "react-native";
import BookCard from "../../components/BookCard";
import { books } from "../../hooks/Data/booksfilosofia";
import { useRouter } from "expo-router";

export default function LibraryScreen() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const filteredBooks = books.filter((b) =>
    b.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Biblioteca</Text>

      <TextInput
        style={styles.input}
        placeholder="Buscar livro..."
        value={search}
        onChangeText={setSearch}
      />

      <FlatList
        data={filteredBooks}
        numColumns={3}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <BookCard
            book={item}
            onPress={() => router.push(`../../=${item.id}`)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 28,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#ececec",
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
});