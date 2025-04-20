import {
    IApiGetBoardById,
    IApiGetBoards,
    IBoardForSinglePage,
} from '@/@types/boards'
import { issuesApi } from '@/store/services/issuesApi'
import { ISSUE_STATUS } from '@/utils/constants'

export const boardsApi = issuesApi.injectEndpoints({
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
            providesTags: ['Boards'],
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
            invalidatesTags: ['Issues', 'Issue', 'Board'],
        }),
    }),
})

export const {
    useGetAllBoardsQuery,
    useGetBoardByIdQuery,
    useUpdateStatusDragMutation,
} = boardsApi
