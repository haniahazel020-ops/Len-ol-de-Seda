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
import { RoomCard } from '@/components/rooms/RoomCard'
import { RoomFilters } from '@/components/rooms/RoomFilters'
import { mockRooms } from '@/lib/utils/mockData'
import { Breadcrumbs } from '@/components/common/Breadcrumbs'

export default function RoomsPage() {
  const theme = useTheme()
  const [searchQuery, setSearchQuery] = useState('')
  const [showFilters, setShowFilters] = useState(false)
  const [filteredRooms, setFilteredRooms] = useState(mockRooms)

  const handleFilterChange = (filters: any) => {
    // Mock filter logic
    let filtered = [...mockRooms]

    if (filters.location) {
      filtered = filtered.filter((room) =>
        room.location.city.toLowerCase().includes(filters.location.toLowerCase()) ||
        room.location.address.toLowerCase().includes(filters.location.toLowerCase())
      )
    }

    if (filters.priceMin !== undefined) {
      filtered = filtered.filter((room) => room.pricePerNight >= filters.priceMin)
    }

    if (filters.priceMax !== undefined) {
      filtered = filtered.filter((room) => room.pricePerNight <= filters.priceMax)
    }

    if (filters.bedrooms) {
      filtered = filtered.filter((room) => room.bedrooms === filters.bedrooms)
    }

    if (filters.bathrooms) {
      filtered = filtered.filter((room) => room.bathrooms === filters.bathrooms)
    }

    if (filters.propertyType) {
      filtered = filtered.filter((room) => room.propertyType === filters.propertyType)
    }

    setFilteredRooms(filtered)
  }

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    if (query.trim() === '') {
      setFilteredRooms(mockRooms)
      return
    }

    const filtered = mockRooms.filter(
      (room) =>
        room.title.toLowerCase().includes(query.toLowerCase()) ||
        room.description.toLowerCase().includes(query.toLowerCase()) ||
        room.location.city.toLowerCase().includes(query.toLowerCase())
    )
    setFilteredRooms(filtered)
  }

  return (
    <Container maxWidth="xl" sx={{ py: { xs: 4, md: 6 } }}>
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'Quartos' }]} />

      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h3"
          sx={{
            mb: 2,
            fontWeight: 700,
            background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Quartos Premium
        </Typography>
        <Typography variant="h6" sx={{ color: theme.palette.text.secondary, mb: 3 }}>
          Descubra acomodações exclusivas para sua estadia
        </Typography>

        {/* Search Bar */}
        <TextField
          fullWidth
          placeholder="Buscar por localização, tipo de propriedade..."
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
            maxWidth: 600,
            '& .MuiOutlinedInput-root': {
              borderRadius: 2,
            },
          }}
        />
      </Box>

      <Grid container spacing={4}>
        {/* Filters Sidebar */}
        <Grid item xs={12} md={3}>
          <RoomFilters onFilterChange={handleFilterChange} />
        </Grid>

        {/* Rooms Grid */}
        <Grid item xs={12} md={9}>
          {filteredRooms.length === 0 ? (
            <Box
              sx={{
                textAlign: 'center',
                py: 8,
              }}
            >
              <Typography variant="h6" sx={{ color: theme.palette.text.secondary, mb: 1 }}>
                Nenhum quarto encontrado
              </Typography>
              <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                Tente ajustar seus filtros de busca
              </Typography>
            </Box>
          ) : (
            <>
              <Typography variant="body1" sx={{ mb: 3, color: theme.palette.text.secondary }}>
                {filteredRooms.length} quarto{filteredRooms.length !== 1 ? 's' : ''} encontrado{filteredRooms.length !== 1 ? 's' : ''}
              </Typography>
              <Grid container spacing={3}>
                {filteredRooms.map((room) => (
                  <Grid item xs={12} sm={6} lg={4} key={room.id}>
                    <RoomCard room={room} />
                  </Grid>
                ))}
              </Grid>
            </>
          )}
        </Grid>
      </Grid>
    </Container>
  )
}

