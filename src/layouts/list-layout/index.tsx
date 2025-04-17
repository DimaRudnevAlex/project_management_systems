import { IListLayout } from '@/@types/layout'
import SkeletonList from '@/components/skeleton-list'
import { Grid } from '@mui/material'
import { FC } from 'react'

const ListLayout: FC<IListLayout> = ({ children, isLoading, isError }) => {
    return (
        <Grid container columns={1} mb={2}>
            {isError && <h1>Не удалось загрузить (</h1>}
            {isLoading && !isError ? <SkeletonList /> : children}
        </Grid>
    )
}

export default ListLayout
