/* pages/_app.js */
import "../styles/globals.css";
import Header from "../components/Header";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { theme } from "../styles/style";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <ChakraProvider theme={theme}>
        <ColorModeScript />
        <Header />
        <Component {...pageProps} />
      </ChakraProvider>
    </div>
  );
}

export default MyApp;
