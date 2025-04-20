export interface Tokens {
    primary: {
        DEFAULT: string
    }
    secondary: {
        DEFAULT: string
    }
    black: {
        DEFAULT: string
    }
    white: {
        DEFAULT: string
    }
    gray: {
        DEFAULT: string
    }
    borderColor: string
    accentColor: string
    card: string
}

export interface ThemeSettings {
    palette: {
        mode: 'light' | 'dark'
        primary: {
            main: string
        }
        secondary: {
            main: string
        }
    }
    typography: {
        fontFamily: string
        fontSize: number
        fontWeight: number
        h1: {
            fontFamily: string
            fontSize: number
            fontWeight: number
        }
        h2: {
            fontFamily: string
            fontSize: number
            fontWeight: number
        }
        h3: {
            fontFamily: string
            fontSize: number
            fontWeight: number
        }
        p: {
            fontFamily: string
            fontSize: number
            fontWeight: number
        }
    }
}
