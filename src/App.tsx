import { CssBaseline, ThemeProvider } from '@mui/material'

import AppRouting from './routing'
import { ColorModeContext, useMode } from './theme'

function App() {
    const [colorMode, theme] = useMode()

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <AppRouting />
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}

export default App
