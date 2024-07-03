import { Box, Link, Text } from "@chakra-ui/react";
import React from "react";

export default function Navigation() {
  return (
    <nav>
      <Box padding={5} height={"100%"} mt={20} pos={"fixed"}>
        <Link href="/">
          <Text as={"h2"} fontSize={"2xl"}>
            whoami
          </Text>
        </Link>

        <Box mt={2}>
          <Link>WriteUps CTF</Link>
          <Box paddingLeft={4} display={"flex"} flexDir={"column"}>
            <Link href="/#">something</Link>
            <Link href="/#">something</Link>
            <Link href="/#">something</Link>
          </Box>
        </Box>
      </Box>
    </nav>
  );
}
