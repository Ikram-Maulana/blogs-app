import { Footer } from "flowbite-react";
import React from "react";

const FooterApp = () => {
  return (
    <Footer>
      <div className="w-full text-center py-4">
        <Footer.Copyright href="#" by="Ikram™" year={2022} />
      </div>
    </Footer>
  );
};

export default FooterApp;
