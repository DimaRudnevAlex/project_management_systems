import { IApiGetIssues } from '@/@types/issues'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const issuesApi = createApi({
    reducerPath: 'issuesApi',
    baseQuery: fetchBaseQuery({
        // Я добавил API_URL в .env, но на всякий случай оставлю так, хотя понимаю что личный данные лучше не кидать в гитхаб
        baseUrl: import.meta.env.VITE_API_URL ?? 'http://localhost:8080/api/v1',
        headers: { accept: 'application/json' },
    }),
    endpoints: (builder) => ({
        getAllIssues: builder.query<IApiGetIssues, void>({
            query: () => '/tasks',
        }),
    }),
})

export const { useGetAllIssuesQuery } = issuesApi
