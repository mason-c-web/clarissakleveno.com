import { createContext, useState } from "react";

export const PageIndexContext = createContext();

function PageIndexContextProvider({ children }) {
  const [state, updateIndex] = useState(0);

  return (
    <PageIndexContext.Provider value={{ state, updateIndex }}>
      {children}
    </PageIndexContext.Provider>
  );
}

export default PageIndexContextProvider;
