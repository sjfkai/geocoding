import React from 'react'
import { 
  Form, 
  Input, 
  Button, 
  Radio,
  Tooltip,
} from 'antd';


const { TextArea } = Input;

const ReverseForm = ({ onCommit, isWorking }) => {
  const [form] = Form.useForm();

  const onFinish = values => {
    console.log(values);
    onCommit(values)
  };

  return (
    <Form 
      form={form} 
      name="reverse-form" 
      onFinish={onFinish}
      labelCol = {{ lg: 3, sm: 4, xs: 24 }}
      wrapperCol={{ lg: 21, sm: 20, xs: 24 }}
      initialValues={{
        coordtype: 'bd09ll',
      }}
    >
      <Form.Item 
        name="locations" 
        label="经纬度" 
        rules={[
          { required: true, message:'经纬度不能为空' },
          {
            pattern: /^(-?\d+(\.\d*)?,\d+(\.\d*)?(\r\n|\r|\n)?)+$/g,
            message: '格式有误，检查格式',
          }
        ]}>
        <TextArea 
          autoSize={{
            minRows: 2, 
            maxRows: 20,
          }}
          placeholder={"每个地址的经纬度占一行，格式：纬度,经度\n例如：38.76623,116.43213"}
        />
      </Form.Item>
      <Form.Item name="coordtype" label="坐标类型" rules={[{ required: true }]}>
        <Radio.Group>
          <Tooltip title="百度经纬度坐标">
            <Radio.Button value="bd09ll">
              bd09ll
            </Radio.Button>
          </Tooltip>
          <Tooltip title="国测局经纬度坐标，仅限中国">
            <Radio.Button value="gcj02ll">
              gcj02ll
            </Radio.Button>
          </Tooltip>
          <Tooltip title="GPS经纬度">
            <Radio.Button value="wgs84ll">
              wgs84ll
            </Radio.Button>
          </Tooltip>
          <Tooltip title="百度米制坐标">
            <Radio.Button value="bd09mc">
              bd09mc
            </Radio.Button>
          </Tooltip>
        </Radio.Group>
      </Form.Item>
      {/* <Form.Item
        noStyle
        shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
      >
        {({ getFieldValue }) => {
          return getFieldValue('gender') === 'other' ? (
            <Form.Item name="customizeGender" label="Customize Gender" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
          ) : null;
        }}
      </Form.Item> */}
      <Form.Item
        wrapperCol={{ offset: 3 }}
      >
        <Button
          loading={isWorking}
          type="primary" 
          htmlType="submit"
        >
          转换
        </Button>
        {
          isWorking && (
            <Button style={{marginLeft: '10px'}}>
              停止
            </Button>
          )
        }
      </Form.Item>
    </Form>
  );
};

export default ReverseForm
