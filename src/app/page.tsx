import { Box } from "@chakra-ui/react"
import { Section } from "@/components/home/section"
import { Footer } from "@/components/ui/footer"

const SECTIONS = [
  {
    title: "Making Life Multiplanetary",
    description:
      "SpaceX was founded under the belief that a future where humanity is out exploring the stars is fundamentally more exciting than one where we are not.",
    buttonLabel: "Explore",
    buttonHref: "/humanspaceflight/mars",
    bgVideo:
      "https://sxcontent9668.azureedge.us/cms-assets/assets/Mars_Rotation_Web_HB_d96299f9de.mp4",
    bgVideoPoster:
      "https://sxcontent9668.azureedge.us/cms-assets/assets/Mars_Web_8fafe15a48.jpg",
    gradientSide: "left" as const,
    contentSide: "left" as const,
    contentVertical: "middle" as const,
  },
  {
    title: "Revolutionizing Space Technology",
    description:
      "SpaceX's Starship spacecraft and Super Heavy rocket is a fully reusable transportation system designed to carry both crew and cargo to Earth orbit, the Moon, Mars, and beyond.",
    buttonLabel: "Learn More",
    buttonHref: "/vehicles/starship",
    bgImage:
      "https://sxcontent9668.azureedge.us/cms-assets/assets/Revolutionizing_Space_Tech_Desktop_ec67ad03c2.jpg",
    gradientSide: "right" as const,
    contentSide: "right" as const,
    contentVertical: "top" as const,
  },
  {
    title: "World's Leading Launch Service Provider",
    description:
      "SpaceX leads the world in launches with its reliable, reusable rockets and is developing the fully and rapidly reusable rockets necessary to transform humanity's ability to access space into something as routine as air travel.",
    buttonLabel: "Reserve Your Ride",
    buttonHref: "/rideshare",
    bgVideo:
      "https://sxcontent9668.azureedge.us/cms-assets/assets/Space_X_Falcon_Heavy_UAS_Landing_DESKTOP_compress_b4568daf9c_5e2026727a.mp4",
    bgVideoPoster:
      "https://sxcontent9668.azureedge.us/cms-assets/assets/Leading_Launch_Service_Desktop_06a98ac534.jpg",
    gradientSide: "left" as const,
    contentSide: "left" as const,
    contentVertical: "top" as const,
  },
  {
    title: "Advancing Human Spaceflight",
    description:
      "Since returning human spaceflight capabilities to the United States in 2020, SpaceX is helping build a new era where not just hundreds of people, but thousands and ultimately millions will be able to explore space.",
    buttonLabel: "Join a Mission",
    buttonHref: "/humanspaceflight",
    bgImage:
      "https://sxcontent9668.azureedge.us/cms-assets/assets/Advancing_Human_Spaceflight_Desktop_61c8ba1c67.jpg",
    gradientSide: "right" as const,
    contentSide: "right" as const,
    contentVertical: "top" as const,
  },
  {
    title: "Delivering High-Speed Internet From Space",
    description:
      "Starlink is the world's most advanced satellite constellation in low-Earth orbit, delivering reliable broadband internet capable of supporting streaming, online gaming, video calls, and more.",
    buttonLabel: "Order Now",
    buttonHref: "https://www.starlink.com/",
    bgVideo:
      "https://sxcontent9668.azureedge.us/cms-assets/assets/Starlink_12_10_20250428_Deploy_website_DESKTOP_14fe7e072c.mp4",
    bgVideoPoster:
      "https://sxcontent9668.azureedge.us/cms-assets/assets/Delivering_Highspeed_Desktop_d50314640c.jpg",
    gradientSide: "bottom" as const,
    contentSide: "left" as const,
    contentVertical: "middle" as const,
    isExternal: true,
  },
]

export default function Home() {
  return (
    <Box as="main" bg="black">
      {SECTIONS.map((section, idx) => (
        <Box key={idx} position="relative">
          <Section {...section} />
          {idx === SECTIONS.length - 1 && <Footer />}
        </Box>
      ))}
    </Box>
  )
}
