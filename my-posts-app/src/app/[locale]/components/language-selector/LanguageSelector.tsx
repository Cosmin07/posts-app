import React, { useState } from "react";
import { Dropdown, MenuProps, Space, Typography } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
import { useRouter, usePathname} from "next/navigation";
import { useTranslations } from "next-intl";

const LanguageSelector: React.FC = () => {
  const t = useTranslations();
  const router = useRouter();
  const pathname = usePathname();
  const urlLanguage = pathname.split("/").pop() || 'en';
  const  LanguageLabels :Record<string, string> = {
    en:t('english'),
    ro: t('romanian'),
  }
  const [currentLanguage, setCurrentLanguage]=useState(LanguageLabels[urlLanguage]);
  const items: MenuProps["items"] = [
    {
      key: "en",
      label: LanguageLabels.en,
      onClick: (item)=>{router.push(`/${item.key}`); setCurrentLanguage(LanguageLabels[item.key])}
    },
    {
      key: "ro",
      label: LanguageLabels.ro,
      onClick: (item)=>{router.push(`/${item.key}`); setCurrentLanguage(LanguageLabels[item.key])}
    },
  ];
  return (
    <Dropdown
      
      menu={{
        items,
        selectable: true,
        defaultSelectedKeys: [urlLanguage]
      }}
    >
      <Typography.Link>
        <Space>
          {currentLanguage}
          <GlobalOutlined />
        </Space>
      </Typography.Link>
    </Dropdown>
  );
};

export default LanguageSelector;
