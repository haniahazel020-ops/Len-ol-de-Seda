'use client'

import { useState } from 'react'
import {
  Box,
  Container,
  Typography,
  Grid,
  Rating,
  Chip,
  Button,
  Divider,
  Avatar,
  Paper,
  useTheme,
  alpha,
  IconButton,
} from '@mui/material'
import { mockRooms } from '@/lib/utils/mockData'
import { mockEscorts } from '@/lib/utils/mockEscorts'
import { Escort } from '@/types/escorts'
import { Room } from '@/types/rooms'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import BedIcon from '@mui/icons-material/Bed'
import BathtubIcon from '@mui/icons-material/Bathtub'
import PeopleIcon from '@mui/icons-material/People'
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser'
import ShareIcon from '@mui/icons-material/Share'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import WifiIcon from '@mui/icons-material/Wifi'
import AcUnitIcon from '@mui/icons-material/AcUnit'
import TvIcon from '@mui/icons-material/Tv'
import LocalParkingIcon from '@mui/icons-material/LocalParking'
import PoolIcon from '@mui/icons-material/Pool'
import KitchenIcon from '@mui/icons-material/Kitchen'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { RoomCalendar } from '@/components/rooms/RoomCalendar'
import { Breadcrumbs } from '@/components/common/Breadcrumbs'
import Image from 'next/image'

