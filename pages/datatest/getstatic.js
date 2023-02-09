import axios from "axios";

export default function getstatic({ data }) {
  console.log("data > ", data);
  return (
    <>
      <div>
        {data.map((datum, i) => {
          return <div key={i}>{datum.brand}</div>;
        })}
      </div>
    </>
  );
}

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
export const getStaticProps = async (ctx) => {
  const apiUrl =
    "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

  const res = await axios.get(apiUrl);
  const data = res.data;

  console.log("data > ", data);

  console.log();

  return {
    props: { data },
  };
};
