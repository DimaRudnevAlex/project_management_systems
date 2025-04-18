import { createContainer } from '@/utils/helper'
import { FC, ReactNode, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

type PortalProps = { id: string; children: ReactNode }

const Portal: FC<PortalProps> = ({ id, children }) => {
    const [container, setContainer] = useState<HTMLElement>()

    useEffect(() => {
        if (id) {
            createContainer({ id })

            const portalContainer = document.getElementById(id)!

            setContainer(portalContainer)
        }
    }, [id])
    return container ? createPortal(children, container) : null
}
export default Portal
