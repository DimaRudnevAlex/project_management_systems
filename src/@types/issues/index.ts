//Api
import { ISSUE_STATUS } from '@/utils/constants'

export interface IApiGetIssues {
    data: IIssue[]
}
export interface IApiGetUsers {
    data: IUsers[]
}
export interface IApiOneGetIssue {
    data: GetOneIssue
}
export interface IIssue {
    id: number
    title: string
    description: string
    priority: string
    status: ISSUE_STATUS
    assignee: IAssignee
    boardId: number
    boardName: string
}
export interface IAssignee {
    id: number
    fullName: string
    email: string
    avatarUrl: string
}
export interface IUsers extends IAssignee {
    description: string
    teamId: number
    teamName: string
    tasksCount: number
}
export type IBoard = Pick<IIssue, 'boardId' | 'boardName'>

// При запросе информации об одной задаче нет данных об boardId, только boardName(
export interface GetOneIssue {
    id: number
    title: string
    description: string
    priority: string
    status: string
    assignee: IAssignee
    boardName: string
}

//UI
export interface IListIssues {
    data: IIssue[] | undefined
    isLoading: boolean
    isError: boolean
}
export interface IFilterIssues {
    boardNameList: IMenuItemToSelect[]
}
export interface IMenuItemToSelect {
    id: string | number
    value: string
}
