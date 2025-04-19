import { IModalContext } from '@/@types/context'
import { GetOneIssue } from '@/@types/issues'
import { useAppDispatch } from '@/@types/store'
import {
    changeFilterByNameBoard,
    changeFilterByStatus,
    changeFilterSearch,
} from '@/store/features/isssues/isssuesSlice.ts'
import { ISSUE_STATUS } from '@/utils/constants'
import { SelectChangeEvent } from '@mui/material'
import { ChangeEvent, createContext, useContext } from 'react'

export const useChangeFilterOption = () => {
    const dispatch = useAppDispatch()
    const handleChangeStatus = (event: SelectChangeEvent) => {
        dispatch(changeFilterByStatus(event.target.value as ISSUE_STATUS))
    }
    const handleChangeBoardName = (event: SelectChangeEvent) => {
        dispatch(
            changeFilterByNameBoard(
                event.target.value === '' ? null : +event.target.value,
            ),
        )
    }
    const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeFilterSearch(event.target.value))
    }
    return { handleChangeStatus, handleChangeBoardName, handleChangeSearch }
}

export const ModalContext = createContext<IModalContext | null>(null)

export const useModal = () => useContext(ModalContext)!

export const defaultValueForModal = (
    data: GetOneIssue | undefined,
    ArrayMenuItemsBoards: { id: any; value: any }[],
) => {
    if (!data || !ArrayMenuItemsBoards.length) {
        return {
            assigneeId: '',
            priority: '',
            status: '',
            description: '',
            boardId: '',
            title: '',
        }
    }
    return {
        ...data,
        assigneeId: String(data?.assignee.id),
        boardId: ArrayMenuItemsBoards.find(
            (item) => item.value === data.boardName,
        )?.id,
    }
}
