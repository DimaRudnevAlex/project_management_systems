import {
    GetOneIssue,
    IApiGetIssues,
    IApiGetUsers,
    IApiOneGetIssue,
    IApiResponseIssues,
    IMenuItemToSelect,
} from '@/@types/issues'
import { uniqueArrayBoardsById } from '@/utils/helper'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const issuesApi = createApi({
    reducerPath: 'Api',
    baseQuery: fetchBaseQuery({
        // Я добавил API_URL в .env, но на всякий случай оставлю так, хотя понимаю что личные данные лучше не кидать в гит-хаб
        // Но забыл добавить в .gitignore(
        baseUrl: import.meta.env.VITE_API_URL ?? 'http://localhost:8080/api/v1',
        headers: { accept: 'application/json' },
    }),
    tagTypes: ['Issue', 'Board', 'Issues', 'Boards'],
    endpoints: (builder) => ({
        getAllIssues: builder.query<IApiResponseIssues, void>({
            query: () => '/tasks',
            transformResponse: (
                response: IApiGetIssues,
            ): IApiResponseIssues => {
                return {
                    data: response.data,
                    boardNameList: uniqueArrayBoardsById(response.data),
                }
            },
            providesTags: ['Issues'],
        }),
        getAllUsers: builder.query<IMenuItemToSelect[], void>({
            query: () => '/users',
            transformResponse: (
                response: IApiGetUsers,
            ): IMenuItemToSelect[] => {
                return response.data.map((item) => ({
                    id: item.id,
                    value: item.fullName,
                }))
            },
        }),
        getIssueById: builder.query<GetOneIssue, number>({
            query: (id) => `/tasks/${id}`,
            transformResponse: (response: IApiOneGetIssue): GetOneIssue => {
                return response.data
            },
            providesTags: ['Issue'],
        }),
        addNewIssueOrUpdateIssue: builder.mutation({
            query: ({ issueId, body }) => {
                if (issueId)
                    return {
                        url: `/tasks/update/${issueId}`,
                        headers: { 'Content-Type': 'application/json' },
                        method: 'PUT',
                        body: JSON.stringify(body),
                    }
                return {
                    url: `/tasks/create`,
                    headers: { 'Content-Type': 'application/json' },
                    method: 'POST',
                    body: JSON.stringify(body),
                }
            },
            invalidatesTags: ['Issue', 'Boards', 'Issues', 'Board'],
        }),
    }),
})

export const {
    useGetAllIssuesQuery,
    useGetAllUsersQuery,
    useGetIssueByIdQuery,
    useAddNewIssueOrUpdateIssueMutation,
} = issuesApi
