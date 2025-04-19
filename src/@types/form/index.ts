import { IMenuItemToSelect } from '@/@types/issues'
import { Control } from 'react-hook-form'

export interface IFormData {
    assigneeId: string
    boardId: string
    description: string
    priority: string
    title: string
    status: string
}
export interface IFormSelect {
    menuItems: IMenuItemToSelect[]
    control: Control<IFormData, any, IFormData>
    label: string
    name: keyof IFormData
    disabled?: boolean
    defaultValue?: string
}
