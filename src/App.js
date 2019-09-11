import React from 'react';
import './App.css';

import { Page, Text, View, Document, StyleSheet, PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

// Create Document Component
const MyPdfDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);


function App() {
  return (
    <div>
      <div>
        <PDFDownloadLink document={<MyPdfDocument />} fileName="somename.pdf">
          {({ _blob, _url, loading, _error }) => (loading ? 'Loading document...' : 'Download now!')}
        </PDFDownloadLink>
      </div>
      <PDFViewer className="viewer">
        <MyPdfDocument />
      </PDFViewer>
    </div>
  );
}

export default App;
