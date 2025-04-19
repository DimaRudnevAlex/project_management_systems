import ModalForm from '@/components/modal/modal-form'
import Portal from '@/components/modal/portal'
import { tokens } from '@/theme'
import { useModal } from '@/utils/hooks'
import { Box, Modal as ModalMUI, useTheme } from '@mui/material'

const Modal = () => {
    const { handleCloseModal, isOpenModal } = useModal()
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    return isOpenModal ? (
        <Portal id={'modal-id'}>
            <ModalMUI open={isOpenModal} onClose={handleCloseModal}>
                <Box
                    width={{ sm: '60%', md: '60%', xs: '70%' }}
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        maxWidth: '700px',
                        transform: 'translate(-50%, -50%)',
                        background: `${colors.gray.DEFAULT}`,
                        boxShadow: `0px 0px 65px 7px ${colors.accentColor}`,
                        p: 4,
                        borderRadius: 4,
                        outline: 'none',
                    }}
                >
                    <ModalForm />
                </Box>
            </ModalMUI>
        </Portal>
    ) : null
}

export default Modal
