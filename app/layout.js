import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';

const poppins = Poppins({
  weight:['300','400','500','600','700','800','900'],
  subsets:['latin'],
})

export const metadata = {
  title: "Falcon Vertex",
  description: "Building Future-Ready Websites with Precision.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className}`}
      >
        <AppRouterCacheProvider>
          <Header/>
          <main className="overflow-x-hidden">
            {children}
          </main> 
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
