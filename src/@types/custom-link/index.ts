import { ReactNode } from 'react'

import { configPage } from '../../utils/config-page'

export interface ICustomLink {
    children: ReactNode
    to: configPage
}
