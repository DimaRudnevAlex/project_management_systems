//Api
import { IIssue, IMenuItemToSelect } from '@/@types/issues'
import { ISSUE_STATUS } from '@/utils/constants'

export interface IApiGetBoards {
    data: IBoard[]
    menuItem: IMenuItemToSelect[]
}
export interface IApiGetBoardById {
    data: IIssue[]
}

export interface IBoard {
    id: number
    name: string
    description: string
    taskCount: number
}

export type IBoardForSinglePage = {
    boardId: string
    data: IOneBoard[]
}

export interface IOneBoard {
    status: ISSUE_STATUS
    cards: IIssue[]
}

export interface IPropsDrag {
    data: IOneBoard[]
    boardId: number
}
