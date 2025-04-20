import { IFormData } from '@/@types/form'
import { useAppDispatch, useAppSelector } from '@/@types/store'
import ModalSelect from '@/components/modal/modal-select'
import UiButton from '@/components/uikit/Button'
import {
    clearConfigForModal,
    selectIssueIdConfigForModal,
} from '@/store/features/cofig-for-modal'
import { boardsApi, useGetAllBoardsQuery } from '@/store/services/boardsApi'
import {
    useAddNewIssueOrUpdateIssueMutation,
    useGetAllUsersQuery,
    useGetIssueByIdQuery,
} from '@/store/services/issuesApi'
import { configPage } from '@/utils/config-page'
import { LIST_ISSUE_STATUS, LIST_PRIORITIES } from '@/utils/constants'
import { createBodyFromRequest, defaultValueForModal } from '@/utils/helper'
import { useModal } from '@/utils/hooks'
import { Box, TextField, Typography } from '@mui/material'
import { skipToken } from '@reduxjs/toolkit/query'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'

const ModalForm = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const { handleCloseModal } = useModal()

    const [createOrUpdateIssue, { isLoading }] =
        useAddNewIssueOrUpdateIssueMutation()
    const { issueId, boardId, ToBoard } = useAppSelector(
        selectIssueIdConfigForModal,
    )
    const { data: MenuItemBoards, isLoading: isSuccessMenuBoards } =
        useGetAllBoardsQuery()
    const { data: MenuItemUsers, isLoading: isSuccessMenuUsers } =
        useGetAllUsersQuery()
    const { data: dataCurrentIssue, isLoading: isSuccessCurrentIssue } =
        useGetIssueByIdQuery(issueId ?? skipToken, {
            refetchOnMountOrArgChange: true,
        })

    const {
        control,
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<IFormData>()

    if (isSuccessMenuBoards || isSuccessMenuUsers || isSuccessCurrentIssue) {
        return <h1>Loading...</h1>
    }

    const handleSubmitForm = async (formData: IFormData) => {
        //TODO обработать ошибки:1) Получить ошибку при submit формы поставьте в функцию createOrUpdateIssue аргументом: { issueId , body: { something: 'error' }}
        //TODO                   2) Получить успех при submit формы поставьте в функцию createOrUpdateIssue аргументом: createBodyFromRequest(issueId, formData)
        try {
            await createOrUpdateIssue(
                createBodyFromRequest(issueId, formData),
            ).unwrap()
        } catch (e) {
            console.error(`Не удалось отправить данные (`)
        } finally {
            handleCloseModal()
            //TODO Сброс кэша boardsApi иногда не отрабатывает(хотя делаю одно и тоже), надо разобраться
            dispatch(boardsApi.util.resetApiState())
            dispatch(clearConfigForModal())
        }
    }

    const handleClickToBoard = () => {
        handleCloseModal()
        dispatch(clearConfigForModal())
        navigate(`${configPage.LINK_TO_BOARD_BY_ID}${boardId}`)
    }

    const defaultValue = defaultValueForModal(dataCurrentIssue, boardId)

    return (
        <form onSubmit={handleSubmit(handleSubmitForm)}>
            <Box
                display="flex"
                flexDirection="column"
                gap={{ sm: 2, md: 3, xs: 1 }}
            >
                <Typography variant="h6" component="h2">
                    {boardId ? 'Редактирование' : 'Создание'} задачи
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
                    menuItems={MenuItemBoards?.menuItem ?? []}
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
                    defaultValue={defaultValue.assignee.id}
                    label={'Исполнитель'}
                    name={'assigneeId'}
                    control={control}
                    menuItems={MenuItemUsers ?? []}
                />
                <Box display={'flex'} justifyContent={'space-between'}>
                    <UiButton
                        loading={isLoading}
                        type="submit"
                        text={`${issueId ? 'Обновить' : 'Создать'} задачу`}
                    />
                    {ToBoard && (
                        <UiButton
                            text="Перейти к доске"
                            onClick={handleClickToBoard}
                        />
                    )}
                </Box>
            </Box>
        </form>
    )
}

export default ModalForm
