import { useState, useCallback } from 'react';

const useFetch = () => {
  const [error, setError] = useState(false);

  const httpRequest = useCallback((requestConfig, dataHandler) => {
    fetch(requestConfig.url, {
      method: requestConfig.method ? requestConfig.method : 'GET',
      headers: requestConfig.headers ? requestConfig.headers : {},
      body: JSON.stringify(requestConfig.body)
        ? JSON.stringify(requestConfig.body)
        : null,
    })
      .then(response => response.json())
      .then(data => dataHandler(data))
      .catch(error => {
        setError(error);
      });
  }, []);

  return {
    error: error,
    httpRequest: httpRequest,
  };
};

export default useFetch;
