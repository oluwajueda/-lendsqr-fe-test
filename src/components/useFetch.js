import { useState, useEffect } from "react";
import paginate from "./utils";

const url = "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users";

export const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    setData(paginate(data));
    setLoading(false);
  };

  useEffect(() => {
    getUsers();
  }, []);
  return { loading, data };
};
