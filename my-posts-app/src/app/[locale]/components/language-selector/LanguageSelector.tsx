import React, { useState } from "react";
import { Dropdown, MenuProps, Space, Typography } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
import { useRouter, usePathname} from "next/navigation";

const  LanguageLabels :Record<string, string> = {
  en:'English',
  ro: 'Romania',
}

const LanguageSelector: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const urlLanguage = pathname.split("/").pop() || 'en';
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
