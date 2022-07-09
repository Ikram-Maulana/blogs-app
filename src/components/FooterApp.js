import { Footer } from "flowbite-react";
import React from "react";

const FooterApp = () => {
  return (
    <Footer>
      <div className="w-full text-center py-4">
        <hr
          data-testid="footer-divider"
          className="w-full my-4 border-gray-200 sm:mx-auto dark:border-gray-700"
        ></hr>
        <Footer.Copyright href="#" by="Ikram™" year={2022} />
      </div>
    </Footer>
  );
};

export default FooterApp;
