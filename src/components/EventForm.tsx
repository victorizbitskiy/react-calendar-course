import { Button, DatePicker, Form, Input, Row, Select } from "antd";
import { FC, useState } from "react";
import { rules } from "../utils/rules";
import type { SelectProps } from "antd";
import { IUser } from "../models/IUser";
import { IEvent } from "../models/IEvent";

interface EventFormProps {
  guests: IUser[];
}

const EventForm: FC<EventFormProps> = (props) => {
  const options: SelectProps["options"] = [];

  props.guests.map((quest) =>
    options.push({
      label: quest.username,
      value: quest.username,
    })
  );

  // const handleChange = (value: string[]) => {
  //   console.log(`selected ${value}`);
  // };
  const [event, setEvent] = useState<IEvent>({
    author: "",
    date: "",
    description: "",
    guest: "",
  } as IEvent);

  return (
    <Form>
      <Form.Item
        label="Описание события"
        name="description"
        rules={[rules.required()]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="Дата события" name="date" rules={[rules.required()]}>
        <DatePicker />
      </Form.Item>
      <Form.Item
        label="Выберите гостя"
        name="guest"
        rules={[rules.required()]}
      >
        <Select
          mode="multiple"
          allowClear
          style={{ width: "100%" }}
          placeholder="Please select"
          onChange={(guest: string) => {setEvent({...event, guest})}}
          options={options}
        ></Select>
      </Form.Item>
      <Row justify="end">
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Создать
          </Button>
        </Form.Item>
      </Row>
    </Form>
  );
};

export default EventForm;
