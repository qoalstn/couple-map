import Item from "@/component/item";
import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Loader } from "semantic-ui-react";

// const Post = () => {
const Post = ({ item, name }: any) => {
  // 3. getStaticPaths 사용
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div style={{ padding: "100px 0" }}>
        <Loader active inline="centered">
          Loading
        </Loader>
      </div>
    );
  }

  // return (
  //   <>
  //     {item && (
  //       <>
  //         <Head>
  //           <title>{item.name}</title>
  //           <meta name="description" content={item.description}></meta>
  //         </Head>
  //         {name} 환경 입니다.
  //         <Item item={item} />
  //       </>
  //     )}
  //   </>
  // );

  // //2. getServerSideProps를 이용해 서버사이드 랜더링을 할 경우
  // return (
  //   <>
  //     {item && (
  //       <>
  //         <Head>
  //           <title>{item.name}</title>
  //           <meta name="description" content={item.description}></meta>
  //         </Head>
  //         {name} 환경입니다.
  //         <Item item={item} />
  //       </>
  //     )}
  //   </>
  // );

  //   // 1. getServerSideProps(서버사이드랜더링)을 사용하지 않을 경우
  //   const router = useRouter();
  //   const { id } = router.query;
  //   const [item, setItem] = useState({});
  //   console.log("id : ", id);

  //   const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;

  //   function getData() {
  //     axios.get(API_URL).then((res: any) => {
  //       console.log("data : ", res);
  //       setItem(res.data);
  //     });
  //   }

  //   useEffect(() => {
  //     if (id) {
  //       getData();
  //     }
  //   }, [id]);

  //   return (
  //     <div>
  //       <Item item={item} />
  //     </div>
  //   );
};

export default Post;

export async function getStaticPaths() {
  const apiUrl =
    "http://makeup-api.herokuapp.com/api/v1/products.json?brand=clinique"; //process.env.name;
  const res = await axios.get(apiUrl);
  const data = res.data;

  return {
    paths: data.slice(0, 9).map((item: any) => ({
      params: {
        id: item.id.toString(),
      },
    })),
    fallback: true,
  };
}

export async function getStaticProps(context: any) {
  const id = context.params.id;
  const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      item: data,
      name: process.env.name,
    },
  };
}
