import React from 'react';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// Create styles for PDF
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    padding: 30,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 5,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 10,
  },
  basalContainer: {
    flexDirection: 'column',
    marginBottom: 15,
  },
  basalRow: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  basalLabel: {
    fontSize: 12,
    width: 150,
  },
  basalValue: {
    fontSize: 12,
  },
  table: {
    display: 'flex',
    width: 'auto',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#000',
    marginBottom: 10,
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableHeaderCell: {
    backgroundColor: '#2779bd',
    color: '#fff',
    padding: 5,
    fontSize: 10,
    fontWeight: 'bold',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#000',
  },
  tableCell: {
    padding: 5,
    fontSize: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#000',
  },
  colSNo: {
    width: '10%',
  },
  colDrug: {
    width: '30%',
  },
  colBP: {
    width: '20%',
  },
  colHR: {
    width: '20%',
  },
  colRemarks: {
    width: '20%',
  },
});

// Define PDF Document
const ObservationReport = ({ formData }) => {
  // Filter out empty rows (rows where no drug is selected)
  const nonEmptyRows = formData.rows.filter(row => row.drug);
  
  // Renumber the rows consecutively
  const numberedRows = nonEmptyRows.map((row, index) => ({
    ...row,
    displayNumber: index + 1
  }));
  
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>
          EXPERIMENT        Effect of drugs on blood pressure (BP) and heart rate (HR) of dog
        </Text>
        <Text style={styles.subtitle}>(Tutorial Mode)</Text>
        
        <Text style={styles.sectionTitle}>OBSERVATION TABLE</Text>
        
        <View style={styles.basalContainer}>
          <View style={styles.basalRow}>
            <Text style={styles.basalLabel}>Basal HR (bpm):</Text>
            <Text style={styles.basalValue}>{formData.basalHR || ''}</Text>
          </View>
          <View style={styles.basalRow}>
            <Text style={styles.basalLabel}>Basal BP (mmHg):</Text>
            <Text style={styles.basalValue}>{formData.basalBP || ''}</Text>
          </View>
        </View>
        
        <View style={styles.table}>
          {/* Table Headers */}
          <View style={styles.tableRow}>
            <View style={[styles.tableHeaderCell, styles.colSNo]}>
              <Text>S.No</Text>
            </View>
            <View style={[styles.tableHeaderCell, styles.colDrug]}>
              <Text>Drug/Procedure</Text>
            </View>
            <View style={[styles.tableHeaderCell, styles.colBP]}>
              <Text>Mean BP (mm Hg)</Text>
            </View>
            <View style={[styles.tableHeaderCell, styles.colHR]}>
              <Text>HR (beats/min)</Text>
            </View>
            <View style={[styles.tableHeaderCell, styles.colRemarks]}>
              <Text>Remarks</Text>
            </View>
          </View>
          
          {/* Table Rows - only showing non-empty rows */}
          {numberedRows.map((row) => (
            <View style={styles.tableRow} key={row.id}>
              <View style={[styles.tableCell, styles.colSNo]}>
                <Text>{row.displayNumber}</Text>
              </View>
              <View style={[styles.tableCell, styles.colDrug]}>
                <Text>{row.drug || ''}</Text>
              </View>
              <View style={[styles.tableCell, styles.colBP]}>
                <Text>{row.meanBP || ''}</Text>
              </View>
              <View style={[styles.tableCell, styles.colHR]}>
                <Text>{row.hr || ''}</Text>
              </View>
              <View style={[styles.tableCell, styles.colRemarks]}>
                <Text>{row.remarks || ''}</Text>
              </View>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
};

// Helper function to check if there's valid data to show in the report
const hasValidData = (formData) => {
  // Check if there's at least one row with a drug selected
  return formData.rows.some(row => row.drug);
};

// Report Button Component to trigger PDF download
const ReportButton = ({ observationData }) => {
  // Only show the button if there's valid data
  if (!hasValidData(observationData)) {
    return null;
  }
  
  return (
    <PDFDownloadLink
      document={<ObservationReport formData={observationData} />}
      fileName="drug_experiment_observations.pdf"
      className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors"
    >
      {({ blob, url, loading, error }) =>
        loading ? 'Generating PDF...' : 'Download Report'
      }
    </PDFDownloadLink>
  );
};

export { ReportButton, ObservationReport, hasValidData };