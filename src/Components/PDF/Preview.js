import React from 'react'
import { Document, Page, PDFViewer, PDFDownloadLink } from '@react-pdf/renderer'
import LeftSection from './LeftSection'
import { RightSection } from './RightSection'
import styles from '../styles/styles'


const Preview = ({ profile }) => {
  return (
    <div style={{ flexGrow: 1 }}>
      <PDFViewer 
        showToolbar={true}
        style={{
          width: '100%',
          height: '95%',
        }}
      >
        <Template profile={profile} />
      </PDFViewer>
      <PDFDownloadLink
        document={<Template profile={profile} />}
        fileName='somename.pdf'
      >
        {({ loading }) => (loading ? 'Loading document...' : 'Download now!')}
      </PDFDownloadLink>
    </div>
  )
}
// Create Document Component
const Template = ({ profile }) => {
  return (
    
    <Document pdfVersion='' title='Mon 1er doc' author='Moi'  >
        {/* pdfVersion <=1.7 */}
      <Page size='A4' style={styles.page} debug={false}>
        {/* size : 4A0,2A0,A0,A1,A2,A3,A4,A5,A6,A7,A8,A9,A10,B0,B1,B2,B3,B4,B5,B6,B7,B8,B9,B10,C0,C1,C2,C3,C4,C5,C6,C7,C8,C9,C10,RA0,RA1,RA2,RA3,RA4,SRA0,SRA1,SRA2,SRA3,SRA4,EXECUTIVE,FOLIO,LEGAL,LETTER,TABLOID,ID1 */}
        {/* orientation : 'portrait' (default) | 'landscape'  */}
        <LeftSection profile={profile} />
        <RightSection about={profile.about} />
      </Page>
    </Document>
  )
}

export default Preview
