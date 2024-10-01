'use client'
import React from "react";
import { Breadcrumb, Flex, Layout } from "antd";
import LanguageSelector from "./components/language-selector/LanguageSelector";
import { useTranslations } from "next-intl";
import "./../globals.scss";

const { Header, Content } = Layout;

export default function Home() {
  const t = useTranslations();
  return (
    <Flex gap="middle" wrap>
      <Layout>
        <Header className="page-header">
          <LanguageSelector />
        </Header>
        <Content className="page-content">
          <Breadcrumb
            style={{ margin: "16px 0" }}
            items={[{ title: t('pageTitle') }, {}]}
          />
          Page Content to be defined...
        </Content>
      </Layout>
    </Flex>
  );
}
