import Portal from '@/components/modal/portal'
import { tokens } from '@/theme'
import { useModal } from '@/utils/hooks'
import { Box, Modal as ModalMUI, Typography, useTheme } from '@mui/material'

const Modal = () => {
    const { handleCloseModal, isOpenModal } = useModal()
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    return isOpenModal ? (
        <Portal id={'modal-id'}>
            <ModalMUI open={isOpenModal} onClose={handleCloseModal}>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        MaxWidth: 400,
                        background: `${colors.gray.DEFAULT}`,
                        boxShadow: `0px 0px 65px 7px ${colors.accentColor}`,
                        p: 4,
                        outline: 'none',
                    }}
                >
                    <Typography variant="h6" component="h2">
                        Text in a modal
                    </Typography>
                    <Typography sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor
                        ligula.
                    </Typography>
                </Box>
            </ModalMUI>
        </Portal>
    ) : null
}

export default Modal
