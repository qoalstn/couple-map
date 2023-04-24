import { useState } from "react";
import Head from "next/head";

const Search = () => {
  const [keyword, setKeyword] = useState("");
  const [places, setPlaces] = useState([]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const response = await fetch(
      `https://dapi.kakao.com/v2/local/search/keyword.json?query=${keyword}`,
      {
        headers: {
          Authorization: `KakaoAK ${process.env.NEXT_PUBLIC_KAKAO_APP_KEY}`,
        },
      }
    );
    const data = await response.json();
    setPlaces(data.documents);
    console.log("place : ", places);
  };

  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APP_KEY}&libraries=services`}
        />
      </Head>
      <form onSubmit={handleSubmit}>
        <label>
          Search for a location:
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </label>
        <button type="submit">Search</button>
      </form>
      {places.length > 0 && (
        <ul>
          {places.map((place) => (
            <li key={place.id}>
              {place.place_name} ({place.address_name})
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Search;
