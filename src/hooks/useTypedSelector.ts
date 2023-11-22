import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../features/reducers/rootReducer";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;