import React, { useState } from "react";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  TableOutlined,
  FolderOpenOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme, Typography } from "antd";

const { Header, Sider, Content } = Layout;
const DashboardLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{
          background: colorBgContainer,
        }}
      >
        <div
          style={{
            fontSize: "24px",
            padding: "20px 20px",
          }}
        >
          <span>
            {" "}
            <a href="https://mcaconsultltd.com">MCA Consult</a>
          </span>
        </div>
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={["/"]}
          onClick={({ key }) => {
            navigate(key);
          }}
          items={[
            {
              key: "/asmeB36",
              icon: <FolderOpenOutlined />,
              label: "ASME B36.10",
            },
            {
              key: "/asmeB16(C)",
              icon: <TableOutlined />,
              label: "ASME B16.5 (C)",
            },
            {
              key: "/asmeB16(F)",
              icon: <TableOutlined />,
              label: "ASME B16.5 (F)",
            },
          ]}
        />
      </Sider>
      <Layout
        style={{
          minHeight: "100vh",
          width: "auto",
        }}
      >
        {/* <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header> */}
        <Content
          style={{
            margin: "0 16px 24px 16px",
            // padding: 24,
            // minHeight: 780,
          }}
        >
          {/* page content */}
          <div className="flex-1 flex flex-col p-0">
            <div
              style={{
                height: "530px",
                backgroundImage:
                  'url("https://mcaconsultltd.com/wp-content/uploads/2024/06/it-services-06.jpg")',
                // transform: "translate(0px, 103.556px)",
              }}
            >
              <section
                style={{
                  backgroundImage:
                    "linear-gradient(140deg,rgba(0,72,114,0.9) 0%,rgba(41,17,96,0.8) 100%)",
                  backgroundColor: "rgba(0,0,0,0)",
                  paddingTop: "10vw",
                  paddingBottom: "10vw",
                }}
              >
                <div
                  style={{
                    margin: "20px auto",
                    width: "80%",
                    maxWidth: "800px",
                  }}
                >
                  <h1
                    style={{
                      fontSize: "80px",
                      textAlign: "center",
                      color: "#fff",
                      fontFamily: "Share Tech",
                      fontWeight: "400",
                    }}
                  >
                    Tables
                  </h1>
                </div>
              </section>
            </div>
            <div style={{ paddingTop: "50px", backgroundColor: "#fff" }}>
              {<Outlet />}
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default DashboardLayout;
