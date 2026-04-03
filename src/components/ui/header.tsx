"use client"

import { HStack, Text, Link as ChakraLink, Box, IconButton, VStack } from "@chakra-ui/react"
import NextLink from "next/link"
import { useState } from "react"
import { LuMenu, LuX, LuChevronDown } from "react-icons/lu"
import { ColorModeButton } from "./color-mode"

type NavItem = {
  label: string
  href?: string
  external?: boolean
  children?: { label: string; href: string }[]
}

function SpaceXLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="120"
      height="16"
      viewBox="0 0 147 19"
      fill="none"
    >
      <path
        d="M33.4556 7.10059C35.9425 7.10059 37.5024 8.14389 37.5024 9.99707V11.2383C37.5024 13.2081 36.1594 14.0693 33.6704 14.0693H24.7524V18.4062H21.3345V7.10059H33.4556ZM146.805 0.544922V0.561523C141.398 1.00137 120.15 3.63015 105.414 18.4062H99.9458L100.557 17.7988C103.641 14.8268 117.282 2.23051 146.803 0.542969L146.805 0.544922ZM56.2397 18.4043H52.1655L50.3599 15.9287H39.8169L41.6274 14H48.9526L45.4292 9.17285L47.5093 6.62012L56.2397 18.4043ZM72.1841 7.09863C74.0086 7.09865 75.3021 7.72865 75.6343 9.07031H62.8081V16.2803H75.6343C75.2694 17.7734 74.4885 18.4042 72.2827 18.4043H62.5786C60.9037 18.4043 59.3268 17.7248 59.3267 15.9209V9.58203C59.3267 7.778 60.9037 7.09868 62.5786 7.09863H72.1841ZM90.7222 12.834H83.8247V16.2803H95.6489V18.4043H80.3481V10.8975H90.7222V12.834ZM120.998 18.4043H115.584L110.775 14.9082H110.777C111.663 14.2168 112.602 13.5232 113.51 12.9014L120.998 18.4043ZM12.9351 7.09863C14.8252 7.09865 15.9037 8.0272 16.2358 9.07031H3.59424V11.5049H13.3979V11.5029C15.3722 11.6154 16.5677 12.4597 16.5679 14.0488V15.8535C16.5677 17.6083 15.5242 18.4014 13.4331 18.4014H3.43018C1.52352 18.4014 0.428522 17.6897 0.112793 16.2783H13.4849V13.6934H3.54541C1.70432 13.7036 0.459473 12.8582 0.459473 11.3691V9.58203C0.459473 7.87612 1.66924 7.09863 3.77686 7.09863H12.9351ZM24.7524 12H33.0435C34.3863 12 34.5356 11.5512 34.5356 10.7412V10.2979C34.5356 9.50218 34.3371 9.07228 32.8774 9.07227H24.7729L24.7524 12ZM109.604 9.87891C108.627 10.4554 107.562 11.1202 106.646 11.7334L100.298 7.09863H105.705L109.604 9.87891ZM95.811 9.07031H80.3481V7.09863H95.811V9.07031Z"
        fill="currentColor"
      />
    </svg>
  )
}

const NAV_ITEMS: NavItem[] = [
  {
    label: "Vehicles",
    children: [
      { label: "Starship", href: "/vehicles/starship" },
      { label: "Dragon", href: "/vehicles/dragon" },
      { label: "Falcon 9", href: "/vehicles/falcon-9" },
      { label: "Falcon Heavy", href: "/vehicles/falcon-heavy" },
    ],
  },
  {
    label: "Human Spaceflight",
    children: [
      { label: "Overview", href: "/humanspaceflight/overview" },
      { label: "Space Station", href: "/humanspaceflight/iss" },
      { label: "Earth Orbit", href: "/humanspaceflight/earth" },
      { label: "The Moon", href: "/humanspaceflight/moon" },
      { label: "Mars & Beyond", href: "/humanspaceflight/mars" },
    ],
  },
  { label: "Starlink", href: "https://starlink.com", external: true },
  { label: "Starshield", href: "/starshield" },
  {
    label: "Company",
    children: [
      { label: "Mission", href: "/mission" },
      { label: "Careers", href: "/careers" },
      { label: "Updates", href: "/updates" },
    ],
  },
]

