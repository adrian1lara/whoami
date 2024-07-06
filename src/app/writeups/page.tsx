"use client";
import { usePathname } from "next/navigation";
import { Box } from "@chakra-ui/react";
import { Powerline } from "@/components/powerline";

export default function WriteUps() {
  const pathname = usePathname();
  return (
    <main>
      <Box p={5} mt={20}>
        <Powerline pathname={pathname} />
      </Box>
    </main>
  );
}
