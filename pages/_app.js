import { ThemeProvider } from "next-themes";
import { Inter } from "@next/font/google";

import "../styles/globals.css";

const interVariable = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <main className={interVariable.className}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
