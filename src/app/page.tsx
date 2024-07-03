import styles from "./page.module.css";
import { Box, Text, Image, Heading } from "@chakra-ui/react";

export default function Home() {
  return (
    <main className={styles.main}>
      <Box padding={5} height={"100%"} mt={20}>
        <Heading
          as={"h1"}
          fontSize={{ base: "2xl", md: "3xl" }}
          fontWeight={"bold"}
          color={"#68D391"}
        >
          <span>
            [<span className={styles.kali}>kali@kali</span> ~ ]:{" "}
            <span className={styles.kali}>$</span>
          </span>{" "}
          whoami
        </Heading>
        <Box
          display={"flex"}
          flexDir={"column"}
          alignItems={"center"}
          margin={"auto"}
        >
          <Box boxSize={{ base: "xs", md: "sm" }} mt={5}>
            <Image src="./image.png" alt="avatar aang with dual blades" />
          </Box>
          <Box bgColor={"#C4F1F9"} padding={2} borderRadius={6} paddingX={5}>
            <Text as={"p"}>Hola, soy adrian lara </Text>
          </Box>
        </Box>
        <Box textAlign={"left"} mt={10}>
          <Text as={"p"}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam.
          </Text>

          <Text mt={3}>
            quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi
            ut aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur?
          </Text>

          <Text mt={3}>
            sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
            nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
            amet, consectetur, adipisci velit, sed quia non numquam eius modi
            tempora incidunt ut labore et dolore magnam aliquam quaerat
            voluptatem. Ut enim ad minima veniam.
          </Text>
        </Box>
      </Box>
    </main>
  );
}
