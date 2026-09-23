import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {title:"ZoneSeven | AI, Websites & Marketing",description:"Independent thinking. Connected solutions. ZoneSeven brings AI automation, website development, and marketing together for your next move.",icons:{icon:[{url:"/favicon.ico",sizes:"any"},{url:"/favicon.png",type:"image/png",sizes:"512x512"}],shortcut:"/favicon.ico",apple:"/apple-touch-icon.png"}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en-AU"><body>{children}</body></html>}
