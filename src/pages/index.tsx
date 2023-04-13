import Image from "next/image";
import { Inter } from "next/font/google";
import { Divider, Header } from "semantic-ui-react";
import Head from "next/head";
import { useEffect, useState } from "react";
import axios from "axios";
import ItemList from "@/component/item_list";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const API_URL = "/api/v1/products.json?brand=clinique";
  const [map, setMap] = useState();
  const [list, setList] = useState([]);

  // function getMap() {
  //   axios({
  //     url: API_URL,
  //     method: "get",
  //   });
  // }

  function getData() {
    axios({
      method: "get",
      url: API_URL,
    }).then((res) => {
      console.log("res : ", res.data);
      setList(res.data);
    });
  }

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    // const script = document.createElement("script");
    // script.type = "text/javascript";
    // script.src = `"https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.KAKAO_API_KEY}"`;
    // // type="text/javascript" src=""
    // document.body.appendChild(script);
    // getMap();
    // console.log("api : ", process.env.KAKAO_API_KEY);
    //     var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
    // var options = { //지도를 생성할 때 필요한 기본 옵션
    // 	center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
    // 	level: 3 //지도의 레벨(확대, 축소 정도)
    // };
    // var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
  }, []);

  return (
    <div>
      <Head>
        <title>HOME | 커플맵</title>
      </Head>
      <Header as="h3" style={{ paddingTop: 40 }}>
        베스트 상품
      </Header>
      <Divider />
      <ItemList list={list.slice(0, 9)} />
      <Header as="h3" style={{ paddingTop: 40 }}>
        신상품
      </Header>
      <Divider />
      <ItemList list={list.slice(9)} />
    </div>
  );
}
