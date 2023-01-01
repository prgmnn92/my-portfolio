import React from "react";
import { ThemeProvider } from "next-themes";
import StoreProvider from "../store/store-context";
import { Inter } from "@next/font/google";

import "../styles/globals.css";
import Cursor from "../components/Cursor";
import AuthProvider from "../store/auth-context";
import { Toaster } from "react-hot-toast";

const interVariable = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <AuthProvider>
        <StoreProvider>
          <main className={interVariable.className}>
            <Toaster />
            <Cursor />
            <Component {...pageProps} />
          </main>
        </StoreProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
