import { useRouter } from "next/router";
import { Menu } from "semantic-ui-react";

export default function Gnb() {
  let activeItem = "home";
  const router = useRouter();
  console.log("rout : ", router);

  if (router.pathname === "/") {
    activeItem = "home";
  } else if (router.pathname == "/about") {
    activeItem = " about";
  }

  function goLink(d: any, data: any) {
    if (data.name === "home") {
      router.push("/");
    } else if (data.name === "about") {
      router.push("/about");
    }
  }

  return (
    <Menu inverted>
      <Menu.Item name="home" active={activeItem === "home"} onClick={goLink} />
      <Menu.Item
        name="about"
        // active={activeItem === "about"}
        onClick={goLink}
      />
      <Menu.Item
        name="Contact Us"
        // active={activeItem === "about"}
        onClick={() => router.push("/contact")}
      />
    </Menu>
  );
}
