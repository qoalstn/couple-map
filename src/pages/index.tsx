import Image from "next/image";
import { Inter } from "next/font/google";
import { Divider, Header, Loader } from "semantic-ui-react";
import Head from "next/head";
import { useEffect, useState } from "react";
import axios from "axios";
import ItemList from "@/component/item_list";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import KakaoMap from "@/component/kakao_map";
import Search from "@/component/kakao_search";

export default function Home() {
  return <KakaoMap />;
  // useEffect(() => {
  //   const ps = new kakao.maps.services.Places();
  //   console.log("ps : ", ps);
  // }, []);
}
