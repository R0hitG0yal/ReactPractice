import axios from "axios";
import { useEffect, useState } from "react";

interface item {
  id: string;
  title: string;
}

const Scroll = () => {
  const [data, setData] = useState<item[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [scrollPercentage, setScrollPercentage] = useState(0);

  async function getProducts() {
    try {
      const res = await axios.get("https://dummyjson.com/products");
      setData(res.data.products);
      setLoading(false);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setLoading(false);
      setError(err.message);
    }
  }

  useEffect(() => {
    setLoading(true);
    getProducts();
  }, []);

  function handleScrollPercentage() {
    setScrollPercentage(
      ((window.scrollY || document.documentElement.scrollTop) /
        (document.documentElement.scrollHeight -
          document.documentElement.clientHeight)) *
        100
    );
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    return () => window.removeEventListener("scroll", () => {});
  }, [scrollPercentage]);

  if (loading) return <div>Loading content! Please wait.</div>;

  if (error) return <div>Error occurred! {error}</div>;

  return (
    <div
      style={{
        width: "100vw",
      }}
    >
      <div
        style={{
          position: "fixed",
          top: "0rem",
          backgroundColor: "violet",
          width: "100vw",
        }}
      >
        <p>Custom scroll Indicator</p>
        <div
          style={{
            height: "5px",
            backgroundColor: "red",
            width: `${scrollPercentage}%`,
          }}
        ></div>
      </div>
      <div style={{ marginTop: "70px" }}>
        {data && data.length > 0
          ? data.map((item) => {
              return <p key={item.id}>{item.title}</p>;
            })
          : null}
      </div>
    </div>
  );
};

export default Scroll;
