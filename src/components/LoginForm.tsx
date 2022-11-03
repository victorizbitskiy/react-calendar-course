import { Button, Form, Input } from "antd";
import React, { FC } from "react";

const LoginForm: FC = () => {
  return (
    <Form>
      <Form.Item
        label="Имя пользователя"
        name="username"
        rules={[
          { required: true, message: "Пожалуйста введите имя пользователя!" },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Пароль"
        name="password"
        rules={[{ required: true, message: "Пожалуйста введите пароль!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Войти
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
