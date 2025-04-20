import {
    IApiGetBoardById,
    IApiGetBoards,
    IBoardForSinglePage,
} from '@/@types/boards'
import { ISSUE_STATUS } from '@/utils/constants'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const boardsApi = createApi({
    reducerPath: 'boardsApi',
    baseQuery: fetchBaseQuery({
        // Я добавил API_URL в .env, но на всякий случай оставлю так, хотя понимаю что личные данные лучше не кидать в гит-хаб
        // Но забыл добавить в .gitignore
        baseUrl: import.meta.env.VITE_API_URL ?? 'http://localhost:8080/api/v1',
        headers: { accept: 'application/json' },
    }),
    tagTypes: ['Board'],
    endpoints: (builder) => ({
        getAllBoards: builder.query<IApiGetBoards, void>({
            query: () => '/boards',
            transformResponse: (
                response: Pick<IApiGetBoards, 'data'>,
            ): IApiGetBoards => {
                return {
                    data: response.data,
                    menuItem: response.data.map((item) => ({
                        id: item.id,
                        value: item.name,
                    })),
                }
            },
        }),
        getBoardById: builder.query<IBoardForSinglePage, string>({
            query: (id) => `/boards/${id}`,
            transformResponse: (
                response: IApiGetBoardById,
                _m,
                arg,
            ): IBoardForSinglePage => {
                const data = [
                    {
                        status: ISSUE_STATUS.BACKLOG,
                        cards: response.data.filter((board) => {
                            return board.status === ISSUE_STATUS.BACKLOG
                        }),
                    },
                    {
                        status: ISSUE_STATUS.IN_PROGRESS,
                        cards: response.data.filter((board) => {
                            return board.status === ISSUE_STATUS.IN_PROGRESS
                        }),
                    },
                    {
                        status: ISSUE_STATUS.DONE,
                        cards: response.data.filter((board) => {
                            return board.status === ISSUE_STATUS.DONE
                        }),
                    },
                ]
                return { boardId: arg, data }
            },
            providesTags: ['Board'],
        }),
        updateStatusDrag: builder.mutation({
            query: ({
                issueId,
                status,
            }: {
                issueId: number
                status: ISSUE_STATUS
            }) => {
                return {
                    url: `/tasks/updateStatus/${issueId}`,
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ status }),
                }
            },
            invalidatesTags: ['Board'],
        }),
    }),
})

export const {
    useGetAllBoardsQuery,
    useGetBoardByIdQuery,
    useUpdateStatusDragMutation,
} = boardsApi
