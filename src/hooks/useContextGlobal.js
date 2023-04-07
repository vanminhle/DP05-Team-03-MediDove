import { useContext } from "react";
import { DatasContext } from "../context/ContextContainer"

const useGlobalContext = () => {
    const value = useContext(DatasContext);
    return value;
}


export default useGlobalContext;