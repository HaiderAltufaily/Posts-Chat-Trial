import { setDoc } from "@firebase/firestore";
import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = ({ url, method = "get", body = null }, applyData) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  //   console.log(method, url, body);
  async function getData() {
    await axios[method](url, body)
      .then((data) => {
        setData(data.data);
        applyData(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }
  useEffect(() => {
    getData();
  }, []);
  return {
    isLoading,
    error,
    data,
    getData,
  };
};
export default useFetch;
