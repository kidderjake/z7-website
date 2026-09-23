import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {title:"ZoneSeven | AI, Websites & Marketing",description:"Independent thinking. Connected solutions. ZoneSeven brings AI automation, website development, and marketing together for your next move.",icons:{icon:"/favicon.svg",shortcut:"/favicon.svg"}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en-AU"><body>{children}</body></html>}
