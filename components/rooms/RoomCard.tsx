'use client'

import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Rating,
  Chip,
  useTheme,
} from '@mui/material'
import { Room } from '@/types/rooms'
import { useRouter } from 'next/navigation'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import StarIcon from '@mui/icons-material/Star'

interface RoomCardProps {
  room: Room
}

export function RoomCard({ room }: RoomCardProps) {
  const theme = useTheme()
  const router = useRouter()

  return (
    <Card
      sx={{
        cursor: 'pointer',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
      onClick={() => router.push('/rooms/1')} // Todos apontam para a página de exemplo
    >
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component="img"
          height="240"
          image={room.images[0]}
          alt={room.title}
          sx={{
            objectFit: 'cover',
            transition: 'transform 0.5s ease',
            '&:hover': {
              transform: 'scale(1.05)',
            },
          }}
        />
        {room.host.isSuperHost && (
          <Chip
            label="Super Host"
            size="small"
            sx={{
              position: 'absolute',
              top: 12,
              left: 12,
              backgroundColor: theme.palette.primary.main,
              color: '#FFFFFF',
              fontWeight: 600,
              fontSize: '0.75rem',
            }}
          />
        )}
        <Box
          sx={{
            position: 'absolute',
            top: 12,
            right: 12,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            borderRadius: 1,
            px: 1,
            py: 0.5,
          }}
        >
          <Typography variant="caption" sx={{ color: '#FFFFFF', fontWeight: 600 }}>
            R$ {room.pricePerNight}/noite
          </Typography>
        </Box>
      </Box>
      <CardContent sx={{ flexGrow: 1, p: 2.5 }}>
        <Typography
          variant="h6"
          sx={{
            mb: 1,
            fontWeight: 600,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 1,
            WebkitBoxOrient: 'vertical',
          }}
        >
          {room.title}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, gap: 0.5 }}>
          <LocationOnIcon sx={{ fontSize: 16, color: theme.palette.text.secondary }} />
          <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
            {room.location.city}, {room.location.state}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
          <Rating
            value={room.rating}
            readOnly
            size="small"
            precision={0.1}
            sx={{
              '& .MuiRating-iconFilled': {
                color: theme.palette.primary.main,
              },
            }}
          />
          <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
            {room.rating} ({room.reviewCount})
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mt: 1.5 }}>
          <Chip
            label={`${room.bedrooms} quarto${room.bedrooms > 1 ? 's' : ''}`}
            size="small"
            variant="outlined"
            sx={{ fontSize: '0.75rem' }}
          />
          <Chip
            label={`${room.bathrooms} banheiro${room.bathrooms > 1 ? 's' : ''}`}
            size="small"
            variant="outlined"
            sx={{ fontSize: '0.75rem' }}
          />
          <Chip
            label={`Até ${room.maxGuests} hóspedes`}
            size="small"
            variant="outlined"
            sx={{ fontSize: '0.75rem' }}
          />
        </Box>
      </CardContent>
    </Card>
  )
}

