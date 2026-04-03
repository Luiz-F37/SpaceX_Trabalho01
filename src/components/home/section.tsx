"use client"

import { Box, Heading, Text, Link as ChakraLink } from "@chakra-ui/react"
import NextLink from "next/link"

interface SectionProps {
  title: string
  description: string
  buttonLabel: string
  buttonHref: string
  bgImage?: string
  bgVideo?: string
  bgVideoPoster?: string
  gradientSide?: "left" | "right" | "bottom"
  contentSide?: "left" | "right"
  contentVertical?: "top" | "middle" | "bottom"
  isExternal?: boolean
}

function ArrowIcon() {
  return (
    <svg width="13" height="12" viewBox="0 0 13 12" fill="none">
      <path
        d="M11.9893 5.58371L12.2471 5.89914L11.9893 6.21555L8.10059 10.9782L7.3252 10.3454L10.5479 6.39914L1.39941 6.39914L1.39941 5.39914L10.5479 5.39914L7.3252 1.45383L8.10059 0.821014L11.9893 5.58371Z"
        fill="currentColor"
        fillOpacity="0.8"
      />
    </svg>
  )
}

const gradientMap = {
  left: "linear-gradient(270deg, rgba(0,0,0,0) 50%, rgba(0,0,0,0.8) 100%)",
  right: "linear-gradient(90deg, rgba(0,0,0,0) 50%, rgba(0,0,0,0.8) 100%)",
  bottom: "linear-gradient(180deg, rgba(0,0,0,0) 50%, black 100%)",
}

export function Section({
  title,
  description,
  buttonLabel,
  buttonHref,
  bgImage,
  bgVideo,
  bgVideoPoster,
  gradientSide = "left",
  contentSide = "left",
  contentVertical = "middle",
  isExternal = false,
}: SectionProps) {
  const alignItems =
    contentVertical === "top"
      ? "flex-start"
      : contentVertical === "bottom"
        ? "flex-end"
        : "center"

  const pt = contentVertical === "top" ? { base: "120px", lg: "160px" } : undefined
  const pb = contentVertical === "bottom" ? { base: "80px", lg: "100px" } : undefined

  return (
    <Box
      position="relative"
      w="100%"
      h="100vh"
      overflow="hidden"
      display="flex"
      alignItems={alignItems}
    >
      {/* Background video */}
      {bgVideo && (
        <Box
          as="video"
          position="absolute"
          top={0}
          left={0}
          w="full"
          h="full"
          objectFit="cover"
          zIndex={0}
          // @ts-expect-error: Chakra UI's Box component does not recognize HTML video attributes like autoPlay, loop, muted, and playsInline
          autoPlay
          loop
          muted
          playsInline
          poster={bgVideoPoster}
          src={bgVideo}
        />
      )}

      {/* Background image */}
      {bgImage && !bgVideo && (
        <Box
          position="absolute"
          top={0}
          left={0}
          w="full"
          h="full"
          backgroundImage={`url(${bgImage})`}
          backgroundSize="cover"
          backgroundPosition="center"
          zIndex={0}
        />
      )}

      {/* Gradient overlay */}
      <Box
        position="absolute"
        top={0}
        left={0}
        w="full"
        h="full"
        background={gradientMap[gradientSide]}
        zIndex={1}
      />

      {/* Content */}
      <Box
        position="relative"
        zIndex={2}
        w="full"
        maxW="1700px"
        mx="auto"
        px={{ base: 6, md: 16, xl: 24 }}
        pt={pt}
        pb={pb}
        display="flex"
        justifyContent={contentSide === "right" ? "flex-end" : "flex-start"}
      >
        <Box maxW={{ base: "full", md: "560px" }}>
          <Heading
            as="h2"
            fontSize={{ base: "3xl", md: "5xl" }}
            fontWeight="bold"
            lineHeight="1"
            textTransform="uppercase"
            letterSpacing="tight"
            color="white"
            mb={4}
          >
            {title}
          </Heading>

          <Text
            color="whiteAlpha.900"
            fontSize={{ base: "sm", md: "md" }}
            lineHeight="tall"
            fontWeight="light"
            maxW="460px"
          >
            {description}
          </Text>

          <ChakraLink
            asChild={!isExternal}
            href={isExternal ? buttonHref : undefined}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            display="inline-flex"
            alignItems="center"
            gap={3}
            mt={8}
            px={5}
            h={12}
            borderWidth={1}
            borderColor="whiteAlpha.400"
            borderRadius="sm"
            bg="blackAlpha.500"
            color="white"
            textDecoration="none"
            fontSize="xs"
            letterSpacing="widest"
            textTransform="uppercase"
            transition="all 0.3s"
            _hover={{ bg: "white", color: "black" }}
          >
            {!isExternal ? (
              <NextLink href={buttonHref}>
                {buttonLabel} <ArrowIcon />
              </NextLink>
            ) : (
              <>
                {buttonLabel} <ArrowIcon />
              </>
            )}
          </ChakraLink>
        </Box>
      </Box>
    </Box>
  )
}
