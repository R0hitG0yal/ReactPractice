import axios from "axios";
import { useEffect, useState } from "react";
import "./styles.css";

const LoadMore = ({ url, limit }: { url: string; limit: number }) => {
  const [numberOfItems, setNumberOfItems] = useState(0);
  const [items, setItems] = useState([{}]);
  const [disableButton, setDisableButton] = useState(false);

  async function fetchData(url: string) {
    const res = await axios.get(
      `${url}?page=1&limit=${limit}&skip=${
        numberOfItems == 0 ? 0 : numberOfItems * 20
      }`
    );
    const data = await res.data;

    if (data && data.products && data.products.length) {
      setItems((prevData) => [...prevData, ...data.products]);
    }
  }

  useEffect(() => {
    if (url !== "") fetchData(url);
  }, [url, numberOfItems]);

  useEffect(() => {
    if (items && items.length == 100) setDisableButton(true);
  }, [items]);

  return (
    <div className="container">
      <div className="product-container">
        {items && items.length !== 0
          ? items.map((item) => {
              return (
                <div className="product" key={item.id}>
                  <img alt={item.title} src={item.thumbnail} />
                  <p>{item.title}</p>
                </div>
              );
            })
          : null}
      </div>
      <div className="button-container">
        <button
          disabled={disableButton}
          onClick={() => setNumberOfItems(numberOfItems + 1)}
        >
          Load More Items
        </button>
        {disableButton ? <p>You have reached 100 products</p> : null}
      </div>
    </div>
  );
};

export default LoadMore;
