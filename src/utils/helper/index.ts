import { IBoard, IMenuItemToSelect } from '@/@types/issues'

export const uniqueArrayBoards = (arr: IBoard[]) => {
    const map = new Map(
        arr.map(({ boardId, boardName }) => [
            boardId,
            { id: boardId, value: boardName },
        ]),
    )
    return Array.from(map.values())
}

export const IssuesStatusList = (issueStatus: {
    [key: string]: string
}): IMenuItemToSelect[] => {
    return Object.values(issueStatus).map((elem) => ({
        id: elem ? elem : 'None',
        value: elem,
    }))
}
