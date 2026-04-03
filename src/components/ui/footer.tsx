import { HStack, VStack, Text, Link as ChakraLink, Box } from "@chakra-ui/react"
import NextLink from "next/link"


export function Footer() {
  return (
    <VStack
      as="footer"
      borderTopWidth={1}
      borderColor="whiteAlpha.200"
      py={6}
      gap={4}
      bg="black"
    >
      <HStack justify="space-between" w="full" px={10} align="center">
        {/* Social X */}
        <ChakraLink
          href="https://x.com/SpaceX"
          target="_blank"
          color="white"
          _hover={{ opacity: 0.7 }}
        >
          <Box
            p={3}
            borderRadius="full"
            bg="whiteAlpha.100"
            _hover={{ bg: "whiteAlpha.200" }}
            cursor="pointer"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M6.91326 5.26514L10.4871 1.2002H9.64019L6.53705 4.72973L4.05857 1.2002H1.19995L4.94789 6.53748L1.19995 10.8002H2.04688L5.32388 7.07289L7.94133 10.8002H10.8L6.91305 5.26514H6.91326Z"
                fill="#F0F0FA"
              />
            </svg>
          </Box>
        </ChakraLink>

        {/* Nav links */}
        <HStack gap={8}>
          {[
            { label: "Careers", href: "/careers" },
            { label: "Updates", href: "/updates" },
            { label: "Privacy Policy", href: "/privacy-policy" },
            { label: "Suppliers", href: "/supplier" },
          ].map((item) => (
            <ChakraLink
              key={item.href}
              asChild
              color="white"
              fontSize="xs"
              letterSpacing="widest"
              textTransform="uppercase"
              _hover={{ color: "whiteAlpha.700" }}
            >
              <NextLink href={item.href}>{item.label}</NextLink>
            </ChakraLink>
          ))}
        </HStack>

        <Text
          color="white"
          fontSize="xs"
          letterSpacing="widest"
          textTransform="uppercase"
        >
          © 2026 SpaceX
        </Text>
      </HStack>
    </VStack>
  )
}
