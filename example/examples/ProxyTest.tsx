import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';

import WebView from 'react-native-webview';

export default function ProxyTest() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Proxy Test</Text>
      <WebView
        source={{ uri: 'https://httpbin.org/ip' }}
        proxy="socks://10.0.2.2:1080"
        incognito={true}
        outboundTargetIp="192.168.0.210"
        style={styles.webview}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  webview: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
  },
});
