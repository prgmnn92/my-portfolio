import React, { useEffect } from "react";
import { ThemeProvider } from "next-themes";
import StoreProvider from "../store/store-context";
import { Inter } from "@next/font/google";

import "../styles/globals.css";
import Cursor from "../components/Cursor";

const interVariable = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <StoreProvider>
        <main className={interVariable.className}>
          <Cursor />
          <Component {...pageProps} />
        </main>
      </StoreProvider>
    </ThemeProvider>
  );
}
