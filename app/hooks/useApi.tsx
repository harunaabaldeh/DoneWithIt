import { useState, useEffect } from "react";

interface Props {
  apiFunc: (...args: any[]) => Promise<any>;
}

const useApi = ({ apiFunc }: Props) => {
  const [data, setData] = useState<any>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    request();
  }, []);

  const request = async (...args: any[]) => {
    setLoading(true);
    const response = await apiFunc(...args);
    setLoading(false);

    setError(!response.ok);
    setData(response.data);
    return response;
  };

  return { data, error, loading, request };
};
export default useApi;