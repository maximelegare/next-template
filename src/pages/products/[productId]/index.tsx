import React, { useEffect } from "react";
import { Content } from "~/components/pages/productId/ProductIdContent";

import { useRouter } from "next/router";

import { type NextPage } from "next";

const Index: NextPage = () => {


  const { query } = useRouter();

  useEffect(() => {
    console.log("productId:", query.productId);
  }, [query]);


  return (
    <>
      <Content />
    </>
  );
};

export default Index;
