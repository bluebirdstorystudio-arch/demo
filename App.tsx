import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar style="dark" />
        <ScrollView contentContainerStyle={styles.content}>
          <View style={styles.header}>
            <View style={styles.logo}><Text style={styles.logoText}>M</Text></View>
            <Text style={styles.brand}>MOBILE APP</Text>
            <View style={styles.badge}><Text style={styles.badgeText}>STARTER</Text></View>
          </View>
          <Text style={styles.eyebrow}>从一个想法开始</Text>
          <Text style={styles.title}>你的下一款 App，{ '\n' }从这里出发。</Text>
          <Text style={styles.subtitle}>一个简洁的起点，留给无限的可能。{ '\n' }现在就开始构建你的手机应用。</Text>
          <View style={styles.hero}>
            <Text style={styles.heroLabel}>HELLO, MOBILE.</Text>
            <Text style={styles.heroTitle}>准备就绪。</Text>
            <Text style={styles.heroDescription}>React Native · Expo · TypeScript</Text>
            <View style={styles.platforms}>
              {['iOS', 'Android', 'Web'].map((name) => (
                <View key={name} style={styles.platform}><Text style={styles.platformText}>{name}</Text></View>
              ))}
            </View>
          </View>
          <View style={styles.sectionHeading}>
            <Text style={styles.sectionTitle}>试试交互</Text>
            <Text style={styles.sectionHint}>一个小小的开始</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.counterLabel}>按钮点击次数</Text>
            <Text accessibilityLiveRegion="polite" style={styles.counter}>{count.toString().padStart(2, '0')}</Text>
            <Pressable accessibilityRole="button" accessibilityLabel="增加点击次数" onPress={() => setCount((value) => value + 1)} style={({ pressed }) => [styles.button, pressed && styles.pressed]}>
              <Text style={styles.buttonText}>点击 +1 →</Text>
            </Pressable>
            <Pressable accessibilityRole="button" accessibilityLabel="重置点击次数" onPress={() => setCount(0)} style={styles.reset}>
              <Text style={styles.resetText}>重置计数</Text>
            </Pressable>
          </View>
          <Text style={styles.footer}>编辑 App.tsx，开始创造。{ '\n' }计数仅用于演示，重新打开应用后归零。</Text>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#F5F5EF' },
  content: { padding: 24, paddingBottom: 32, width: '100%', maxWidth: 560, alignSelf: 'center' },
  header: { flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 48 },
  logo: { width: 34, height: 34, borderRadius: 11, backgroundColor: '#183F35', alignItems: 'center', justifyContent: 'center' },
  logoText: { color: '#D4F39A', fontSize: 21, fontWeight: '800' },
  brand: { color: '#183F35', fontSize: 13, fontWeight: '800', letterSpacing: 1 },
  badge: { marginLeft: 'auto', borderWidth: 1, borderColor: '#D8DDD3', borderRadius: 20, paddingHorizontal: 10, paddingVertical: 5 },
  badgeText: { fontSize: 9, color: '#637367', letterSpacing: 1 },
  eyebrow: { color: '#687568', fontSize: 12, letterSpacing: 3, marginBottom: 14 },
  title: { color: '#163E33', fontSize: 32, lineHeight: 44, fontWeight: '700', letterSpacing: -1 },
  subtitle: { color: '#718077', fontSize: 14, lineHeight: 24, marginTop: 14, marginBottom: 28 },
  hero: { backgroundColor: '#193F35', borderRadius: 24, padding: 26 },
  heroLabel: { color: '#C8E8A0', fontSize: 10, letterSpacing: 2 },
  heroTitle: { fontSize: 34, fontWeight: '700', color: '#F8F9EE', marginTop: 28 },
  heroDescription: { color: '#ACC6B6', fontSize: 12, marginTop: 10 },
  platforms: { flexDirection: 'row', gap: 8, marginTop: 28 },
  platform: { borderWidth: 1, borderColor: '#537466', borderRadius: 20, paddingHorizontal: 14, paddingVertical: 6 },
  platformText: { color: '#E8F2DF', fontSize: 11 },
  sectionHeading: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 28, marginBottom: 14 },
  sectionTitle: { fontSize: 17, fontWeight: '700', color: '#193F35' },
  sectionHint: { fontSize: 11, color: '#819084' },
  card: { padding: 22, backgroundColor: '#FFFFFF', borderRadius: 24, borderWidth: 1, borderColor: '#E5E8DE', alignItems: 'center' },
  counterLabel: { color: '#7C887F', fontSize: 12 },
  counter: { color: '#193F35', fontSize: 52, fontWeight: '600', marginVertical: 12, fontVariant: ['tabular-nums'] },
  button: { width: '100%', backgroundColor: '#D1EFA0', borderRadius: 14, minHeight: 50, alignItems: 'center', justifyContent: 'center' },
  pressed: { opacity: 0.7 },
  buttonText: { color: '#173E31', fontSize: 15, fontWeight: '700' },
  reset: { minHeight: 44, justifyContent: 'center', paddingHorizontal: 24, marginTop: 4 },
  resetText: { color: '#728078', fontSize: 12 },
  footer: { color: '#8A958C', fontSize: 11, lineHeight: 20, textAlign: 'center', marginTop: 24 },
});
