import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// Create styles matching a professional resume format
const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 11,
    fontFamily: 'Helvetica',
    lineHeight: 1.5,
  },
  header: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    paddingBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 5,
    color: '#1a365d',
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
  },
  entry: {
    marginBottom: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bold: {
    fontWeight: 'bold',
  }
});

// Pass your React formData state directly into this component
export function ResumePDF({ formData }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        
        {/* General Info Header */}
        <View style={styles.header}>
          <Text style={styles.title}>{formData.general.name || "Your Name"}</Text>
          <Text>{formData.general.email} | {formData.general.phone}</Text>
        </View>

        {/* Education Section */}
        <View>
          <Text style={styles.sectionTitle}>Education</Text>
          <View style={styles.entry}>
            <View style={styles.row}>
              <Text style={styles.bold}>{formData.education.school}</Text>
              <Text>{formData.education.startDate} - {formData.education.endDate}</Text>
            </View>
            <Text>{formData.education.major}</Text>
          </View>
        </View>

        {/* Work Experience Section */}
        <View>
          <Text style={styles.sectionTitle}>Work Experience</Text>
          <View style={styles.entry}>
            <View style={styles.row}>
              <Text style={styles.bold}>{formData.experience.company}</Text>
              <Text>{formData.experience.startDate} - {formData.experience.endDate}</Text>
            </View>
            <Text style={{ fontStyle: 'italic' }}>{formData.experience.position}</Text>
            <Text>{formData.experience.description}</Text>
          </View>
        </View>

      </Page>
    </Document>
  );
}