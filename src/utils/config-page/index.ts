export const configPage = {
    BOARDS: 'boards',
    BOARD_BY_ID: 'board/:id',
    LINK_TO_BOARD_BY_ID: '/board/',
    ISSUES: 'issues',
} as const

export type configPage = (typeof configPage)[keyof typeof configPage]
