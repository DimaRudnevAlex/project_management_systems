import { IOneBoard, IPropsDrag } from '@/@types/boards'
import { IIssue } from '@/@types/issues'
import { useUpdateStatusDragMutation } from '@/store/services/boardsApi'
import { tokens } from '@/theme'
import { Avatar, Box, Grid, Typography, useTheme } from '@mui/material'
import React, { FC, useState } from 'react'

const DragOnDropBoard: FC<IPropsDrag> = ({ data }) => {
    const [boards, setBoards] = useState<IOneBoard[]>(
        JSON.parse(JSON.stringify(data)),
    )
    // TODO
    const [updateStatus] = useUpdateStatusDragMutation()

    const [currentBoard, setCurrentBoard] = useState<IOneBoard | null>(null)
    const [currentItem, setCurrentItem] = useState<IIssue | null>(null)
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        const target = e.target as HTMLDivElement
        const parent = target.closest('.item') as HTMLElement
        if (parent) {
            parent.style.boxShadow = `0 15px 15px ${colors.accentColor}`
        }
    }

    const dragLeaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        const target = e.target as HTMLDivElement
        const parent = target.closest('.item') as HTMLElement
        if (parent) {
            parent.style.boxShadow = 'none'
        }
    }

    const dragStartHandler = (
        _e: React.DragEvent<HTMLDivElement>,
        board: IOneBoard,
        item: IIssue,
    ) => {
        setCurrentBoard(board)
        setCurrentItem(item)
    }

    const dragEndHandler = (e: React.DragEvent<HTMLDivElement>) => {
        const target = e.target as HTMLDivElement
        const parent = target.closest('.item') as HTMLElement
        if (parent) {
            parent.style.boxShadow = 'none'
        }
    }

    const dropHandler = async (
        e: React.DragEvent<HTMLDivElement>,
        board: IOneBoard,
        item: IIssue,
    ) => {
        e.preventDefault()
        e.stopPropagation()
        if (!currentBoard || !currentItem) return
        const currentIndex = currentBoard?.cards.indexOf(currentItem as IIssue)
        try {
            if (currentIndex !== undefined && currentIndex !== -1) {
                currentBoard?.cards.splice(currentIndex, 1)
                const dropIndex = board.cards.indexOf(item)
                if (currentItem.status !== board.status) {
                    await updateStatus({
                        issueId: currentItem.id,
                        status: board.status,
                    }).unwrap()
                }
                currentItem.status = board.status
                board.cards.splice(dropIndex + 1, 0, currentItem as IIssue)
                setBoards(
                    boards.map((b) => {
                        if (b.status === board.status) {
                            return board
                        }
                        if (b.status === currentBoard.status) {
                            return currentBoard
                        }
                        return b
                    }),
                )
            }
        } catch (_e) {
            alert('Lol!')
        } finally {
            const target = e.target as HTMLDivElement
            const parent = target.closest('.item') as HTMLDivElement
            if (parent) {
                parent.style.boxShadow = 'none'
            }
        }
    }

    const dropCardHandler = async (
        e: React.DragEvent<HTMLDivElement>,
        board: IOneBoard,
    ) => {
        e.preventDefault()
        e.stopPropagation()
        try {
            if (!currentBoard || !currentItem) return
            if (currentItem.status !== board.status) {
                await updateStatus({
                    issueId: currentItem.id,
                    status: board.status,
                }).unwrap()
            }
            currentItem.status = board.status
            board.cards.push(currentItem)
            const currentIndex = currentBoard.cards.indexOf(currentItem)
            currentBoard.cards.splice(currentIndex, 1)
            setBoards(
                boards.map((b) => {
                    if (b.status === board.status) {
                        return board
                    }
                    if (b.status === currentBoard.status) {
                        return currentBoard
                    }
                    return b
                }),
            )
        } catch (_e) {
            alert('KEk')
        } finally {
            const target = e.target as HTMLDivElement
            const parent = target.closest('.item') as HTMLDivElement
            if (parent) {
                parent.style.boxShadow = 'none'
            }
        }
    }
    return (
        <Box display="flex" justifyContent="space-between" marginBlock={2}>
            {boards.map((board) => (
                <Box
                    width={400}
                    minHeight={500}
                    bgcolor={colors.gray.DEFAULT}
                    borderRadius={2}
                    paddingInline={1}
                    key={board.status}
                    onDragOver={(e) => dragOverHandler(e)}
                    onDrop={(e) => dropCardHandler(e, board)}
                >
                    <Typography textAlign="center" variant="h3" marginBlock={2}>
                        {board.status}
                    </Typography>
                    {board.cards.map((item) => (
                        <Box
                            className="item"
                            key={item.id}
                            width="100%"
                            minHeight={200}
                            borderRadius={3}
                            marginBlock={3}
                            bgcolor={colors.card}
                            border={`1px solid ${colors.accentColor}`}
                            sx={{ cursor: 'grabbing' }}
                            padding="5px 10px"
                            draggable={true}
                            onDragOver={(e) => dragOverHandler(e)}
                            onDragLeave={(e) => dragLeaveHandler(e)}
                            onDragStart={(e) =>
                                dragStartHandler(e, board, item)
                            }
                            onDragEnd={(e) => dragEndHandler(e)}
                            onDrop={(e) => dropHandler(e, board, item)}
                        >
                            <Grid
                                size={1}
                                display="flex"
                                alignItems="center"
                                gap={1}
                            >
                                <Avatar
                                    alt={item.assignee.fullName}
                                    src={item.assignee.avatarUrl}
                                    title={item.assignee.fullName}
                                />
                                <Typography variant="h2">
                                    {item.title}
                                </Typography>
                            </Grid>
                            <Grid>
                                <Typography>{item.description}</Typography>
                                <Typography>
                                    Приоритет: {item.priority}
                                </Typography>
                            </Grid>
                        </Box>
                    ))}
                </Box>
            ))}
        </Box>
    )
}

export default DragOnDropBoard
