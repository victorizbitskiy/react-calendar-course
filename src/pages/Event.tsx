import { Button, Card, Layout, Modal, Row } from "antd";
import React, { FC, useEffect, useState } from "react";
import EventCalendar from "../components/EventCalendar";
import EventForm from "../components/EventForm";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/userTypedSelector";

const Event: FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const { fetchGuests } = useActions();
  const { guests } = useTypedSelector((state) => state.event);

  useEffect(() => {
    fetchGuests();
  }, []);

  return (
    <Layout>
      <EventCalendar events={[]} />
      <Row justify="center">
        <Button onClick={() => setModalVisible(true)}>Добавить cобытие</Button>
      </Row>
      <Modal
        title="Добавить событие"
        open={modalVisible}
        footer={null}
        onCancel={() => setModalVisible(false)}
      >
        <EventForm guests={guests} />
      </Modal>
    </Layout>
  );
};

export default Event;
