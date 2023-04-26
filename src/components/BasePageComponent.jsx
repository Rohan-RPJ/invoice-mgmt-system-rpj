import React, { useEffect, useState } from "react";
import Header from "./common/Header";
import Sidebar from "./common/Sidebar";
import Footer from "./common/Footer";
import Head from "next/head";

const BasePageComponent = ({ pageContent: PageContent }) => {
  const [dimensions, setDimensions] = useState({
    height: null,
    width: null,
  });

  const [isMobileNav, setMobileNav] = useState(true);

  const handleResize = () => {
    setDimensions({
      height: screen.height,
      width: screen.width,
    });
  };

  useEffect(() => {
    setDimensions({
      height: screen.height,
      width: screen.width,
    });
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  useEffect(() => {
    dimensions.width > 622 ? setMobileNav(false) : setMobileNav(true);
  }, [dimensions]);

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    window.onscroll = handleScroll;
  });

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 1) setScrolled(true);
    else setScrolled(false);
  };

  return (
    <div>
      {/* <Head>
        <title>
          iPhone 12 XS Max For Sale in Colorado - Big Discounts | Apple
        </title>
        <meta
          name="description"
          content="Check out iPhone 12 XR Pro and iPhone 12 Pro Max. Visit your local store and for expert advice."
          key="desc"
        />
        <meta name="viewport" content="width=1920" />
      </Head> */}
      <div className={`w-full h-full`}>
        {/* Header for Large Screens | Sidebar for small mobile screens */}
        {dimensions.width > 622 ? (
          <Header scrolled={scrolled} isMobileNav={false} />
        ) : (
          <Sidebar scrolled={scrolled} isMobileNav={true} />
        )}
        {/* <Sidebar /> */}

        <div className={`w-full h-full overflow-scroll scrollbar-hide`}>
          {/* Main Content */}
          <main className={`w-full h-full`}>
            <PageContent isMobileNav={isMobileNav} />
          </main>

          {/* Footer */}
          <footer className={`w-full h-full`}>{/* <Footer /> */}</footer>
        </div>
      </div>
    </div>
  );
};

export default BasePageComponent;
