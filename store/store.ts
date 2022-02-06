import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import catsReducer from '../features/catsSlice';


export const store = configureStore({
    reducer: {
        cats: catsReducer
    }
})

export type RootSate = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

// export type AppThunk<ReturnType = void> = ThunkAction<
//    ReturnType,
//    RootState,
//    unknown,
//    Action<string>
//  >;

export const useAppDispatch =  () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootSate> = useSelector;