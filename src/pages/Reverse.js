import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import ReverseForm from '../components/ReverseForm';
import ResultTable from '../components/ResultTable';
import useReverseGeocoding from '../hooks/useReverseGeocoding'
import styles from './Reverse.module.css'
import Donate from '../components/Donate';

export default function Reverse() {
  const {
    onCommit,
    onDelete,
    onClear,
    onStop,
    result,
    isWorking,
  } = useReverseGeocoding()
  return (
    <div>
      <Header />
      <div className={styles.content}>
        <h1>经纬度转地址</h1>
        <div className={styles.block}>
          <ReverseForm
            onCommit={onCommit}
            onStop={onStop}
            isWorking={isWorking}
          /> 
        </div>
        <h2>转换结果</h2>
        <div className={styles.block}>
          <ResultTable
            type="reverse"
            onDelete={onDelete}
            onClear={onClear}
            result={result}
            isWorking={isWorking}
          />
        </div>
      </div>
      <Footer />
      <Donate />
    </div>
  )
}
