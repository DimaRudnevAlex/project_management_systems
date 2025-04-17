import { ReactNode } from 'react'

export interface IListLayout {
    children: ReactNode
    isLoading: boolean
    isError: boolean
}
