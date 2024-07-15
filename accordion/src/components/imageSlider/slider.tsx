import axios from "axios";
import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./styles.css";

interface Iimage {
  author: string;
  download_url: string;
  height: number;
  id: string;
  url: string;
  width: number;
}

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const [images, setImages] = useState<Iimage[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handlePrevious() {
    if (current === 0) setCurrent(images.length - 1);
    else setCurrent(current - 1);
  }

  function handleNext() {
    if (current === images.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  }

  async function getImages() {
    try {
      setLoading(true);
      const res = await axios.get("https://picsum.photos/v2/list");
      setImages(res.data);
      console.log(res.data);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setLoading(false);
      setError(err.message);
    }
  }

  useEffect(() => {
    getImages();
    setLoading(false);
  }, []);

  if (loading) return <p>Loading Please Wait.</p>;

  if (error !== null) return <p>Error occurred : {error}.</p>;

  return (
    <div className="container">
      <BsArrowLeftCircleFill
        onClick={handlePrevious}
        className="arrow arrow-left"
      />

      {images || images.length
        ? images.map((image, index) => {
            return (
              <img
                // style={{ width: "500px", height: "500px" }}
                key={image.id}
                alt={image.download_url}
                src={image.download_url}
                className={index === current ? "current-image" : "none"}
              ></img>
            );
          })
        : null}

      <BsArrowRightCircleFill
        onClick={handleNext}
        className="arrow arrow-right"
      />
      <span className="circle-indicators">
        {images || images.length
          ? images.map((_, index) => {
              return (
                <button
                  onClick={() => setCurrent(index)}
                  key={index}
                  className={
                    index === current
                      ? "active current-indicator"
                      : "current-indicator"
                  }
                ></button>
              );
            })
          : null}
      </span>
    </div>
  );
};

export default ImageSlider;
