"use client";

import { HamburgerIcon, SmallCloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  IconButton,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Show,
  Text,
} from "@chakra-ui/react";

export default function Header() {
  return (
    <header>
      <Box
        borderBottomWidth={1}
        py={4}
        backdropFilter="blur(10px) hue-rotate(90deg)"
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          pl={4}
          justifyContent={"space-between"}
        >
          <Box display={"flex"}>
            <Image
              src={"./image.png"}
              alt="avatar aang with two blades"
              boxSize={"35px"}
            />
            <Text as={"h1"} fontSize={"xl"} fontWeight={"bold"}>
              n0ne
            </Text>
          </Box>
          <Show below="md">
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant={"outline"}
              />
              <MenuList>
                <MenuItem>
                  <Link href="/">whoami</Link>
                </MenuItem>

                <MenuItem>
                  <Link href="/#"> WriteUps CTF</Link>
                </MenuItem>
              </MenuList>
            </Menu>
          </Show>
        </Box>
      </Box>
    </header>
  );
}
