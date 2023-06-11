// @ts-nocheck
import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from "./store";

interface Imoveis {
  id: string,
  codigo: string,
  video: string,
  cidade: string,
  preco: number,
  para: number,
  tipo: number,
  quartos: number,
  banheiros: number,
  garagem: number,
  area: number,
  imagens: string[],
  endereco: string,
  descricao: string,
}

export interface StateProps {
  imoveis: Imoveis[]
  filter: {
    tipo: string,
    categoria: string,
    cidade: string,
    texto: string
  },
  loading: boolean
}

export const initialState: StateProps = {
  imoveis: [],
  filter: {
    tipo: '',
    categoria: '',
    cidade: '',
    texto: ''
  },
  loading: false,
};

export const State = createSlice({
  name: "state",
  initialState,
  reducers: {
    setImoveis(state, action) {
      state.imoveis = action.payload;
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    extraReducers: {
      [HYDRATE]: (state: any, action: any): any => {
        return {
          ...state,
          ...action.payload.state,
        };
      },
    },
  },
});

export const { setImoveis, setLoading, setFilter } = State.actions;

export const getImoveis = (state: AppState) => state?.state?.imoveis;
export const getFilter = (state: AppState) => state?.state?.filter;
export const getLoading = (state: AppState) => state?.state?.loading;

export default State.reducer;