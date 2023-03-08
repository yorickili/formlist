import * as React from 'react';
import { Card, Col, Form,Input, Row } from 'tdesign-react';

const Item = (props) => {
  const { name } = props;

  return (
    <Form.FormItem label={name}>
      <Form.FormList name={name}>
        {(fields) => {
          return (
            <Row>
              <Col span={12}>
                {fields.map(({ name: fieldName, key }) => {
                  return (
                    <Card key={key} style={{ margin: '16px 0' }}>
                      <Row gutter={[16, 16]}>
                        <Col span={12}>
                          <Form.FormItem name={[fieldName, 'A']} label="A">
                            <Input />
                          </Form.FormItem>
                          <Form.FormItem name={[fieldName, 'B']} label="B">
                            <Input />
                          </Form.FormItem>
                          <Form.FormItem name={[fieldName, 'C']} label="C">
                            <Input />
                          </Form.FormItem>
                        </Col>
                      </Row>
                    </Card>
                  );
                })}
              </Col>
            </Row>
          );
        }}
      </Form.FormList>
    </Form.FormItem>
  );
};

function App() {
  const [form] = Form.useForm();
  
  React.useEffect(() => {
    const itemValue = { A: 'A', B: 'B', C: 'C' };
    form.setFieldsValue({
      ITEM_1: [itemValue, itemValue],
      ITEM_2: [itemValue, itemValue],
      ITEM_3: [itemValue, itemValue],
      ITEM_4: [itemValue, itemValue],
      ITEM_5: [itemValue, itemValue],
      ITEM_6: [itemValue, itemValue],
      ITEM_7: [itemValue, itemValue],
    });
  }, []);

  return (
    <Form form={form}>
      <Item name="ITEM_1" />
      {/* 数量超过两个个，必现最后一个 FormList 不渲染值 */}
      <Item name="ITEM_2" />
      <Item name="ITEM_3" />
      <Item name="ITEM_4" />
      <Item name="ITEM_5" />
      <Item name="ITEM_6" />
      {/* 数量超过七个，必现 CPU 跑满卡死 */}
      {/* <Item name="ITEM_7" /> */}
    </Form>
  )
}

export default App;
