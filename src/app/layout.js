import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styles from "./page.module.css"; // Import the home page CSS

// Root layout component with header, main, and footer
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="darkreader-lock" />
      </head>
      <body style={{ margin: 0 }}>
        <Header />
        <main className={styles.main}>{children}</main> {/* Apply .main class */}
        <Footer />
      </body>
    </html>
  );
}