import Nav from "./Nav";
import Footer from "./Footer";
export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <main className="w-full min-h-screen flex justify-center items-center">
        {children}
      </main>
      <Footer />
    </>
  );
}
