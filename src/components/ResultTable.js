import React, { useMemo, useCallback } from 'react'
import { Table, Button, Popconfirm } from 'antd'
import download from '../utils/download'
import styles from './ResultTable.module.css'


const type2Columns = {
  reverse: [
    {
      title: '序号',
      dataIndex: 'no',
    },
    {
      title: '经纬度',
      dataIndex: 'geoCode',
    }, 
    {
      title: '地址',
      dataIndex: 'formattedAddress',
    },
    {
      title: '地址距离',
      dataIndex: 'distance',
    }, 
    {
      title: '附近POI',
      dataIndex: 'poi',
    }, 
    {
      title: 'POI距离',
      dataIndex: 'poiDistance',
    }, 
    // {
    //   title: '国家',
    //   dataIndex: 'country',
    // },
    // {
    //   title: '省份',
    //   dataIndex: 'province',
    // },
    // {
    //   title: '城市',
    //   dataIndex: 'city',
    // },
    // {
    //   title: '街道',
    //   dataIndex: 'street',
    // },
    // {
    //   title: '街道门牌号',
    //   dataIndex: 'streetNumber',
    // },
    {
      title: '错误',
      dataIndex: 'message',
    },
  ]
}

export default function ResultTable(props) {
  const {
    type,
    onDelete,
    onClear,
    result,
    isWorking,
  } = props

  const columns = useMemo(() => {
    const columns = type2Columns[type] || []
    columns.push({
      title: '操作',
      dataIndex: 'key',
      render: (key) => (
        <Button 
          onClick={() => {onDelete(key)}} 
          type="link"
        >
          删除
        </Button>
      ),
    })
    return columns
  }, [type, onDelete])

  const dataSource = useMemo(() => (
    result.map((row, i) => (
      {
        ...row,
        key: i,
        no: i + 1,
      }
    ))
  ), [result])

  const onDownload = useCallback(() => {
    download({
      type,
      data: result
    })
  }, [type, result])

  return (
    <div className={styles['result-table']}>
      <div className={styles.buttons}>
          <Button 
            type="primary" 
            onClick={onDownload} 
            disabled={isWorking || !result.length} 
          >
            下载
          </Button>
          <Popconfirm
            title="确定要清空转换结果吗?"
            onConfirm={onClear}
            okText="确定"
            cancelText="取消"
            disabled={isWorking || !result.length} 
          >
            <Button 
              type="danger" 
              disabled={isWorking || !result.length} 
            >
              清空
            </Button>
          </Popconfirm>
      </div>
      <Table 
        columns={columns}
        dataSource={dataSource}
        pagination={false}
        loading={isWorking}
      />
    </div>
  )
}
