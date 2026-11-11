import {useState } from "react";
import { Text, View, StyleSheet, Pressable, TextInput, FlatList } from "react-native";

type Todo = {
  id: string;
  title: string;
  done: boolean;
};

export default function Todos() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = () => {
    if (!text.trim()) return;
    setTodos([...todos, { id: Date.now().toString(), title: text.trim(), done: false }]);
    setText("");
  };


  const toggleTodo = (id: string) => {
    setTodos(todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  const deleteTodo = (id: string) => setTodos(todos.filter((t) => t.id !== id));

  return (
    <View style={styles.container}>
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Add a task"
          value={text}
          onChangeText={setText}
          onSubmitEditing={addTodo}
          placeholderTextColor={"white"}
        />
        <Pressable style={styles.addButton} onPress={addTodo}>
          <Text style={styles.addText}>Add</Text>
        </Pressable>
      </View>

      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Pressable style={{flex: 1}} onPress={() => toggleTodo(item.id)}>
              <Text style={[styles.title, item.done && styles.done]}>
                {item.title}
              </Text>
            </Pressable>
            <Pressable onPress={() => deleteTodo(item.id)}>
              <Text style={styles.delete}>Delete</Text>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 60 },
  inputRow: { flexDirection: "row", gap: 8, marginBottom: 16 },
  input: { flex: 1, borderWidth: 1, borderColor: "#ccc", borderRadius: 8, padding: 10, color: "white" },
  addButton: { backgroundColor: "#2563eb", paddingHorizontal: 16, justifyContent: "center", borderRadius: 8 },
  addText: { color: "white", fontWeight: "600" },
  item: { flexDirection: "row", alignItems: "center", paddingVertical: 12, borderBottomWidth: 1, borderColor: "#eee" },
  title: { fontSize: 16, color: "white" },
  done: { textDecorationLine: "line-through", color: "#999" },
  delete: { color: "#c00", fontSize: 18, paddingLeft: 12 },
});