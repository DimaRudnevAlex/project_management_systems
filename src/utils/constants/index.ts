export const issueStatus = {
    NONE: '',
    BACKLOG: 'Backlog',
    DONE: 'Done',
    IN_PROGRESS: 'InProgress',
} as const

export type issueStatus = (typeof issueStatus)[keyof typeof issueStatus]
