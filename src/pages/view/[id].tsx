import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log("id : ", id);

  // return <p>Post: {id}</p>;
  return <p>hi</p>;
};

export default Post;
