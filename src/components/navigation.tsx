import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Link,
  Text,
} from "@chakra-ui/react";
import React from "react";

export default function Navigation() {
  return (
    <nav>
      <Box padding={4} height={"100%"} mt={20} pos={"fixed"}>
        <Link href="/">
          <Text as={"h2"} fontSize={"2xl"} p={1}>
            whoami
          </Text>
        </Link>

        <Box mt={2}>
          <Accordion allowMultiple borderWidth={0} padding={0} m={0}>
            <AccordionItem borderWidth={0} padding={0} m={0}>
              <h2>
                <AccordionButton padding={1}>
                  <Box
                    as="span"
                    padding={0}
                    m={0}
                    flex={1}
                    textAlign={"left"}
                    borderWidth={0}
                  >
                    WriteUps CTF
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel display={"flex"} flexDir={"column"}>
                <Link href="/#">something</Link>
                <Link href="/#">something</Link>
                <Link href="/#">something</Link>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </Box>
    </nav>
  );
}
