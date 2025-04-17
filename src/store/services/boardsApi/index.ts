import { IApiGetBoards } from '@/@types/boards'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const boardsApi = createApi({
    reducerPath: 'boardsApi',
    baseQuery: fetchBaseQuery({
        // Я добавил API_URL в .env, но на всякий случай оставлю так, хотя понимаю что личный данные лучше не кидать в гитхаб
        baseUrl: import.meta.env.VITE_API_URL ?? 'http://localhost:8080/api/v1',
        headers: { accept: 'application/json' },
    }),
    endpoints: (builder) => ({
        getAllBoards: builder.query<IApiGetBoards, void>({
            query: () => '/boards',
        }),
    }),
})

export const { useGetAllBoardsQuery } = boardsApi
