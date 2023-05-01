import Header from "@widgets/Header";
import Footer from "@widgets/Footer";


// default layout configuration
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>      
      <Header />
        {children}
      <Footer />
    </>
  );
};
export default Layout;
