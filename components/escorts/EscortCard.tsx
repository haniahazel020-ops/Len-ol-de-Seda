'use client'

import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Rating,
  Chip,
  IconButton,
  useTheme,
} from '@mui/material'
import { Escort } from '@/types/escorts'
import { useRouter } from 'next/navigation'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import VerifiedIcon from '@mui/icons-material/Verified'
import { useState } from 'react'

interface EscortCardProps {
  escort: Escort
}

export function EscortCard({ escort }: EscortCardProps) {
  const theme = useTheme()
  const router = useRouter()
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <Card
      elevation={0}
      sx={{
        cursor: 'pointer',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        position: 'relative',
        backgroundColor: '#FFFFFF',
        border: `1px solid ${theme.palette.grey[200]}`,
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: `0 12px 40px ${theme.palette.primary.main}15`,
          borderColor: theme.palette.primary.main,
        },
      }}
      onClick={() => router.push('/escorts/10')} // Todos apontam para a página de exemplo
    >
      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '12px 12px 0 0',
        }}
      >
        <CardMedia
          component="img"
          height="380"
          image={escort.photos[0]}
          alt={escort.name}
          sx={{
            objectFit: 'cover',
            transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
            '&:hover': {
              transform: 'scale(1.08)',
            },
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: 12,
            left: 12,
            display: 'flex',
            gap: 1,
            flexDirection: 'column',
          }}
        >
          {escort.verified && (
            <Chip
              icon={<VerifiedIcon />}
              label="Verificada"
              size="small"
              sx={{
                backgroundColor: theme.palette.success.main,
                color: '#FFFFFF',
                fontWeight: 600,
                fontSize: '0.75rem',
              }}
            />
          )}
          {escort.premium && (
            <Chip
              label="Premium"
              size="small"
              sx={{
                backgroundColor: theme.palette.primary.main,
                color: '#FFFFFF',
                fontWeight: 600,
                fontSize: '0.75rem',
              }}
            />
          )}
        </Box>
        <IconButton
          onClick={(e) => {
            e.stopPropagation()
            setIsFavorite(!isFavorite)
          }}
          sx={{
            position: 'absolute',
            top: 12,
            right: 12,
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            '&:hover': {
              backgroundColor: '#FFFFFF',
            },
          }}
        >
          {isFavorite ? (
            <FavoriteIcon sx={{ color: theme.palette.error.main }} />
          ) : (
            <FavoriteBorderIcon />
          )}
        </IconButton>
        {escort.available && (
          <Box
            sx={{
              position: 'absolute',
              bottom: 12,
              right: 12,
              backgroundColor: theme.palette.success.main,
              color: '#FFFFFF',
              px: 1.5,
              py: 0.5,
              borderRadius: 1,
            }}
          >
            <Typography variant="caption" sx={{ fontWeight: 600 }}>
              Disponível
            </Typography>
          </Box>
        )}
      </Box>
      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1.5 }}>
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                mb: 0.5,
                fontSize: '1.25rem',
                letterSpacing: '-0.01em',
              }}
            >
              {escort.name}, {escort.age}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 1.5 }}>
              <LocationOnIcon sx={{ fontSize: 16, color: theme.palette.text.secondary }} />
              <Typography variant="body2" sx={{ color: theme.palette.text.secondary, fontWeight: 400 }}>
                {escort.location.city}, {escort.location.state}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
          <Rating
            value={escort.rating}
            readOnly
            size="small"
            precision={0.1}
            sx={{
              '& .MuiRating-iconFilled': {
                color: theme.palette.primary.main,
              },
            }}
          />
          <Typography variant="body2" sx={{ color: theme.palette.text.secondary, fontWeight: 500 }}>
            {escort.rating} ({escort.reviewCount})
          </Typography>
        </Box>
        <Typography
          variant="body2"
          sx={{
            color: theme.palette.text.secondary,
            mb: 2,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            lineHeight: 1.6,
            fontWeight: 300,
          }}
        >
          {escort.description}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 'auto', pt: 2, borderTop: `1px solid ${theme.palette.grey[200]}` }}>
          <Typography variant="h6" sx={{ fontWeight: 700, color: theme.palette.primary.main, fontSize: '1.5rem' }}>
            R$ {escort.pricing.hour}
            <Typography component="span" variant="body2" sx={{ color: theme.palette.text.secondary, ml: 0.5, fontWeight: 400 }}>
              /hora
            </Typography>
          </Typography>
        </Box>
      </CardContent>
    </Card>
  )
}

