'use client'

import { useState } from 'react'
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Slider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  useTheme,
} from '@mui/material'
import FilterListIcon from '@mui/icons-material/FilterList'
import ClearIcon from '@mui/icons-material/Clear'

interface RoomFiltersProps {
  onFilterChange: (filters: any) => void
}

export function RoomFilters({ onFilterChange }: RoomFiltersProps) {
  const theme = useTheme()
  const [location, setLocation] = useState('')
  const [priceRange, setPriceRange] = useState<number[]>([0, 1000])
  const [bedrooms, setBedrooms] = useState<number | ''>('')
  const [bathrooms, setBathrooms] = useState<number | ''>('')
  const [propertyType, setPropertyType] = useState('')
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([])

  const amenities = ['WiFi', 'Ar Condicionado', 'TV', 'Piscina', 'Estacionamento', 'Cozinha', 'Lavanderia']

  const handleClearFilters = () => {
    setLocation('')
    setPriceRange([0, 1000])
    setBedrooms('')
    setBathrooms('')
    setPropertyType('')
    setSelectedAmenities([])
    onFilterChange({})
  }

  const handleApplyFilters = () => {
    onFilterChange({
      location,
      priceMin: priceRange[0],
      priceMax: priceRange[1],
      bedrooms,
      bathrooms,
      propertyType,
      amenities: selectedAmenities,
    })
  }

  return (
    <Paper
      elevation={2}
      sx={{
        p: 3,
        mb: 4,
        borderRadius: 2,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, gap: 1 }}>
        <FilterListIcon color="primary" />
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Filtros
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <TextField
          label="Localização"
          placeholder="Cidade, bairro ou endereço"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          fullWidth
        />

        <Box>
          <Typography gutterBottom>
            Preço por noite: R$ {priceRange[0]} - R$ {priceRange[1]}
          </Typography>
          <Slider
            value={priceRange}
            onChange={(_, newValue) => setPriceRange(newValue as number[])}
            valueLabelDisplay="auto"
            min={0}
            max={2000}
            step={50}
            sx={{
              color: theme.palette.primary.main,
            }}
          />
        </Box>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <FormControl fullWidth>
            <InputLabel>Quartos</InputLabel>
            <Select
              value={bedrooms}
              label="Quartos"
              onChange={(e) => setBedrooms(e.target.value as number | '')}
            >
              <MenuItem value="">Qualquer</MenuItem>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4+</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel>Banheiros</InputLabel>
            <Select
              value={bathrooms}
              label="Banheiros"
              onChange={(e) => setBathrooms(e.target.value as number | '')}
            >
              <MenuItem value="">Qualquer</MenuItem>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3+</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <FormControl fullWidth>
          <InputLabel>Tipo de Propriedade</InputLabel>
          <Select
            value={propertyType}
            label="Tipo de Propriedade"
            onChange={(e) => setPropertyType(e.target.value)}
          >
            <MenuItem value="">Todos</MenuItem>
            <MenuItem value="Apartamento">Apartamento</MenuItem>
            <MenuItem value="Casa">Casa</MenuItem>
            <MenuItem value="Loft">Loft</MenuItem>
            <MenuItem value="Studio">Studio</MenuItem>
          </Select>
        </FormControl>

        <Box>
          <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
            Comodidades
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {amenities.map((amenity) => (
              <Chip
                key={amenity}
                label={amenity}
                onClick={() => {
                  if (selectedAmenities.includes(amenity)) {
                    setSelectedAmenities(selectedAmenities.filter((a) => a !== amenity))
                  } else {
                    setSelectedAmenities([...selectedAmenities, amenity])
                  }
                }}
                color={selectedAmenities.includes(amenity) ? 'primary' : 'default'}
                variant={selectedAmenities.includes(amenity) ? 'filled' : 'outlined'}
                sx={{ cursor: 'pointer' }}
              />
            ))}
          </Box>
        </Box>

        <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
          <Button
            variant="contained"
            onClick={handleApplyFilters}
            fullWidth
            sx={{ py: 1.5 }}
          >
            Aplicar Filtros
          </Button>
          <Button
            variant="outlined"
            onClick={handleClearFilters}
            startIcon={<ClearIcon />}
            sx={{ py: 1.5 }}
          >
            Limpar
          </Button>
        </Box>
      </Box>
    </Paper>
  )
}

