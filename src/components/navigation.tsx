import { Box, Text } from "@chakra-ui/react";
import React from "react";

export default function Navigation() {
  return (
    <nav style={{ height: "100%" }}>
      <Box
        bgColor={"#163540"}
        backdropFilter={"auto"}
        backdropBlur={"10px"}
        height={"100%"}
        opacity={"70%"}
        borderRadius={"10px"}
      >
        <Text fontSize={"4xl"} fontStyle={"bold"} color={"black"}>
          whoami
        </Text>
      </Box>
    </nav>
  );
}
