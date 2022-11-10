import { Button, Layout, Modal, Row } from "antd";
import React, { FC, useState } from "react";
import EventCalendar from "../components/EventCalendar";

const Event: FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <Layout>
      <EventCalendar events={[]} />
      <Row justify="center">
        <Button onClick={() => setModalVisible(true)}>Добавить cобытие</Button>
      </Row>
      <Modal title="Добавить событие" open={modalVisible} footer={null} onCancel={() => setModalVisible(false)}></Modal>
    </Layout>
  );
};

export default Event;
