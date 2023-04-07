import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


const cryptoNewsApiHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': 'd759b44e4dmsh8f43df5958a46f5p172a49jsncd784959e778',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
};

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

export const cryptoNewsApi = createApi({
    reducerPath: "cryptoNewsApi",
    baseQuery: fetchBaseQuery({baseUrl, headers: cryptoNewsApiHeaders}),
    endpoints: (builder) => ({
        getNews: builder.query({
            query: ({newsCategory, count}) =>`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&limit=${count}`,
        })
    })
});

export const {useGetNewsQuery} = cryptoNewsApi;