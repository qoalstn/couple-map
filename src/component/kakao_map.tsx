import { useEffect, useState } from "react";

export default function KakaoMapRoutedPage() {
  useEffect(() => {
    const script = document.createElement("script"); // script 태그를 만든다.
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APP_KEY}&autoload=false`;
    document.head.appendChild(script); // appendChild 자식으로 추가
    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(
            37.51719553992789,
            126.95962070083127
          ), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };

        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
        console.log(map);

        //마커
        // 지도를 클릭한 위치에 표출할 마커입니다
        const marker = new window.kakao.maps.Marker({
          // 지도 중심좌표에 마커를 생성합니다
          position: map.getCenter(),
        });
        // 지도에 마커를 표시합니다
        marker.setMap(map);

        // 지도에 클릭 이벤트를 등록합니다
        // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
        window.kakao.maps.event.addListener(
          map,
          "click",
          function (mouseEvent: { latLng: any }) {
            // 클릭한 위도, 경도 정보를 가져옵니다
            const latlng = mouseEvent.latLng;

            // 마커 위치를 클릭한 위치로 옮깁니다
            marker.setPosition(latlng);
          }
        );
      });
    };
  }, []);

  return (
    <>
      <div id="map" style={{ width: "500px", height: "400px" }}></div>
    </>
  );
}

// import Script from "next/script";
// import { Map, MapMarker } from "react-kakao-maps-sdk";
// import { useEffect, useState } from "react";

// const KakaoMap = () => {
//   return (
//     <Map
//       center={{ lat: 33.5563, lng: 126.79581 }}
//       style={{ width: "100%", height: "360px" }}
//     >
//       <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
//         <div style={{ color: "#000" }}>Hello World!</div>
//       </MapMarker>
//     </Map>
//   );
// };

// export default KakaoMap;
