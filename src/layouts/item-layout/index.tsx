import { tokens } from '@/theme'
import { Grid, useTheme } from '@mui/material'
import { FC, ReactNode } from 'react'

const ItemLayout: FC<{ children: ReactNode }> = ({ children }) => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    return (
        <Grid
            size={1}
            mt={3}
            display="flex"
            flexDirection={{ xs: 'column', md: 'row' }}
            alignItems="center"
            gap={1}
            justifyContent="space-between"
            bgcolor={colors.gray.DEFAULT}
            borderRadius={2}
            paddingBlock={{ xs: 1, sm: 2, md: 4 }}
            paddingInline={1}
        >
            {children}
        </Grid>
    )
}

export default ItemLayout
