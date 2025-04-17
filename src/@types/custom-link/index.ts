import { configPage } from '@/utils/config-page'
import { ReactNode } from 'react'

export interface ICustomLink {
    children: ReactNode
    to: configPage
}
