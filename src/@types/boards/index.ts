//Api
export interface IApiGetBoards {
    data: IBoard[]
}

export interface IBoard {
    id: number
    name: string
    description: string
    taskCount: number
}
