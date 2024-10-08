import React from 'react';
import { Modal } from 'antd';
import { useUserDetailsModalStore } from './store';
import UserDetails from '../userDetails/UserDetails';
import { useTranslations } from 'next-intl';

const UserDetailsModal: React.FC = () => {
  const {visible,  setVisible} = useUserDetailsModalStore((state)=>state);
  const t = useTranslations();
  const { selectedUserId} = useUserDetailsModalStore((state)=>state);

  return (
   
      <Modal maskClosable={false} cancelButtonProps={{style: {display: 'none'}}} okButtonProps={{style: {display: 'none'}}} title={t('userDetails')} open={visible} onCancel={()=>{setVisible(false)}}>
        <UserDetails id={selectedUserId}></UserDetails>
      </Modal>
  );
};

export default UserDetailsModal;