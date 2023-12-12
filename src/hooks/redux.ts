import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";

export const useAppDispatch = () => useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector