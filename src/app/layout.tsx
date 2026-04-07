import { Provider } from "@/components/ui/provider"
import "../styles/globals.css"
import { Header } from "@/components/ui/header"

export const metadata = {
  title: "SpaceX",
  description:
    "SpaceX designs, manufactures and launches advanced rockets and spacecraft.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className="dark">
      <body>
        <Provider>
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  )
}
