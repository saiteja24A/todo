import { createContext, useState, useContext } from "react";

// Create the context
const ProjectContext = createContext();

// Create a provider component
export const ProjectProvider = ({ children }) => {
  const [projectId, setProjectId] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isNew, setIsNew] = useState(false);
  const [edit, setEdit] = useState(false);

  return (
    <ProjectContext.Provider
      value={{
        projectId,
        setProjectId,
        isOpen,
        setIsOpen,
        isNew,
        setIsNew,
        edit,
        setEdit,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

// Custom hook to use the context
export const useProjectContext = () => {
  return useContext(ProjectContext);
};
