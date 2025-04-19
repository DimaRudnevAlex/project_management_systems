import {
    GetOneIssue,
    IApiGetIssues,
    IApiGetUsers,
    IApiOneGetIssue,
    UserData,
} from '@/@types/issues'
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
        getAllUsers: builder.query<UserData[], void>({
            query: () => '/users',
            transformResponse: (response: IApiGetUsers): UserData[] => {
                return response.data.map(({ id, fullName }) => ({
                    id,
                    fullName,
                }))
            },
        }),
        getIssueById: builder.query<GetOneIssue, number>({
            query: (id) => `/tasks/${id}`,
            transformResponse: (response: IApiOneGetIssue): GetOneIssue => {
                return {
                    id: response.data.id,
                    assignee: response.data.assignee,
                    boardName: response.data.boardName,
                    description: response.data.description,
                    priority: response.data.priority,
                    title: response.data.title,
                    status: response.data.status,
                }
            },
        }),
    }),
})

export const {
    useGetAllIssuesQuery,
    useGetAllUsersQuery,
    useGetIssueByIdQuery,
} = issuesApi