function DesktopDropdown({
  item,
}: {
  item: NavItem
}) {
  const [open, setOpen] = useState(false)

  if (!item.children) {
    return (
      <ChakraLink
        asChild
        color="whiteAlpha.900"
        fontSize="xs"
        fontWeight="bold"
        letterSpacing="widest"
        textTransform="uppercase"
        _hover={{ color: "white" }}
      >
        <NextLink
          href={item.href!}
          target={item.external ? "_blank" : undefined}
        >
          {item.label}
        </NextLink>
      </ChakraLink>
    )
  }

  return (
    <Box
      position="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <HStack
        gap={1}
        cursor="pointer"
        color="whiteAlpha.900"
        fontSize="xs"
        fontWeight="bold"
        letterSpacing="widest"
        textTransform="uppercase"
        _hover={{ color: "white" }}
      >
        <Text>{item.label}</Text>
        <LuChevronDown size={12} />
      </HStack>

      {open && (
        <Box
          position="absolute"
          top="100%"
          left={0}
          pt={4}
          zIndex={200}
          minW="160px"
          background="linear-gradient(180deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.75) 100%)"
          backdropFilter="blur(8px)"
          borderRadius="md"
        >
          <VStack align="start" gap={3} p={4}>
            {item.children.map((child) => (
              <ChakraLink
                key={child.href}
                asChild
                color="whiteAlpha.700"
                fontSize="xs"
                letterSpacing="wider"
                textTransform="uppercase"
                _hover={{ color: "white" }}
              >
                <NextLink href={child.href}>{child.label}</NextLink>
              </ChakraLink>
            ))}
          </VStack>
        </Box>
      )}
    </Box>
  )
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <Box
      as="header"
      position="fixed"
      left={0}
      right={0}
      top={0}
      zIndex={100}
      background="linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)"
    >
      {/* Desktop */}
      <HStack
        as="nav"
        display={{ base: "none", lg: "flex" }}
        w="full"
        align="center"
        justify="space-between"
        px={10}
        py={6}
      >
        <ChakraLink asChild color="white" _hover={{ opacity: 0.9 }}>
          <NextLink href="/">
            <SpaceXLogo />
          </NextLink>
        </ChakraLink>

        <HStack gap={6} flex={1} ml={10}>
          {NAV_ITEMS.map((item) => (
            <DesktopDropdown key={item.label} item={item} />
          ))}
        </HStack>

        <HStack gap={3}>
          <ColorModeButton />
          <Box
            border="1px solid"
            borderColor="whiteAlpha.300"
            borderRadius="sm"
            px={3}
            py={1.5}
            fontSize="xs"
            letterSpacing="widest"
            textTransform="uppercase"
            color="whiteAlpha.800"
            cursor="pointer"
            _hover={{ color: "white", borderColor: "whiteAlpha.500" }}
          >
            Upcoming Launches ▾
          </Box>
        </HStack>
      </HStack>

      {/* Mobile */}
      <HStack
        display={{ base: "flex", lg: "none" }}
        justify="space-between"
        px={4}
        py={5}
      >
        <ChakraLink asChild color="white">
          <NextLink href="/">
            <SpaceXLogo />
          </NextLink>
        </ChakraLink>
        <IconButton
          aria-label="Menu"
          variant="ghost"
          color="white"
          onClick={() => setMobileOpen(!mobileOpen)}
          _hover={{ bg: "whiteAlpha.200" }}
        >
          {mobileOpen ? <LuX /> : <LuMenu />}
        </IconButton>
      </HStack>

      {/* Mobile Menu */}
      {mobileOpen && (
        <VStack
          display={{ base: "flex", lg: "none" }}
          align="start"
          bg="black"
          px={4}
          pb={8}
          gap={0}
          w="full"
        >
          {NAV_ITEMS.map((item) =>
            item.children ? (
              <Box key={item.label} w="full" borderBottomWidth={1} borderColor="whiteAlpha.200">
                <Text
                  py={5}
                  color="whiteAlpha.800"
                  fontSize="lg"
                  fontWeight="bold"
                  letterSpacing="widest"
                  textTransform="uppercase"
                >
                  {item.label}
                </Text>
                <VStack align="start" gap={4} pb={4} pl={4}>
                  {item.children.map((child) => (
                    <ChakraLink
                      key={child.href}
                      asChild
                      color="whiteAlpha.600"
                      fontSize="sm"
                      letterSpacing="wider"
                      textTransform="uppercase"
                      _hover={{ color: "white" }}
                    >
                      <NextLink href={child.href} onClick={() => setMobileOpen(false)}>
                        {child.label}
                      </NextLink>
                    </ChakraLink>
                  ))}
                </VStack>
              </Box>
            ) : (
              <Box key={item.label} w="full" borderBottomWidth={1} borderColor="whiteAlpha.200" py={5}>
                <ChakraLink
                  asChild
                  color="whiteAlpha.800"
                  fontSize="lg"
                  fontWeight="bold"
                  letterSpacing="widest"
                  textTransform="uppercase"
                  _hover={{ color: "white" }}
                >
                  <NextLink
                    href={item.href!}
                    onClick={() => setMobileOpen(false)}
                    target={item.external ? "_blank" : undefined}
                  >
                    {item.label}
                  </NextLink>
                </ChakraLink>
              </Box>
            )
          )}
        </VStack>
      )}
    </Box>
  )
}
