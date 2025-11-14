'use client'

import { Box, Container, Grid, Typography, useTheme, alpha } from '@mui/material'
import PeopleIcon from '@mui/icons-material/People'
import HotelIcon from '@mui/icons-material/Hotel'
import StarIcon from '@mui/icons-material/Star'
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser'
import { palette } from '@/lib/theme/palette'

interface Stat {
  icon: React.ReactNode
  value: string
  label: string
  color: string
}

export function StatsSection() {
  const theme = useTheme()

  const stats: Stat[] = [
    {
      icon: <PeopleIcon sx={{ fontSize: 40 }} />,
      value: '500+',
      label: 'Profissionais',
      color: theme.palette.primary.main,
    },
    {
      icon: <HotelIcon sx={{ fontSize: 40 }} />,
      value: '200+',
      label: 'Quartos Premium',
      color: theme.palette.secondary.main,
    },
    {
      icon: <StarIcon sx={{ fontSize: 40 }} />,
      value: '4.9',
      label: 'Avaliação Média',
      color: theme.palette.warning.main,
    },
    {
      icon: <VerifiedUserIcon sx={{ fontSize: 40 }} />,
      value: '100%',
      label: 'Verificados',
      color: theme.palette.success.main,
    },
  ]

  return (
    <Box
      sx={{
        background: `linear-gradient(135deg, ${alpha(palette.primary[50], 0.5)} 0%, ${alpha(palette.secondary[50], 0.3)} 100%)`,
        py: { xs: 8, md: 12 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h3"
            sx={{
              mb: 2,
              fontWeight: 700,
              fontSize: { xs: '2rem', md: '3rem' },
              letterSpacing: '-0.02em',
            }}
          >
            Números que Impressionam
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: theme.palette.text.secondary,
              fontWeight: 300,
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            Uma comunidade crescente de profissionais e acomodações premium
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {stats.map((stat, index) => (
            <Grid item xs={6} md={3} key={index}>
              <Box
                sx={{
                  textAlign: 'center',
                  p: 4,
                  borderRadius: 3,
                  background: '#FFFFFF',
                  border: `1px solid ${alpha(stat.color, 0.2)}`,
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: `0 12px 40px ${alpha(stat.color, 0.2)}`,
                    borderColor: stat.color,
                  },
                }}
              >
                <Box
                  sx={{
                    display: 'inline-flex',
                    p: 2,
                    borderRadius: '50%',
                    background: alpha(stat.color, 0.1),
                    color: stat.color,
                    mb: 2,
                  }}
                >
                  {stat.icon}
                </Box>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 800,
                    mb: 1,
                    background: `linear-gradient(135deg, ${stat.color}, ${alpha(stat.color, 0.7)})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {stat.value}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: theme.palette.text.secondary,
                    fontWeight: 500,
                  }}
                >
                  {stat.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

