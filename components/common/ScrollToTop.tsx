'use client'

import { useState, useEffect } from 'react'
import { Fab, useTheme, alpha } from '@mui/material'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

export function ScrollToTop() {
  const theme = useTheme()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 400) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  if (!visible) return null

  return (
    <Fab
      onClick={scrollToTop}
      sx={{
        position: 'fixed',
        bottom: 32,
        right: 32,
        zIndex: 1000,
        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
        color: '#FFFFFF',
        boxShadow: `0 8px 24px ${alpha(theme.palette.primary.main, 0.4)}`,
        '&:hover': {
          background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.secondary.dark} 100%)`,
          boxShadow: `0 12px 32px ${alpha(theme.palette.primary.main, 0.5)}`,
          transform: 'translateY(-4px)',
        },
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        animation: 'fadeIn 0.3s ease',
        '@keyframes fadeIn': {
          '0%': { opacity: 0, transform: 'scale(0.8)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
      }}
      size="medium"
      aria-label="Voltar ao topo"
    >
      <KeyboardArrowUpIcon />
    </Fab>
  )
}

