'use client'

import { useState } from 'react'
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  InputAdornment,
  useTheme,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { EscortCard } from '@/components/escorts/EscortCard'
import { EscortFilters } from '@/components/escorts/EscortFilters'
import { mockEscorts } from '@/lib/utils/mockEscorts'
import { Breadcrumbs } from '@/components/common/Breadcrumbs'

export default function EscortsPage() {
  const theme = useTheme()
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredEscorts, setFilteredEscorts] = useState(mockEscorts)

  const handleFilterChange = (filters: any) => {
    let filtered = [...mockEscorts]

    if (filters.location) {
      filtered = filtered.filter((escort) =>
        escort.location.city.toLowerCase().includes(filters.location.toLowerCase()) ||
        escort.location.neighborhood?.toLowerCase().includes(filters.location.toLowerCase())
      )
    }

    if (filters.priceMin !== undefined) {
      filtered = filtered.filter((escort) => escort.pricing.hour >= filters.priceMin)
    }

    if (filters.priceMax !== undefined) {
      filtered = filtered.filter((escort) => escort.pricing.hour <= filters.priceMax)
    }

    if (filters.verified !== undefined) {
      filtered = filtered.filter((escort) => escort.verified === filters.verified)
    }

    if (filters.premium !== undefined) {
      filtered = filtered.filter((escort) => escort.premium === filters.premium)
    }

    if (filters.available !== undefined) {
      filtered = filtered.filter((escort) => escort.available === filters.available)
    }

    setFilteredEscorts(filtered)
  }

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    if (query.trim() === '') {
      setFilteredEscorts(mockEscorts)
      return
    }

    const filtered = mockEscorts.filter(
      (escort) =>
        escort.name.toLowerCase().includes(query.toLowerCase()) ||
        escort.description.toLowerCase().includes(query.toLowerCase()) ||
        escort.location.city.toLowerCase().includes(query.toLowerCase())
    )
    setFilteredEscorts(filtered)
  }

  return (
    <Box sx={{ backgroundColor: '#FAFAFA', minHeight: '100vh' }}>
      <Container maxWidth="xl" sx={{ py: { xs: 6, md: 8 } }}>
        {/* Breadcrumbs */}
        <Breadcrumbs items={[{ label: 'Acompanhantes' }]} />

        {/* Header */}
        <Box sx={{ mb: 6, textAlign: { xs: 'left', md: 'center' } }}>
          <Typography
            variant="h2"
            sx={{
              mb: 2,
              fontWeight: 700,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              letterSpacing: '-0.03em',
              background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Acompanhantes Premium
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: theme.palette.text.secondary,
              mb: 4,
              fontWeight: 300,
              fontSize: { xs: '1rem', md: '1.25rem' },
              maxWidth: '700px',
              mx: { xs: 0, md: 'auto' },
            }}
          >
            Conheça profissionais elegantes e sofisticadas que transformam momentos especiais em experiências inesquecíveis
          </Typography>

          {/* Search Bar */}
          <TextField
            fullWidth
            placeholder="Buscar por nome, localização..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            sx={{
              maxWidth: { xs: '100%', md: 700 },
              mx: 'auto',
              display: 'block',
              backgroundColor: '#FFFFFF',
              '& .MuiOutlinedInput-root': {
                borderRadius: 2,
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                '&:hover': {
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.12)',
                },
                '&.Mui-focused': {
                  boxShadow: `0 4px 12px ${theme.palette.primary.main}20`,
                },
              },
            }}
          />
        </Box>

        <Grid container spacing={4}>
          {/* Filters Sidebar */}
          <Grid item xs={12} md={3}>
            <EscortFilters onFilterChange={handleFilterChange} />
          </Grid>

          {/* Escorts Grid */}
          <Grid item xs={12} md={9}>
          {filteredEscorts.length === 0 ? (
            <Box
              sx={{
                textAlign: 'center',
                py: 8,
              }}
            >
              <Typography variant="h6" sx={{ color: theme.palette.text.secondary, mb: 1 }}>
                Nenhum perfil encontrado
              </Typography>
              <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                Tente ajustar seus filtros de busca
              </Typography>
            </Box>
          ) : (
            <>
              <Typography variant="body1" sx={{ mb: 3, color: theme.palette.text.secondary }}>
                {filteredEscorts.length} perfil{filteredEscorts.length !== 1 ? 'is' : ''} encontrado{filteredEscorts.length !== 1 ? 's' : ''}
              </Typography>
              <Grid container spacing={3}>
                {filteredEscorts.map((escort) => (
                  <Grid item xs={12} sm={6} lg={4} key={escort.id}>
                    <EscortCard escort={escort} />
                  </Grid>
                ))}
              </Grid>
            </>
          )}
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

