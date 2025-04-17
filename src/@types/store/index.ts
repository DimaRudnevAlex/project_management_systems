import { issueStatus } from '@/utils/constants'

export interface IssuesState {
    search: string
    filterByBoardId: number | null
    filterByStatus: issueStatus | ''
}
