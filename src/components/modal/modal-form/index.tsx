import { IFormData } from '@/@types/form'
import { useAppSelector } from '@/@types/store'
import ModalSelect from '@/components/modal/modal-select'
import UiButton from '@/components/uikit/Button'
import { selectIssueIdConfigForModal } from '@/store/features/cofig-for-modal'
import { useGetAllBoardsQuery } from '@/store/services/boardsApi'
import {
    useGetAllUsersQuery,
    useGetIssueByIdQuery,
} from '@/store/services/issuesApi'
import { tokens } from '@/theme'
import { configPage } from '@/utils/config-page'
import { LIST_ISSUE_STATUS, LIST_PRIORITIES } from '@/utils/constants'
import { correctionArrayData } from '@/utils/helper'
import { defaultValueForModal } from '@/utils/hooks'
import { Box, TextField, Typography, useTheme } from '@mui/material'
import { skipToken } from '@reduxjs/toolkit/query'
import { useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router'

const ModalForm = () => {
    const issueId = useAppSelector(selectIssueIdConfigForModal)
    const { data: boards, isLoading: isLoading1 } = useGetAllBoardsQuery()
    const { data: users, isLoading: isLoading2 } = useGetAllUsersQuery()
    const { data: dataCurrentIssue, isLoading: isLoading3 } =
        useGetIssueByIdQuery(issueId ?? skipToken)

    const ArrayMenuItemsBoards = useMemo(() => {
        return boards ? correctionArrayData(boards.data, 'id', 'name') : []
    }, [boards])

    const ArrayMenuItemsUsers = useMemo(() => {
        return users ? correctionArrayData(users, 'id', 'fullName') : []
    }, [users])

    const defaultValue = defaultValueForModal(
        dataCurrentIssue,
        ArrayMenuItemsBoards,
    )
    const {
        control,
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<IFormData>()

    const handleSubmitForm = async (data: IFormData) => {
        console.log(data)
    }
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    if (!(!isLoading1 && !isLoading2 && !isLoading3)) return <h1>Loading...</h1>

    return (
        <form onSubmit={handleSubmit(handleSubmitForm)}>
            <Box
                display="flex"
                flexDirection="column"
                gap={{ sm: 2, md: 3, xs: 1 }}
            >
                <Typography variant="h6" component="h2">
                    Создание задачи
                </Typography>
                <TextField
                    defaultValue={defaultValue.title}
                    error={!!errors.title}
                    helperText={
                        !!errors['title'] && `${errors['title'].message}`
                    }
                    fullWidth={true}
                    label="Название"
                    variant="filled"
                    {...register('title', {
                        required: 'Это обязательное поле',
                    })}
                />
                <TextField
                    defaultValue={defaultValue.description}
                    error={!!errors.description}
                    helperText={
                        !!errors['description'] &&
                        `${errors['description'].message}`
                    }
                    fullWidth={true}
                    label="Описание"
                    variant="filled"
                    {...register('description', {
                        required: 'Это обязательное поле',
                    })}
                />
                <ModalSelect
                    disabled={!!defaultValue.boardId}
                    defaultValue={String(defaultValue.boardId)}
                    label={'Проект'}
                    name={'boardId'}
                    control={control}
                    menuItems={ArrayMenuItemsBoards}
                />
                <ModalSelect
                    defaultValue={defaultValue.priority}
                    label={'Приоритет'}
                    name={'priority'}
                    control={control}
                    menuItems={LIST_PRIORITIES}
                />
                <ModalSelect
                    defaultValue={defaultValue.status}
                    label={'Статус'}
                    name={'status'}
                    control={control}
                    menuItems={LIST_ISSUE_STATUS}
                />
                <ModalSelect
                    defaultValue={defaultValue.assigneeId}
                    label={'Исполнитель'}
                    name={'assigneeId'}
                    control={control}
                    menuItems={ArrayMenuItemsUsers}
                />
                <Box display={'flex'} justifyContent={'space-between'}>
                    <UiButton type="submit" text={'Создать задачу'} />
                    {issueId && (
                        <Link
                            to={`${configPage.LINK_TO_BOARD_BY_ID}${issueId}`}
                            style={{ color: `${colors.accentColor}` }}
                        >
                            <Typography noWrap variant="body1">
                                Перейти к проекту
                            </Typography>
                        </Link>
                    )}
                </Box>
            </Box>
        </form>
    )
}

export default ModalForm
