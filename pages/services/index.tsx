import type { NextPage } from "next";
import Head from "next / head";
import Link from "next / link";

const index: NextPage = () = > {
  return (
    <div>;
      <Head>;
        <title>Index - Zion Tech Solutions< / title>;
        <meta name = "description" content = "Index service" / >;
      < / Head>;

      <main>;
        <h1>Index< / h1>;
        <p>Service details coming soon...< / p>;
        <Link href = " / services">Back to Services< / Link>;
      < / main>;
    < / div>;
  );
};

export default index;
