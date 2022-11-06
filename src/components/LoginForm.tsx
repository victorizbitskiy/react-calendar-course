import { Button, Form, Input } from "antd";
import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../hooks/userTypedSelector";
import { AuthActionCreators } from "../store/reduces/auth/action-creators";
import { rules } from "../utils/rules";

const LoginForm: FC = () => {
  const dispatch = useDispatch<any>();
  const { error, isLoading } = useTypedSelector((state) => state.auth);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submit = () => {
    dispatch(AuthActionCreators.login(username, password));
  };

  return (
    <Form onFinish={submit}>
      {error && <div style={{ color: "red" }}>Error</div>}
      <Form.Item
        label="Имя пользователя"
        name="username"
        rules={[rules.required("Пожалуйста введите имя пользователя!")]}
      >
        <Input value={username} onChange={(e) => setUsername(e.target.value)} />
      </Form.Item>
      <Form.Item
        label="Пароль"
        name="password"
        rules={[rules.required("Пожалуйста введите пароль!")]}
      >
        <Input value={password} onChange={(e) => setPassword(e.target.value)} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          Войти
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
