"use client";
import "./globals.css";
import Sidebar from "./components/sidebar/sidebar";
import { Flex, Layout } from "antd";
import { Content } from "antd/es/layout/layout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Layout style={{ minHeight: "100vh" }}>
          <Sidebar />

          <Layout>
            <Content style={{ padding: 24 }}>{children}</Content>
          </Layout>
        </Layout>
      </body>
    </html>
  );
}
