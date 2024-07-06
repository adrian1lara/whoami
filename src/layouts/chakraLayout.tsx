import Header from "@/components/header";
import Navigation from "@/components/navigation";
import { Container, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
export default function ChakraLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container maxW={"7xl"} centerContent>
      <Grid
        templateAreas={{
          base: `"header" "main" "footer"`,
          md: `"header header header"
"nav main aside"
"footer footer footer"`,
        }}
        gridTemplateRows={"auto 1fr auto"}
        gridTemplateColumns={{
          base: "100%",
          md: "20% 60% 20%",
        }}
        h="100dvh"
        gap={1}
        width={"100%"}
        color="blackAlpha.700"
      >
        <GridItem
          area={"header"}
          pos={"fixed"}
          width={{ base: "90%", md: "7xl" }}
        >
          <Header />
        </GridItem>
        <GridItem area={"nav"}>
          <Navigation />
        </GridItem>
        <GridItem area={"main"}>{children}</GridItem>

        <GridItem area={"aside"} bgColor={"blue"} mt={20}>
          aside
        </GridItem>
        <GridItem area={"footer"} bgColor={"yellow"}>
          footer
        </GridItem>
      </Grid>
    </Container>
  );
}
