import Nav from "./Nav";
import Footer from "./Footer";
export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <main className="w-full mt-12 flex justify-center items-center">
        {children}
      </main>
      <Footer />
    </>
  );
}
