//Api

export interface IApiGetIssues {
    data: IIssue[]
}
export interface IIssue {
    id: number
    title: string
    description: string
    priority: string
    status: string
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
export type IBoard = Pick<IIssue, 'boardId' | 'boardName'>
//UI
export interface IListIssues {
    data: IIssue[] | undefined
    isLoading: boolean
}
export interface IFilterIssues {
    boardNameList: IMenuItemToSelect[]
}
export interface IMenuItemToSelect {
    id: string | number
    value: string
}
