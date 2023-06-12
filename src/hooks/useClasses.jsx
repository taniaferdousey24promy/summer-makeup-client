import React, { useEffect, useState } from "react";

const useClasses = () => {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(
      "https://summer-makeup-server-taniaferdousey24promy.vercel.app/allclasses"
    )
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
        setLoading(false);
      });
  }, []);

  return [classes, loading];
};

export default useClasses;
