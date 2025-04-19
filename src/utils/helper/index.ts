import { IFormData } from '@/@types/form'
import { GetOneIssue, IBoard, IIssue, IMenuItemToSelect } from '@/@types/issues'
import { IssuesState } from '@/@types/store'

export const uniqueArrayBoardsById = (arr: IBoard[]) => {
    const map = new Map(
        arr.map(({ boardId, boardName }) => [
            boardId,
            { id: boardId, value: boardName },
        ]),
    )
    return Array.from(map.values())
}

export const ArrayFromObjIssuesStatus = (statuses: {
    [key: string]: string
}): IMenuItemToSelect[] => {
    return Object.values(statuses).map((status) => ({
        id: status,
        value: status,
    }))
}
// Простите за эту портянку, но я хочу при одной итерации отфильтровать массив,
// можно было сделать 3 прохода по массиву O(3n) - более четаемый код.
export const issuesListFiltered = (
    data: IIssue[],
    filterOption: IssuesState,
) => {
    return data.filter(({ status, boardId, title, assignee: { fullName } }) => {
        if (
            title.toLowerCase().includes(filterOption.search.toLowerCase()) ||
            fullName.toLowerCase().includes(filterOption.search.toLowerCase())
        ) {
            if (
                status === filterOption.filterByStatus ||
                filterOption.filterByStatus === ''
            ) {
                if (
                    boardId === filterOption.filterByBoardId ||
                    filterOption.filterByBoardId === null
                ) {
                    return true
                }
            }
        }
        return false
    })
}

export const createContainer = (options: {
    id: string
    mountNode?: HTMLElement
}) => {
    if (document.getElementById(options.id)) return

    const { id, mountNode = document.body } = options

    const portalContainer = document.createElement('div')

    portalContainer.setAttribute('id', id)
    mountNode.prepend(portalContainer)
}

export const defaultValueForModal = (
    data: GetOneIssue | undefined,
    boardId: number | null,
) => {
    if (!data || !boardId) {
        return {
            assignee: {
                id: '',
            },
            priority: '',
            status: '',
            description: '',
            boardId: '',
            title: '',
        }
    }
    return {
        ...data,
        boardId,
    }
}

export const createBodyFromRequest = (
    issueId: number | null,
    formData: IFormData,
) => {
    if (!issueId) {
        const body = {
            assigneeId: +formData.assigneeId,
            boardId: +formData.boardId,
            description: formData.description,
            priority: formData.priority,
            title: formData.title,
        }
        return { issueId, body }
    }
    const body = {
        assigneeId: +formData.assigneeId,
        description: formData.description,
        priority: formData.priority,
        status: formData.status,
        title: formData.title,
    }
    return { issueId, body }
}
