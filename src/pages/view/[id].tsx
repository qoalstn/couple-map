import Item from "@/component/item";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  const [item, setItem] = useState({});
  console.log("id : ", id);

  const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;

  function getData() {
    axios.get(API_URL).then((res) => {
      console.log("data : ", res);
      setItem(res.data);
    });
  }

  useEffect(() => {
    if (id) {
      getData();
    }
  }, [id]);

  return (
    <div>
      <Item item={item} />
    </div>
  );
};

export default Post;
