import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { Montserrat, Chivo } from "next/font/google";

const montserrat = Montserrat({
  weight: "400",
  display: "swap",
  subsets: ["latin"],
});

const chivo = Chivo({
  weight: "400",
  display: "swap",
  subsets: ["latin"],
});

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({
  colors,
  gradients: {
    "gradient-1": "linear-gradient(65deg, #7928CA 10%, #FF0080 100%)",
  },
  fonts: {
    montserrat: montserrat.style.fontFamily,
    chivo: chivo.style.fontFamily,
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
