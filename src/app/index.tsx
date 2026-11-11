import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const userName = "Your name";

const stats = [
  { label: "Today", count: 5, bg: "#E9E7F7" },
  { label: "Schedule", count: 7, bg: "#FDEBE1" },
  { label: "Projects", count: 3, bg: "#DDF1FB" },
  { label: "All Task", count: 15, bg: "#E1F5EA" },
];

const projects = [
  { id: "1", title: "Website UI UX design", date: "10 Dec 2021", tasks: 2, subTasks: 2 },
  { id: "2", title: "Mobile app redesign", date: "12 Dec 2021", tasks: 4, subTasks: 1 },
];

export default function Home() {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <View>
          <Text style={styles.welcome}>Welcome</Text>
          <Text style={styles.name}>{userName}</Text>
        </View>
        <Pressable style={styles.bell}>
          <Ionicons name="notifications-outline" size={22} color="#111" />
        </Pressable>
      </View>

      <Text style={styles.sectionTitle}>Overview</Text>
      <View style={styles.grid}>
        {stats.map((s) => (
          <Pressable key={s.label} style={[styles.card, { backgroundColor: s.bg }]}>
            <Text style={styles.cardCount}>{s.count}</Text>
            <View style={styles.cardFooter}>
              <Text style={styles.cardLabel}>{s.label}</Text>
              <Ionicons name="chevron-forward" size={16} color="#111" />
            </View>
          </Pressable>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Projects</Text>
      {projects.map((p) => (
        <View key={p.id} style={styles.project}>
          <View style={styles.dateChip}>
            <Ionicons name="calendar-outline" size={14} color="#6C47FF" />
            <Text style={styles.dateText}>{p.date}</Text>
          </View>
          <Text style={styles.projectTitle}>{p.title}</Text>
          <Text style={styles.projectMeta}>
            Task: {p.tasks}   Sub-Task: {p.subTasks}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#F4F5FF" },
  content: { padding: 20, paddingTop: 60, paddingBottom: 130 },
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 28 },
  welcome: { color: "#666", fontSize: 14 },
  name: { color: "#111", fontSize: 20, fontWeight: "700" },
  bell: { width: 44, height: 44, borderRadius: 12, backgroundColor: "white", alignItems: "center", justifyContent: "center" },
  sectionTitle: { color: "#111", fontSize: 22, fontWeight: "700", marginBottom: 14 },
  grid: { flexDirection: "row", flexWrap: "wrap", gap: 12, marginBottom: 28 },
  card: { width: "47.5%", borderRadius: 16, padding: 16, height: 100, justifyContent: "space-between" },
  cardCount: { color: "#111", fontSize: 26, fontWeight: "700" },
  cardFooter: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  cardLabel: { color: "#444", fontSize: 13 },
  project: { backgroundColor: "white", borderRadius: 16, padding: 16, marginBottom: 12 },
  dateChip: { flexDirection: "row", alignItems: "center", gap: 6, alignSelf: "flex-start", backgroundColor: "#F1F1F5", paddingHorizontal: 10, paddingVertical: 6, borderRadius: 10, marginBottom: 12 },
  dateText: { color: "#444", fontSize: 12 },
  projectTitle: { color: "#111", fontSize: 17, fontWeight: "700", marginBottom: 6 },
  projectMeta: { color: "#666", fontSize: 13 },
});