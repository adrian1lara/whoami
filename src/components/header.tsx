import { Box, Image, Text } from "@chakra-ui/react";

export default function Header() {
  return (
    <header>
      <Box
        w={"100%"}
        borderBottomWidth={1}
        py={4}
        backdropFilter="blur(10px) hue-rotate(90deg)"
      >
        <Box display={"flex"} alignItems={"center"} pl={4}>
          <Image
            src={"./image.png"}
            alt="avatar aang with two blades"
            boxSize={"35px"}
          />
          <Text as={"h1"} fontSize={"xl"} fontWeight={"bold"}>
            n0ne
          </Text>
        </Box>
      </Box>
    </header>
  );
}
