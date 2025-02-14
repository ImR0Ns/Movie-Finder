import { useEffect, useState } from "react";

export function useGetData(url = "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1") {
  
  
  if(url == ""){
    url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
  }

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDY0YjVhOGJlNjczMTdhZjQyMzNkY2ExMjY1ZDBjZCIsIm5iZiI6MTcyNDM2OTgzMC44MzY3NDcsInN1YiI6IjY2YzdjYWY0MjYzMDczYWFlZmQxYTNlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fAD47jbLVFcFjfvDvMUi4K3OeB2xXP06vAuiNbZjSTI'
          }
        });
        const fData = await response.json();
        setData(fData);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]); //everytime url changes, we fetch again

  return { data, loading };
}
