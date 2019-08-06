import { Theme as MuiTheme, createMuiTheme } from '@material-ui/core/styles'
import { blue } from '@material-ui/core/colors'

export interface Theme extends MuiTheme {
  sidebar: {
    width: number
    widthCollapsed: number
    background: string
    color: string
  }
  header: {
    background: string
  }
}

const coreTheme = createMuiTheme({
  props: {
    MuiPaper: {
      elevation: 0,
    },
    MuiAppBar: {
      elevation: 1,
    },
    MuiButton: {
      // elevation: 0,
    },
    MuiMenu: {
      elevation: 1,
    },
    MuiCard: {
      elevation: 0,
    },
  },
  overrides: {
    MuiButton: {
      root: {
        minWidth: 0,
        '&$hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.08)',
        },
        '&$focusVisible': {
          boxShadow: 'none',
          backgroundColor: 'rgba(0, 0, 0, 0.06)',
        },
      },
      contained: {
        boxShadow: 'none',
        '&:active': {
          boxShadow: 'none',
        },
        '&:focus': {
          boxShadow: 'none',
        },
      },
      containedSecondary: {
        color: '#fff',
        '&:hover': {
          backgroundColor: 'rgb(118, 195, 21)',
        },
      },
    },
    MuiButtonGroup: {
      root: {
        boxShadow: 'none',
      },
      contained: {
        boxShadow: 'none',
        '&:active': {
          boxShadow: 'none',
        },
        '&:focus': {
          boxShadow: 'none',
        },
      },
    },
  },
  palette: {
    secondary: {
      main: '#8cd136', //indigo[600],
    },
    primary: {
      main: blue[600], //'#619f30',
    },
  },
  typography: {
    h1: {
      fontSize: '2rem',
    },
    h2: {
      fontSize: '1.8rem',
    },
    h3: {
      fontSize: '1.6rem',
    },
    h4: {
      fontSize: '1.4rem',
    },
    h5: {
      fontSize: '1.2rem',
    },
    h6: {
      fontSize: '1rem',
    },
  },
})

const theme = {
  ...coreTheme,
  header: {
    background: '#fff',
  },
  sidebar: {
    width: 240,
    widthCollapsed: coreTheme.spacing(7),
    background: '#4a4d5a;',
    color: '#fff',
  },
  sidebarWidth: 240,
  sidebarWidthCollapsed: coreTheme.spacing(7),
}

export default theme