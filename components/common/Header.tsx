'use client'

import { useState, useEffect } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
  alpha,
  Badge,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import SearchIcon from '@mui/icons-material/Search'
import NotificationsIcon from '@mui/icons-material/Notifications'
import PersonIcon from '@mui/icons-material/Person'
import Link from 'next/link'
import Image from 'next/image'
import { palette } from '@/lib/theme/palette'

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const navItems = [
    { label: 'Acompanhantes', href: '/escorts' },
    { label: 'Quartos', href: '/rooms' },
    { label: 'Quem Somos', href: '/quem-somos' },
    { label: 'Contato', href: '/contato' },
    { label: 'Regras', href: '/regras' },
  ]

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backgroundColor: scrolled 
            ? alpha('#FFFFFF', 0.98) 
            : alpha('#FFFFFF', 0.85),
          backdropFilter: 'blur(30px)',
          WebkitBackdropFilter: 'blur(30px)',
          color: theme.palette.text.primary,
          borderBottom: scrolled 
            ? `1px solid ${alpha(theme.palette.primary.main, 0.15)}` 
            : 'none',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          boxShadow: scrolled 
            ? `0 8px 32px ${alpha(theme.palette.primary.main, 0.08)}, 0 2px 8px ${alpha(theme.palette.primary.main, 0.05)}` 
            : 'none',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            sx={{
              justifyContent: 'space-between',
              py: { xs: 1.5, md: 2.5 },
              minHeight: { xs: 64, md: 80 },
            }}
          >
            {/* Logo */}
            <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateX(4px)',
                    '& .logo-image': {
                      transform: 'scale(1.1) rotate(5deg)',
                      filter: 'brightness(1.2)',
                    },
                  },
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    width: { xs: 40, md: 50 },
                    height: { xs: 40, md: 50 },
                    borderRadius: '50%',
                    overflow: 'hidden',
                    background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.1)}, ${alpha(theme.palette.secondary.main, 0.1)})`,
                    border: `2px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: `0 4px 12px ${alpha(theme.palette.primary.main, 0.2)}`,
                    transition: 'all 0.3s ease',
                  }}
                >
                  <Image
                    src="/images/batatais-secret-favicon.jpeg"
                    alt="Lençol de Seda Logo"
                    width={50}
                    height={50}
                    className="logo-image"
                    style={{
                      objectFit: 'cover',
                      borderRadius: '50%',
                      transition: 'all 0.3s ease',
                    }}
                  />
                </Box>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{
                    fontWeight: 800,
                    fontSize: { xs: '1.3rem', md: '1.75rem' },
                    letterSpacing: '-0.03em',
                    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: -4,
                      left: 0,
                      width: '100%',
                      height: '2px',
                      background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                      transform: 'scaleX(0)',
                      transformOrigin: 'left',
                      transition: 'transform 0.3s ease',
                    },
                    '&:hover::after': {
                      transform: 'scaleX(1)',
                    },
                  }}
                >
                  Lençol de Seda
                </Typography>
              </Box>
            </Link>

            {/* Desktop Navigation */}
            {!isMobile && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                {navItems.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    style={{ textDecoration: 'none' }}
                  >
                    <Button
                      sx={{
                        color: theme.palette.text.primary,
                        fontWeight: 600,
                        fontSize: '1rem',
                        px: 3,
                        py: 1.5,
                        borderRadius: 3,
                        position: 'relative',
                        textTransform: 'none',
                        letterSpacing: '0.01em',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        overflow: 'hidden',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: '-100%',
                          width: '100%',
                          height: '100%',
                          background: `linear-gradient(90deg, transparent, ${alpha(theme.palette.primary.main, 0.1)}, transparent)`,
                          transition: 'left 0.5s ease',
                        },
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          bottom: 0,
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: 0,
                          height: '3px',
                          background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                          borderRadius: '2px 2px 0 0',
                          transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                          boxShadow: `0 -2px 8px ${alpha(theme.palette.primary.main, 0.4)}`,
                        },
                        '&:hover': {
                          color: theme.palette.primary.main,
                          backgroundColor: alpha(theme.palette.primary.main, 0.08),
                          transform: 'translateY(-2px)',
                          '&::before': {
                            left: '100%',
                          },
                          '&::after': {
                            width: '70%',
                          },
                        },
                      }}
                    >
                      {item.label}
                    </Button>
                  </Link>
                ))}
              </Box>
            )}

            {/* Actions */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <IconButton
                sx={{
                  color: theme.palette.text.secondary,
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  borderRadius: 2,
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    inset: 0,
                    borderRadius: 2,
                    background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.1)}, ${alpha(theme.palette.secondary.main, 0.1)})`,
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                  },
                  '&:hover': { 
                    color: theme.palette.primary.main,
                    transform: 'translateY(-2px)',
                    '&::before': {
                      opacity: 1,
                    },
                  },
                }}
              >
                <SearchIcon />
              </IconButton>
              <IconButton
                sx={{
                  color: theme.palette.text.secondary,
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  borderRadius: 2,
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    inset: 0,
                    borderRadius: 2,
                    background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.1)}, ${alpha(theme.palette.secondary.main, 0.1)})`,
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                  },
                  '&:hover': { 
                    color: theme.palette.primary.main,
                    transform: 'translateY(-2px)',
                    '&::before': {
                      opacity: 1,
                    },
                  },
                }}
              >
                <Badge 
                  badgeContent={3} 
                  sx={{
                    '& .MuiBadge-badge': {
                      background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                      boxShadow: `0 0 8px ${alpha(theme.palette.primary.main, 0.5)}`,
                    },
                  }}
                >
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  px: 2,
                  py: 1,
                  borderRadius: 3,
                  background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.1)}, ${alpha(theme.palette.secondary.main, 0.1)})`,
                  border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.15)}, ${alpha(theme.palette.secondary.main, 0.15)})`,
                    borderColor: alpha(theme.palette.primary.main, 0.3),
                    transform: 'translateY(-2px)',
                    boxShadow: `0 4px 12px ${alpha(theme.palette.primary.main, 0.2)}`,
                  },
                }}
              >
                <Box
                  sx={{
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: `0 2px 8px ${alpha(theme.palette.primary.main, 0.3)}`,
                  }}
                >
                  <PersonIcon sx={{ fontSize: 18, color: '#FFFFFF' }} />
                </Box>
              </Box>
              {isMobile && (
                <IconButton
                  onClick={handleDrawerToggle}
                  sx={{
                    color: theme.palette.text.primary,
                    ml: 1,
                    '&:hover': {
                      color: theme.palette.primary.main,
                      backgroundColor: alpha(theme.palette.primary.main, 0.1),
                    },
                  }}
                >
                  <MenuIcon />
                </IconButton>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          '& .MuiDrawer-paper': {
            width: 300,
            background: `linear-gradient(180deg, ${alpha('#FFFFFF', 0.98)} 0%, ${alpha(palette.primary[50], 0.95)} 100%)`,
            backdropFilter: 'blur(20px)',
          },
        }}
      >
        <Box 
          sx={{ 
            p: 3, 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            borderBottom: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
            background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.05)} 0%, ${alpha(theme.palette.secondary.main, 0.05)} 100%)`,
          }}
        >
          <Typography 
            variant="h6"
            sx={{
              fontWeight: 700,
              background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Menu
          </Typography>
          <IconButton 
            onClick={handleDrawerToggle}
            sx={{
              color: theme.palette.primary.main,
              '&:hover': {
                backgroundColor: alpha(theme.palette.primary.main, 0.1),
              },
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <List sx={{ pt: 2 }}>
          {navItems.map((item) => (
            <ListItem key={item.href} disablePadding>
              <ListItemButton
                component={Link}
                href={item.href}
                onClick={handleDrawerToggle}
                sx={{
                  mx: 2,
                  mb: 1,
                  borderRadius: 2,
                  '&:hover': {
                    backgroundColor: alpha(theme.palette.primary.main, 0.1),
                    '& .MuiListItemText-primary': {
                      color: theme.palette.primary.main,
                      fontWeight: 600,
                    },
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <ListItemText 
                  primary={item.label}
                  primaryTypographyProps={{
                    fontWeight: 500,
                    fontSize: '1rem',
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  )
}

