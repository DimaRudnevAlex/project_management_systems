import { IIssue } from '@/@types/issues'
import { useAppDispatch } from '@/@types/store'
import UiButton from '@/components/uikit/Button'
import ItemLayout from '@/layouts/item-layout'
import { changeIssueIdForEdit } from '@/store/features/cofig-for-modal'
import { useModal } from '@/utils/hooks'
import { Avatar, Box, Typography } from '@mui/material'
import { FC, memo } from 'react'

const ItemIssues: FC<{ issue: IIssue }> = ({ issue }) => {
    const {
        title,
        priority,
        status,
        assignee: { avatarUrl, fullName },
        id,
        boardId,
    } = issue
    const dispatch = useAppDispatch()
    const { handleOpenModal } = useModal()

    const editIssue = (issueId: number, boardId: number) => {
        dispatch(changeIssueIdForEdit({ issueId, boardId, ToBoard: true }))
        handleOpenModal()
    }

    return (
        <ItemLayout>
            <Box display="flex" alignItems="center" gap={2} alignSelf="start">
                <Avatar alt={fullName} src={avatarUrl} title={fullName} />
                <Box>
                    <Typography variant="h3">{title}</Typography>
                    <Typography variant="body2">
                        Приоретет: {priority} | Статус: {status}
                    </Typography>
                </Box>
            </Box>
            <UiButton
                text="Редактировать"
                onClick={() => editIssue(id, boardId)}
            />
        </ItemLayout>
    )
}

export default memo(ItemIssues)
