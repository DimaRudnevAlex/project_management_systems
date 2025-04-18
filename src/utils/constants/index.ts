import { ArrayFromObjIssuesStatus } from '@/utils/helper'

export const ISSUE_STATUS = {
    BACKLOG: 'Backlog',
    DONE: 'Done',
    IN_PROGRESS: 'InProgress',
} as const

export const PRIORITIES = {
    HIGH: 'High',
    MEDIUM: 'Medium',
    LOW: 'Low',
} as const

export type ISSUE_STATUS = (typeof ISSUE_STATUS)[keyof typeof ISSUE_STATUS]

export const LIST_ISSUE_STATUS = ArrayFromObjIssuesStatus(ISSUE_STATUS)
export const LIST_PRIORITIES = ArrayFromObjIssuesStatus(PRIORITIES)

export const ERRORS = {
    ERROR_LOADING: 'Не удалось загрузить данные (',
} as const
