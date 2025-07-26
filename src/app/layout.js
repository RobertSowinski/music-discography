import CustomNavbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

// Root layout component with header, navbar, and footer
export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="darkreader-lock" />
      </head>
      <body style={{ margin: 0, display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Header />
        <CustomNavbar />
        <main style={{ flex: 1, padding: "20px" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}