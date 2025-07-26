import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

// Root layout component with header, main, and footer
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="darkreader-lock" />
      </head>
      <body style={{ margin: 0 }}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}