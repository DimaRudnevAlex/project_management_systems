//Api
import { IMenuItemToSelect } from '@/@types/issues'

export interface IApiGetBoards {
    data: IBoard[]
    menuItem: IMenuItemToSelect[]
}

export interface IBoard {
    id: number
    name: string
    description: string
    taskCount: number
}
