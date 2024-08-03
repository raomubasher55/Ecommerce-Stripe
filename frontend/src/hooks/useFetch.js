import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endPoint) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, [endPoint]);

  const fetchCategories = async () => {
    try {
      const params = {
        headers: {
          Authorization:
            "Bearer 672dc7f27deee4f4ba9105d37c1e6da0875a05d5860012018921cd1a30ec2dd5dcebcd34d6952f419a35d4da87e6334a9f6b5471ef042a3d3f21770057c2755e01914e0811fdeb9918f517c76c4c459e33cfa641df6bb71339230669768467059f8e1b1bfc4d5bf50ae0a8c50f1e5c2691ce0bef5cde464e74ccaae8d362be9d", // Replace with your actual key
        },
      };
      const response = await axios.get(`http://localhost:1337${endPoint}`,params
      );
      // console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return data;
};

export default useFetch;
