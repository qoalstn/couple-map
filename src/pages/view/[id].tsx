import Item from "@/component/item";
import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Post = ({ item, name }: any) => {
  //2. getServerSideProps를 이용해 서버사이드 랜더링을 할 경우
  return (
    <>
      {item && (
        <>
          <Head>
            <title>{item.name}</title>
            <meta name="description" content={item.description}></meta>
          </Head>
          {name} 환경입니다.
          <Item item={item} />
        </>
      )}
    </>
  );

  // 1. getServerSideProps(서버사이드랜더링)을 사용하지 않을 경우
  // const router = useRouter();
  // const { id } = router.query;
  // const [item, setItem] = useState({});
  // console.log("id : ", id);

  // const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;

  // function getData() {
  //   axios.get(API_URL).then((res) => {
  //     console.log("data : ", res);
  //     setItem(res.data);
  //   });
  // }

  // useEffect(() => {
  //   if (id) {
  //     getData();
  //   }
  // }, [id]);

  // return (
  //   <div>
  //     <Item item={item} />
  //   </div>
  // );
};

export default Post;

// 서버에서 동작, 브라우저 환경이 X (browser 객체 사용 못함)
export async function getServerSideProps(context: any) {
  const id = context.params.id;
  const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await axios.get(apiUrl);
  const data = res.data;

  console.log("env : ", process.env.name);

  return {
    props: {
      name: process.env.name,
      item: data,
    },
  };
}
