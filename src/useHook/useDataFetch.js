import { useState, useLayoutEffect } from "react";
import axios from "axios";

export default function useDataFetch(url) {
  const [data, setData] = useState(["불러오는중"]);
  useLayoutEffect(() => {
    if (!url) return;
    const fetchData = async () => {
      const response = await axios.get(url);
      const data = response.data;
      setData(data);
    };
    fetchData();
  }, [url]);

  return data;
}
