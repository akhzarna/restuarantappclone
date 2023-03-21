import { useEffect, useState } from "react";
import axios from "axios";

const getApiHook = () => {
    
    const [data, setData] = useState(null);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState("");
    
    const getData = async (url, token = null) => {
      await axios
        .get(
          url,
          token
            ? {
                headers: {
                  Accept: "application/json",
                  Authorization: token,
                },
              }
            : null
        )
        .then(function (response) {
          console.log("Url is =", url);
          console.log("Audio response is =", response.data);
          console.log("Response is: ", response.status);
          console.log("Auth token is: ", token);
          console.log("Searching Crash: ", response.data.error);
          console.log("Searching Crash: ", response.data.data);
          setError(response.data.error);
          setData(response.data.data);
          setLoading(false);
          return response.data.data;
        })
        .catch(function (error) {
          console.log(error);
        });
      return data;
    };
  
    return { data, loading, error, getData };

  };
  
  export default getApiHook;