export default function RoomDetailsPage({ params }: { params: { id: string } }) {
  const theme = useTheme()
  const [isFavorite, setIsFavorite] = useState(false)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  
  // Detecta se é profissional ou quarto pelo ID (formato: "professional-{id}" ou apenas "{id}")
  const isProfessional = params.id.startsWith('professional-')
  const actualId = isProfessional ? params.id.replace('professional-', '') : params.id
  
  // Busca o quarto ou profissional
  const room = isProfessional 
    ? null 
    : (mockRooms.find((r) => r.id === actualId) || mockRooms[0])
  
  const professional = isProfessional
    ? (mockEscorts.find((e) => e.id === actualId) || mockEscorts.find((e) => e.rentalAvailable) || mockEscorts[0])
    : null
  
  // Normaliza os dados para usar a mesma estrutura
  const listing = room || (professional && professional.rentalAvailable ? {
    id: `professional-${professional.id}`,
    title: `Aluguel por Temporada - ${professional.name}`,
    description: professional.description,
    location: {
      city: professional.location.city,
      state: professional.location.state,
      address: professional.location.neighborhood || professional.location.city,
    },
    pricePerNight: professional.rentalPricing?.perNight || professional.pricing.night || 0,
    images: professional.photos,
    amenities: professional.rentalAmenities || ['WiFi', 'Ar Condicionado', 'TV', 'Cofre'],
    bedrooms: 1,
    bathrooms: 1,
    maxGuests: 2,
    propertyType: 'Aluguel por Temporada',
    rating: professional.rating,
    reviewCount: professional.reviewCount,
    host: {
      name: professional.name,
      avatar: professional.photos[0] || '',
      isSuperHost: professional.verified,
    },
    availableDates: [],
    rules: professional.rentalRules || ['Não fumar', 'Respeitar o espaço', 'Check-in após 15h'],
    isProfessional: true,
    professional: professional,
  } : null)

  // Mock de avaliações para demonstração
  const mockReviews = [
    {
      id: '1',
      author: 'Carlos Mendes',
      rating: 5,
      comment: 'Excelente localização e quarto muito confortável. Super recomendo!',
      date: '2024-11-10',
      avatar: 'https://i.pravatar.cc/150?img=12',
    },
    {
      id: '2',
      author: 'Ana Paula',
      rating: 5,
      comment: 'Lugar incrível, tudo muito limpo e organizado. Anfitrião muito atencioso.',
      date: '2024-11-08',
      avatar: 'https://i.pravatar.cc/150?img=5',
    },
    {
      id: '3',
      author: 'Roberto Silva',
      rating: 4,
      comment: 'Ótima experiência, único ponto negativo foi a localização um pouco distante do centro.',
      date: '2024-11-05',
      avatar: 'https://i.pravatar.cc/150?img=8',
    },
  ]

  const amenityIcons: Record<string, any> = {
    'WiFi': <WifiIcon />,
    'Ar Condicionado': <AcUnitIcon />,
    'TV': <TvIcon />,
    'Estacionamento': <LocalParkingIcon />,
    'Piscina': <PoolIcon />,
    'Cozinha Equipada': <KitchenIcon />,
  }

  if (!listing) {
    return (
      <Container maxWidth="xl" sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h4">Anúncio não encontrado</Typography>
      </Container>
    )
  }

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % listing.images.length)
  }

  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + listing.images.length) % listing.images.length)
  }
  
  // Preço por noite ou por temporada
  const priceLabel = isProfessional && (listing as any).professional?.rentalPricing?.perWeek 
    ? 'por semana' 
    : isProfessional && (listing as any).professional?.rentalPricing?.perMonth
    ? 'por mês'
    : 'por noite'

  return (
    <Box sx={{ backgroundColor: '#FAFAFA', minHeight: '100vh' }}>
      <Container maxWidth="xl" sx={{ py: { xs: 4, md: 6 } }}>
        {/* Breadcrumbs */}
        <Breadcrumbs items={[
          { label: isProfessional ? 'Profissionais' : 'Quartos', href: isProfessional ? '/escorts' : '/rooms' },
          { label: listing.title },
        ]} />

        {/* Header Section */}
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 4 },
            mb: 4,
            borderRadius: 3,
            background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.05)} 0%, ${alpha(theme.palette.secondary.main, 0.03)} 100%)`,
            border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2, flexWrap: 'wrap', gap: 2 }}>
            <Box sx={{ flex: 1 }}>
              <Typography variant="h3" sx={{ fontWeight: 700, fontSize: { xs: '1.75rem', md: '2.5rem' }, mb: 1 }}>
                {listing.title}
              </Typography>
              {isProfessional && (listing as any).professional && (
                <Chip
                  label="Aluguel por Temporada"
                  sx={{
                    mb: 1,
                    backgroundColor: theme.palette.secondary.main,
                    color: '#FFFFFF',
                    fontWeight: 600,
                  }}
                />
              )}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2, flexWrap: 'wrap' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Rating
                    value={listing.rating}
                    readOnly
                    size="small"
                    sx={{
                      '& .MuiRating-iconFilled': {
                        color: theme.palette.primary.main,
                      },
                    }}
                  />
                  <Typography variant="body1" sx={{ fontWeight: 600, color: theme.palette.text.primary }}>
                    {listing.rating}
                  </Typography>
                  <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                    ({listing.reviewCount} avaliações)
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <LocationOnIcon sx={{ fontSize: 20, color: theme.palette.text.secondary }} />
                  <Typography variant="body1" sx={{ color: theme.palette.text.secondary }}>
                    {listing.location.address}, {listing.location.city}, {listing.location.state}
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton
                onClick={() => setIsFavorite(!isFavorite)}
                sx={{
                  border: `1px solid ${theme.palette.grey[300]}`,
                  '&:hover': {
                    backgroundColor: alpha(theme.palette.error.main, 0.1),
                    borderColor: theme.palette.error.main,
                  },
                }}
              >
                {isFavorite ? (
                  <FavoriteIcon sx={{ color: theme.palette.error.main }} />
                ) : (
                  <FavoriteBorderIcon />
                )}
              </IconButton>
              <Button
                variant="outlined"
                startIcon={<ShareIcon />}
                sx={{
                  borderColor: theme.palette.grey[300],
                  '&:hover': {
                    borderColor: theme.palette.primary.main,
                    backgroundColor: alpha(theme.palette.primary.main, 0.05),
                  },
                }}
              >
                Compartilhar
              </Button>
            </Box>
          </Box>
        </Paper>

        {/* Gallery - Grid estilo Booking.com */}
        <Box sx={{ mb: 4 }}>
          <Grid container spacing={1} sx={{ height: { xs: 300, md: 500 } }}>
            {/* Imagem principal - ocupa 2/3 */}
            <Grid item xs={12} md={8}>
              <Box
                sx={{
                  position: 'relative',
                  borderRadius: { xs: 2, md: '12px 0 0 12px' },
                  overflow: 'hidden',
                  height: '100%',
                  cursor: 'pointer',
                }}
                onClick={() => listing.images.length > 1 && nextImage()}
              >
                <Image
                  src={listing.images[selectedImageIndex]}
                  alt={listing.title}
                  fill
                  style={{
                    objectFit: 'cover',
                  }}
                  priority
                />
                {listing.images.length > 1 && (
                  <>
                    <IconButton
                      onClick={(e) => {
                        e.stopPropagation()
                        prevImage()
                      }}
                      sx={{
                        position: 'absolute',
                        left: 16,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        '&:hover': {
                          backgroundColor: '#FFFFFF',
                        },
                      }}
                    >
                      <ChevronLeftIcon />
                    </IconButton>
                    <IconButton
                      onClick={(e) => {
                        e.stopPropagation()
                        nextImage()
                      }}
                      sx={{
                        position: 'absolute',
                        right: 16,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        '&:hover': {
                          backgroundColor: '#FFFFFF',
                        },
                      }}
                    >
                      <ChevronRightIcon />
                    </IconButton>
                  </>
                )}
              </Box>
            </Grid>
            {/* Grid de 4 imagens menores - ocupa 1/3 */}
            <Grid item xs={12} md={4}>
              <Grid container spacing={1} sx={{ height: '100%' }}>
                {listing.images.slice(1, 5).map((image, index) => (
                  <Grid item xs={6} key={index} sx={{ height: index < 2 ? 'calc(50% - 4px)' : 'calc(50% - 4px)' }}>
                    <Box
                      onClick={() => setSelectedImageIndex(index + 1)}
                      sx={{
                        position: 'relative',
                        borderRadius: index === 0 ? { xs: 2, md: '0 12px 0 0' } : index === 2 ? { xs: 2, md: '0 0 12px 0' } : 1,
                        overflow: 'hidden',
                        height: '100%',
                        cursor: 'pointer',
                        border: selectedImageIndex === index + 1 ? `3px solid ${theme.palette.primary.main}` : 'none',
                        opacity: selectedImageIndex === index + 1 ? 1 : 0.9,
                        '&:hover': {
                          opacity: 1,
                          transform: 'scale(1.02)',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <Image
                        src={image}
                        alt={`Imagem ${index + 2}`}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                      {index === 3 && listing.images.length > 5 && (
                        <Box
                          sx={{
                            position: 'absolute',
                            inset: 0,
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#FFFFFF',
                          }}
                        >
                          <Typography variant="h6" sx={{ fontWeight: 700 }}>
                            +{listing.images.length - 5}
                          </Typography>
                        </Box>
                      )}
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Box>

        <Grid container spacing={4}>
          {/* Main Content */}
          <Grid item xs={12} md={8}>
            {/* Host Info - Simplificado */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4, pb: 3, borderBottom: `1px solid ${alpha(theme.palette.grey[300], 0.5)}` }}>
              <Avatar
                src={listing.host.avatar}
                sx={{ width: 56, height: 56 }}
              />
              <Box sx={{ flex: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {listing.host.name}
                  </Typography>
                  {listing.host.isSuperHost && (
                    <Chip
                      icon={<VerifiedUserIcon />}
                      label={isProfessional ? "Verificada" : "Super Anfitrião"}
                      size="small"
                      sx={{
                        backgroundColor: theme.palette.primary.main,
                        color: '#FFFFFF',
                        fontWeight: 600,
                        height: 24,
                      }}
                    />
                  )}
                </Box>
                <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                  {isProfessional ? 'Profissional disponível para aluguel' : 'Anfitrião desde 2020'}
                </Typography>
              </Box>
            </Box>

            {/* Description */}
            <Box sx={{ mb: 4, pb: 4, borderBottom: `1px solid ${alpha(theme.palette.grey[300], 0.5)}` }}>
              <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                {isProfessional ? 'Sobre este aluguel' : 'Sobre este lugar'}
              </Typography>
              <Typography variant="body1" sx={{ color: theme.palette.text.secondary, lineHeight: 1.8 }}>
                {listing.description}
              </Typography>
            </Box>

            {/* Room Details - Simplificado */}
            {!isProfessional && (
              <Box sx={{ mb: 4, pb: 4, borderBottom: `1px solid ${alpha(theme.palette.grey[300], 0.5)}` }}>
                <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                  Onde você vai dormir
                </Typography>
                <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <BedIcon sx={{ color: theme.palette.primary.main, fontSize: 28 }} />
                    <Box>
                      <Typography variant="body1" sx={{ fontWeight: 600 }}>
                        {listing.bedrooms} quarto{listing.bedrooms > 1 ? 's' : ''}
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <BathtubIcon sx={{ color: theme.palette.primary.main, fontSize: 28 }} />
                    <Box>
                      <Typography variant="body1" sx={{ fontWeight: 600 }}>
                        {listing.bathrooms} banheiro{listing.bathrooms > 1 ? 's' : ''}
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <PeopleIcon sx={{ color: theme.palette.primary.main, fontSize: 28 }} />
                    <Box>
                      <Typography variant="body1" sx={{ fontWeight: 600 }}>
                        Até {listing.maxGuests} hóspede{listing.maxGuests > 1 ? 's' : ''}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            )}

            {/* Amenities - Simplificado */}
            <Box sx={{ mb: 4, pb: 4, borderBottom: `1px solid ${alpha(theme.palette.grey[300], 0.5)}` }}>
              <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                {isProfessional ? 'O que este aluguel oferece' : 'O que este lugar oferece'}
              </Typography>
              <Grid container spacing={2}>
                {listing.amenities.map((amenity) => (
                  <Grid item xs={12} sm={6} key={amenity}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      {amenityIcons[amenity] ? (
                        <Box sx={{ color: theme.palette.primary.main }}>
                          {amenityIcons[amenity]}
                        </Box>
                      ) : (
                        <Box
                          sx={{
                            width: 20,
                            height: 20,
                            borderRadius: '50%',
                            backgroundColor: theme.palette.primary.main,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <Typography variant="caption" sx={{ color: '#FFFFFF', fontWeight: 600 }}>
                            ✓
                          </Typography>
                        </Box>
                      )}
                      <Typography variant="body1">
                        {amenity}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>

            {/* Reviews Section - Simplificado */}
            <Box sx={{ mb: 4, pb: 4, borderBottom: `1px solid ${alpha(theme.palette.grey[300], 0.5)}` }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h5" sx={{ fontWeight: 600 }}>
                  Avaliações ({mockReviews.length})
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Rating
                    value={listing.rating}
                    readOnly
                    sx={{
                      '& .MuiRating-iconFilled': {
                        color: theme.palette.primary.main,
                      },
                    }}
                  />
                  <Typography variant="h6" sx={{ fontWeight: 700, color: theme.palette.primary.main }}>
                    {listing.rating}
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                {mockReviews.map((review) => (
                  <Box key={review.id}>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                      <Avatar src={review.avatar} sx={{ width: 48, height: 48 }} />
                      <Box sx={{ flex: 1 }}>
                        <Typography variant="body1" sx={{ fontWeight: 600, mb: 0.5 }}>
                          {review.author}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                          <Rating value={review.rating} readOnly size="small" />
                          <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>
                            {new Date(review.date).toLocaleDateString('pt-BR')}
                          </Typography>
                        </Box>
                        <Typography variant="body2" sx={{ color: theme.palette.text.secondary, lineHeight: 1.7 }}>
                          {review.comment}
                        </Typography>
                      </Box>
                    </Box>
                    {review.id !== mockReviews[mockReviews.length - 1].id && (
                      <Divider sx={{ mt: 3 }} />
                    )}
                  </Box>
                ))}
              </Box>
            </Box>

            {/* Rules - Simplificado */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                {isProfessional ? 'Regras do aluguel' : 'Regras da casa'}
              </Typography>
              <Box component="ul" sx={{ pl: 2, m: 0 }}>
                {listing.rules.map((rule, index) => (
                  <li key={index}>
                    <Typography variant="body1" sx={{ color: theme.palette.text.secondary, lineHeight: 1.8, mb: 1 }}>
                      {rule}
                    </Typography>
                  </li>
                ))}
              </Box>
            </Box>
          </Grid>

          {/* Sidebar - Booking */}
          <Grid item xs={12} md={4}>
            <Box sx={{ position: 'sticky', top: 100 }}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  borderRadius: 3,
                  border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                }}
              >
                <Box sx={{ mb: 3, textAlign: 'center' }}>
                  <Typography variant="h4" sx={{ mb: 1, fontWeight: 700, color: theme.palette.primary.main }}>
                    R$ {listing.pricePerNight}
                  </Typography>
                  <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                    {priceLabel}
                  </Typography>
                  {isProfessional && (listing as any).professional?.rentalPricing && (
                    <Box sx={{ mt: 1 }}>
                      {(listing as any).professional.rentalPricing.perWeek && (
                        <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                          R$ {(listing as any).professional.rentalPricing.perWeek} por semana
                        </Typography>
                      )}
                      {(listing as any).professional.rentalPricing.perMonth && (
                        <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                          R$ {(listing as any).professional.rentalPricing.perMonth} por mês
                        </Typography>
                      )}
                    </Box>
                  )}
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mt: 1 }}>
                    <Rating
                      value={listing.rating}
                      readOnly
                      size="small"
                      sx={{
                        '& .MuiRating-iconFilled': {
                          color: theme.palette.primary.main,
                        },
                      }}
                    />
                    <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                      {listing.rating} ({listing.reviewCount} avaliações)
                    </Typography>
                  </Box>
                </Box>

                <RoomCalendar />

                <Button
                  variant="contained"
                  fullWidth
                  size="large"
                  sx={{
                    mt: 3,
                    mb: 2,
                    py: 1.5,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                    boxShadow: `0 8px 24px ${alpha(theme.palette.primary.main, 0.3)}`,
                    '&:hover': {
                      background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.secondary.dark} 100%)`,
                      boxShadow: `0 12px 32px ${alpha(theme.palette.primary.main, 0.4)}`,
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Reservar
                </Button>

                <Typography variant="body2" sx={{ textAlign: 'center', color: theme.palette.text.secondary, fontSize: '0.85rem' }}>
                  Você não será cobrado ainda
                </Typography>

                <Divider sx={{ my: 3 }} />

                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2, color: theme.palette.text.primary }}>
                    Informações importantes
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                    <Box>
                      <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5 }}>
                        Check-in
                      </Typography>
                      <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                        15:00 - 22:00
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5 }}>
                        Check-out
                      </Typography>
                      <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                        Até 11:00
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5 }}>
                        Cancelamento
                      </Typography>
                      <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                        Gratuito até 24h antes
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
