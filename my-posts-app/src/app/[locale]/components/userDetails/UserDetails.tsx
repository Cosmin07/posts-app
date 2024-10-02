import React, { useCallback, useEffect, useState } from "react";
import { Card, Typography } from "antd";
import { User } from "../models/User";
import { useTranslations } from "next-intl";
import { useUserDetailsModalStore } from "../user-details-modal/store";

const { Text } = Typography;

interface UserDetailsProps {
  id: number;
}

const UserDetails: React.FC<UserDetailsProps> = ({ id }) => {
  const t = useTranslations();
  const [data, setData] = useState<User>();
  const [isLoading, setIsLoading] = useState(false);
  const { selectedUserId} = useUserDetailsModalStore((state)=>state);

  const getData = useCallback(
    async (signal: AbortSignal) => {
      setIsLoading(true);
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/users/${selectedUserId}`,
          { signal }
        );
        const resJson = await res.json();
        setData(resJson);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    },
    [selectedUserId]
  );

  useEffect(() => {
    const controller = new AbortController();
    getData(controller.signal);
    return () => controller.abort();
  }, [getData]);

  return (
    <Card loading={isLoading} title={data?.name} bordered={false}>
      <div>
        <Text strong>{t("email")}</Text>
        <Text strong>{data?.email} </Text>
      </div>
      <div>
        <Text strong>{t("address")}</Text>
        <Text strong>{data?.address.city}</Text>
        <Text strong>{data?.address.city}</Text>
      </div>
    </Card>
  );
};

export default UserDetails;
