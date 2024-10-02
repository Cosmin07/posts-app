import { Table } from 'antd';
import React, { useCallback, useEffect, useState } from 'react';
import { Post } from '../models/Post';
import { usePostsTableConfig } from './hooks/usePostsTableConfig';
import UserDetailsModal from '../user-details-modal/UserDetailsModal';

const PostsTable:React.FC= () => {
 const {columns} = usePostsTableConfig()
 const [data, setData] = useState<Post[]>();
 const [isLoading, setIsLoading] = useState(false);

 const getData = useCallback(async (signal: AbortSignal) => {
   setIsLoading(true);
   try {
     const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
       signal,
     });
     const resJson = await res.json();
     // Reduce method to get unique objects
     const unique = resJson.reduce(
       // eslint-disable-next-line @typescript-eslint/no-explicit-any
       (acc: any[], obj: { userId: number }) => {
         if (
           !acc.some(
             (o: { userId: number }) => o.userId === obj.userId
           )
         ) {
           acc.push(obj);
         }
         return acc;
       },
       []
     );
     setData(unique)
   } catch (e) {
     console.log(e);
   } finally {
     setIsLoading(false);
   }
 }, []);

 useEffect(() => {
   const controller = new AbortController();
   getData(controller.signal);
   return () => controller.abort();
 }, [getData]);
      
    return(
        <><Table<Post>  loading = {isLoading} columns={columns} dataSource={data} /><UserDetailsModal/></>
    )
}

export default PostsTable;