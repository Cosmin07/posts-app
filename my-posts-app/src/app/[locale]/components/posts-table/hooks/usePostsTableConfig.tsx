import { Button, TableColumnProps } from "antd"
import { Post } from "../../models/Post"
import { useUserDetailsModalStore } from "../../user-details-modal/store";
import { DeleteTwoTone } from '@ant-design/icons';
import { useTranslations } from "next-intl";


export const usePostsTableConfig = () => {
    const { setVisible, setSelectedUser} = useUserDetailsModalStore((state)=>state);
    const t = useTranslations();
    const getColumns = ():TableColumnProps<Post>[]=>{
        return[{
            title: t('viewUserDetails'),
            dataIndex: 'viewDetails',
            key: 'details',
            render: (_, rowData) => <Button type="primary" onClick={()=>{setVisible(true); setSelectedUser(rowData.userId)}} ghost>
            View
          </Button>,
          },
          {
            title: t('id'),
            dataIndex: 'id',
            key: 'id',
          },
          {
            title: t('title'),
            dataIndex: 'title',
            key: 'title',
          },
          {
            title: t('description'),
            key: 'body',
            dataIndex: 'body',
          },
          {
            title: t("delete"),
            dataIndex: 'delete',
            key: 'delet',
            render: () => <Button icon={<DeleteTwoTone />} type="primary" onClick={()=>{alert("To be defined...")}} ghost/>
          }]
    }
    return {
        columns: getColumns()
    }
}