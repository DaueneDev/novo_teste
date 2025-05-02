import "@css/bootstrap.min.css";
import "@css/font-awesome.css";
import "@css/animate.css";
import "@css/magnific-popup.css";
import "@css/meanmenu.css";
import "@css/slick.css";
import "@css/swiper-bundle.min.css";
import "@css/nice-select.css";
import "@css/main.css";
import "./globals.css";
import Preloader from "@/layouts/Preloader";

export const metadata = {


  title: "Agua De Malí -Serviços de Abastecimento de Água",
  description:
    "Página Oficial Da Empresa Água De Malí - Serviços de Abastecimento de Água de Moçambique",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
     <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content="Agua De Malí, Água, Serviços de Abastecimento de Água, Moçambique" />
        <meta name="author" content="Agua De Malí" />
        <link rel="icon" href="/favicon.ico" sizes="any" type="image/icon" />
        <title>{metadata.title}</title>
     </head>
      <body>
        <Preloader />
        {children}</body>
    </html>
  );
}
