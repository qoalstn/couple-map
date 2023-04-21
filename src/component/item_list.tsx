import { Grid, Image } from "semantic-ui-react";
import styles from "./item_list.module.css";
import Link from "next/link";

export default function ItemList(list: any) {
  return (
    <Grid columns={3} divided>
      <Grid.Row>
        {list.list.length > 1
          ? list.list.map((item: any) => {
              return (
                <Grid.Column key={item.id}>
                  {/* <Link id="link" href={`/view/${item.id}`}> */}
                  <Link legacyBehavior href={`/view/${item.id}`}>
                    {/* <Link legacyBehavior href={`/detail/${item.id}`}> */}
                    <a id="link">
                      <Image
                        src={item.image_link}
                        alt={item.name}
                        className={styles.img_item}
                      />
                      <strong className={styles.tit_item}>{item.name}</strong>
                      <span className={styles.txt_info}>
                        {item.cartegory} {item.product_type}
                      </span>
                      <strong className={styles.num_price}>{item.price}</strong>
                    </a>
                  </Link>
                </Grid.Column>
              );
            })
          : ""}
      </Grid.Row>
    </Grid>
  );
}
