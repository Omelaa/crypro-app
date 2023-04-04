import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': 'd759b44e4dmsh8f43df5958a46f5p172a49jsncd784959e778'
};

const baseUrl = 'https://coinranking1.p.rapidapi.com'


export const cryptosApi = createApi({
    ReducerPath: "cryptosApi",
    baseQuery: fetchBaseQuery({baseUrl, headers: cryptoApiHeaders}),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: () => "/coins"
        }),
    }),
});

export const {useGetCryptosQuery} = cryptosApi;