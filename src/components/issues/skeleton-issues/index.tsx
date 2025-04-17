import { Box, Skeleton } from '@mui/material'

const SkeletonIssues = () => {
    return (
        <Box sx={{ width: '100%' }}>
            {[...new Array(6)].map((_, i) => (
                <Skeleton key={i} animation="wave" height={150} />
            ))}
        </Box>
    )
}

export default SkeletonIssues
