import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Top Color Background */}
      <View style={styles.headerBg}></View>

      {/* Profile Card */}
      <View style={styles.card}>
        <Image
          source={{ uri: 'https://i.imgur.com/1bX5QH6.png' }} // replace with your image
          style={styles.profileImg}
        />
        <Text style={styles.name}>Shivam</Text>
        <Text style={styles.bio}>Java Developer | Gym | Anime Lover</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
  },
  headerBg: {
    width: '100%',
    height: 220,
    backgroundColor: '#6C63FF', // ⚡ purple gradient base
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    position: 'absolute',
    top: 0,
  },
  card: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    marginTop: 150,
    elevation: 10,
  },
  profileImg: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
    borderWidth: 4,
    borderColor: '#6C63FF',
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#222',
  },
  bio: {
    fontSize: 15,
    color: '#555',
    marginTop: 8,
  },
});