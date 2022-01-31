import { useDispatch } from "react-redux";
import { RetrieveData } from "../state/actions/index";

export default function useResource() {
  const dispatch = useDispatch();
  const getResource = async (url) => {
    await dispatch(RetrieveData());
  };
  return {
    getResource,
  };
}
