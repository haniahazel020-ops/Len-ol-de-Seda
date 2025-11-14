'use client'

import { useState } from 'react'
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Slider,
  FormControlLabel,
  Checkbox,
  useTheme,
} from '@mui/material'
import FilterListIcon from '@mui/icons-material/FilterList'
import ClearIcon from '@mui/icons-material/Clear'

interface EscortFiltersProps {
  onFilterChange: (filters: any) => void
}

export function EscortFilters({ onFilterChange }: EscortFiltersProps) {
  const theme = useTheme()
  const [location, setLocation] = useState('')
  const [priceRange, setPriceRange] = useState<number[]>([0, 1000])
  const [verified, setVerified] = useState<boolean | undefined>(undefined)
  const [premium, setPremium] = useState<boolean | undefined>(undefined)
  const [available, setAvailable] = useState<boolean | undefined>(undefined)

  const handleClearFilters = () => {
    setLocation('')
    setPriceRange([0, 1000])
    setVerified(undefined)
    setPremium(undefined)
    setAvailable(undefined)
    onFilterChange({})
  }

  const handleApplyFilters = () => {
    onFilterChange({
      location,
      priceMin: priceRange[0],
      priceMax: priceRange[1],
      verified: verified !== undefined ? verified : undefined,
      premium: premium !== undefined ? premium : undefined,
      available: available !== undefined ? available : undefined,
    })
  }

  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        mb: 4,
        borderRadius: 3,
        backgroundColor: '#FFFFFF',
        border: `1px solid ${theme.palette.grey[200]}`,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, gap: 1 }}>
        <FilterListIcon sx={{ color: theme.palette.primary.main }} />
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Filtros
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <TextField
          label="Localização"
          placeholder="Cidade ou bairro"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          fullWidth
        />

        <Box>
          <Typography gutterBottom>
            Preço por hora: R$ {priceRange[0]} - R$ {priceRange[1]}
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

        <Box>
          <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
            Opções
          </Typography>
          <FormControlLabel
            control={
              <Checkbox
                checked={verified === true}
                onChange={(e) => setVerified(e.target.checked ? true : undefined)}
              />
            }
            label="Apenas Verificadas"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={premium === true}
                onChange={(e) => setPremium(e.target.checked ? true : undefined)}
              />
            }
            label="Apenas Premium"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={available === true}
                onChange={(e) => setAvailable(e.target.checked ? true : undefined)}
              />
            }
            label="Apenas Disponíveis"
          />
        </Box>

        <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
          <Button
            variant="contained"
            onClick={handleApplyFilters}
            fullWidth
            sx={{
              py: 1.5,
              backgroundColor: theme.palette.primary.main,
              '&:hover': {
                backgroundColor: theme.palette.primary.dark,
              },
            }}
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

