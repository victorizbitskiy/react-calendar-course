import { Layout, Menu, Row } from "antd";
import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { Route, useNavigate } from "react-router-dom";
import { useTypedSelector } from "../hooks/userTypedSelector";
import { RouteNames } from "../router";
import { AuthActionCreators } from "../store/reduces/auth/action-creators";

const Navbar: FC = () => {
  const navigate = useNavigate();
  const { isAuth, user } = useTypedSelector((state) => state.auth);
  const dispatch = useDispatch<any>()
  return (
    <Layout.Header>
      <Row justify="end">
        {isAuth ? (
          <>
            <div style={{ color: "white" }}>{user.username}</div>(
            <Menu theme="dark" mode="horizontal" selectable={false}>
              <Menu.Item
                onClick={() => dispatch(AuthActionCreators.logout())}
                key={1}
              >
                Выйти
              </Menu.Item>
            </Menu>
            )
          </>
        ) : (
          <>
            (
            <Menu theme="dark" mode="horizontal" selectable={false}>
              <Menu.Item
                onClick={() => {
                  navigate(RouteNames.LOGIN);
                }}
                key={1}
              >
                Выйти
              </Menu.Item>
            </Menu>
            )
          </>
        )}
      </Row>
    </Layout.Header>
  );
};

export default Navbar;
