import styles from "../app/page.module.css";
import { Heading } from "@chakra-ui/react";

export const Powerline = ({ pathname }: { pathname: string }) => (
  <Heading
    as={"h1"}
    fontSize={{ base: "2xl", md: "3xl" }}
    fontWeight={"bold"}
    color={"#68D391"}
  >
    <span>
      [<span className={styles.kali}>kali@kali</span> ~ ]:
      <span className={styles.kali}>${pathname}</span>
    </span>
  </Heading>
);
