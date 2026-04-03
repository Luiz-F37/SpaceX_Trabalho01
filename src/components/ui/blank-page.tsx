import { Box, Flex, Text, Link as ChakraLink } from "@chakra-ui/react"
import NextLink from "next/link"

interface BlankPageProps {
  title: string
}

export function BlankPage({ title }: BlankPageProps) {
  return (
    <Box bg="black" minH="100vh" position="relative">
      <Box position="fixed" top={6} left={6} zIndex={100}>
        <ChakraLink
          asChild
          color="whiteAlpha.600"
          fontSize="xs"
          letterSpacing="widest"
          textTransform="uppercase"
          _hover={{ color: "white" }}
        >
          <NextLink href="/">← Back</NextLink>
        </ChakraLink>
      </Box>

      <Flex h="100vh" align="center" justify="center">
        <Text
          fontSize={{ base: "3xl", md: "5xl", xl: "6xl" }}
          fontWeight="bold"
          textTransform="uppercase"
          letterSpacing="widest"
          color="whiteAlpha.900"
          textAlign="center"
          px={6}
        >
          {title}
        </Text>
      </Flex>
    </Box>
  )
}
