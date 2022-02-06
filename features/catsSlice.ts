import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootSate } from "../store/store";

export interface cat {
    color: string,
    description: string,
    email: string,
    favoured: Boolean,
    gender: string,
    id: number
    image: {url: string, alt: string},
    name: string,
    phone: string
};

interface IinitialState {
    loading: Boolean,
    cats: cat[],
    cat: cat,
    error: Boolean
};

const initialState: IinitialState = {
    loading: false,
    cats: [{
        color: '',
        description: '',
        email: '',
        favoured: false,
        gender: '',
        id: 0,
        image: {url: '', alt: ''},
        name: '',
        phone: ''
    }],
    cat: {
        color: '',
        description: '',
        email: '',
        favoured: false,
        gender: '',
        id: 0,
        image: {url: '', alt: ''},
        name: '',
        phone: ''
    },
    error: false
};

export const getCats = createAsyncThunk("cats/getCats", async () => {
    const res = await axios.get("/api/cats");
    // console.log( res.data ,'api res')
    return res.data;
});

export const getACat = createAsyncThunk("cats/getCat", async (id: number | string) => {
    const res = await axios.get(`/api/cats/${id}`);
    return res.data;
});


export const catsSlice = createSlice({
    name: "cats",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getCats.pending, state => {
                state.loading = true;
            });
        builder.addCase(getCats.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.cats = payload;
            });
        builder.addCase(getCats.rejected, state => {
                state.loading = false;
                state.error = true;
            });
        builder.addCase(getACat.pending, (state) => {
                state.loading = true;
            });
        builder.addCase(getACat.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.cat = payload;
            });
        builder.addCase(getACat.rejected, state => {
                state.loading = false;
                state.error = true;
            });
      },
});


// export const {  } = catsSlice.actions;
export default catsSlice.reducer;