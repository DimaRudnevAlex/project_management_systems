import { Box, Skeleton } from '@mui/material'

const SkeletonList = () => {
    return (
        <Box sx={{ width: '100%' }}>
            {[...new Array(5)].map((_, i) => (
                <Skeleton key={i} animation="wave" height={160} />
            ))}
        </Box>
    )
}

export default SkeletonList
