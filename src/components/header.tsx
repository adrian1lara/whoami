import { Box, Image } from "@chakra-ui/react";

export default function Header() {
  return (
    <Box>
      <Image
        src={"./image.png"}
        alt="avatar aang with two blades"
        boxSize={"35px"}
      />
    </Box>
  );
}
