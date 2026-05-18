import { createContext, useState, useEffect } from "react";

export const PageIndexContext = createContext();

function PageIndexContextProvider({ children }) {
  const [state, updateIndex] = useState(0);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const page = queryParams.get("page");
    // allows to link to an exact page with the URL qury http://{url}/?page=3
    if (page && page != state) updateIndex(page);
  }, []);

  return (
    <PageIndexContext.Provider value={{ state, updateIndex }}>
      {children}
    </PageIndexContext.Provider>
  );
}

export default PageIndexContextProvider;
