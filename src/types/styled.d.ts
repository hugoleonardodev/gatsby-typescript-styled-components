import 'styled-components'

import { defaultTheme } from '../themes'

export type RootTheme = typeof defaultTheme

declare module 'styled-components' {
    export interface DefaultTheme extends RootTheme {
        isDark: boolean
        colors: {
            background: {
                light: string
                main: string
                dark: string
                text: string
            }
            text: {
                light: string
                main: string
                dark: string
                theme: string
            }
            grey: {
                light: string
                main: string
                dark: string
                text: string
            }
            primary: {
                light: string
                main: string
                dark: string
                text: string
            }
            secondary: {
                light: string
                main: string
                dark: string
                text: string
            }
            warning: {
                light: string
                main: string
                dark: string
                text: string
            }
            pink: {
                light: string
                main: string
                dark: string
                text: string
            }
        }
    }
}
