import axios from "axios";

export default function server({ data }) {
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

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
export const getServerSideProps = async (ctx) => {
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
