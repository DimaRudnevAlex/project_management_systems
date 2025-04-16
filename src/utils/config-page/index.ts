export const configPage = {
    BOARDS: 'boards',
    BOARD_BY_ID: 'board/:id',
    ISSUES: 'issues',
} as const

export type configPage = (typeof configPage)[keyof typeof configPage]
