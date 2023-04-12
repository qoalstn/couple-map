import Image from "next/image";
import { Header } from "semantic-ui-react";
import Gnb from "./gnb";

export default function Top() {
  return (
    <div>
      {/* <img src="/logo_img.png" width="500" height="400" alt="logo" /> */}
      <Image src="/images/logo_img.png" width={200} height={200} alt="logo" />
      <Header as="h1">Couple Map Project</Header>
      <Gnb />
    </div>
  );
}
