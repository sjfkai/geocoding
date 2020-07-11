import { useState, useCallback } from 'react'
import { getBaiduLocation } from '../services'


let isStop = false
export default function useReverseGeocoding() {
  const [ isWorking, setWorking ] = useState(false)
  const [ result, setResult ] = useState([])

  

  const onCommit = useCallback((data) => {
    async function covertAll({ locations, coordtype }) {
      const geoCodes = locations.split('\n')
      for (const geoCode of geoCodes) {
        if (isStop) {
          console.log('用户停止')
          return
        }
        console.log('转换', geoCode)
        const res = await getBaiduLocation({geoCode, coordtype})
        setResult(prev => [...prev, res])
      }
    }

    setWorking(true)
    isStop = false
    covertAll(data).finally(() => {
      setWorking(false)
    })
  }, [setWorking, setResult])

  const onDelete = useCallback((i) => {
    setResult(prev => {
      const result = [...prev]
      result.splice(i, 1)
      return result
    })
  }, [setResult])

  const onClear = useCallback(() => {
    setResult([])
  }, [setResult])
  
  const onStop = useCallback(() => {
    isStop = true
  }, [])
  return {
    onCommit,
    onDelete,
    onClear,
    onStop,
    result,
    isWorking,
  }
}