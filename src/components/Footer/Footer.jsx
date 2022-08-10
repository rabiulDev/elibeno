import React from "react";
import FooterBody from "./FooterBody";
import FooterHeader from "./FooterHeader";

const Footer = () => {
  return (
    <section className="bg-lightBlue">
      <div className="container mx-auto py-[120px]">
        {/* FOOTER HEADER */}
        <FooterHeader />

        {/* FOOTER BODY */}
        <FooterBody />

        {/* COPYRIGHT TEXT */}
        <p className="font-manrope font-normal text-sm text-white  text-center mt-16 opacity-[0.8]">
          © 2022 elibeno.All right reserved
        </p>
      </div>
    </section>
  );
};

export default Footer;
