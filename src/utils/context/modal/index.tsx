import { ModalContext } from '@/utils/hooks'
import { FC, ReactNode, useState } from 'react'

const ModalProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [isOpenModal, setIsOpenModal] = useState(false)

    const handleOpenModal = () => setIsOpenModal(true)
    const handleCloseModal = () => setIsOpenModal(false)

    return (
        <ModalContext.Provider
            value={{ isOpenModal, handleOpenModal, handleCloseModal }}
        >
            {children}
        </ModalContext.Provider>
    )
}

export default ModalProvider
