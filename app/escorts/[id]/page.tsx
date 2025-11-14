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
  Card,
  CardContent,
} from '@mui/material'
import { mockEscorts } from '@/lib/utils/mockEscorts'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import VerifiedIcon from '@mui/icons-material/Verified'
import ShareIcon from '@mui/icons-material/Share'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import MessageIcon from '@mui/icons-material/Message'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { MediaGallery } from '@/components/escorts/MediaGallery'
import { Breadcrumbs } from '@/components/common/Breadcrumbs'
import Image from 'next/image'

export default function EscortDetailsPage({ params }: { params: { id: string } }) {
  const theme = useTheme()
  const [isFavorite, setIsFavorite] = useState(false)
  const escort = mockEscorts.find((e) => e.id === params.id) || mockEscorts[0] // Fallback para primeira profissional como amostra

  // Mock de avaliações para demonstração
  const mockReviews = [
    {
      id: '1',
      author: 'João Silva',
      rating: 5,
      comment: 'Profissional excepcional, muito elegante e discreta. Recomendo!',
      date: '2024-11-10',
    },
    {
      id: '2',
      author: 'Carlos Mendes',
      rating: 5,
      comment: 'Experiência incrível, superou todas as expectativas.',
      date: '2024-11-08',
    },
    {
      id: '3',
      author: 'Roberto Alves',
      rating: 4,
      comment: 'Muito profissional e atenciosa. Perfeita para eventos.',
      date: '2024-11-05',
    },
  ]

  if (!escort) {
    return (
      <Container maxWidth="xl" sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h4">Perfil não encontrado</Typography>
      </Container>
    )
  }

  return (
    <Box sx={{ backgroundColor: '#FAFAFA', minHeight: '100vh' }}>
      <Container maxWidth="xl" sx={{ py: { xs: 4, md: 6 } }}>
        {/* Breadcrumbs */}
        <Breadcrumbs items={[
          { label: 'Acompanhantes', href: '/escorts' },
          { label: escort.name },
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
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3 }}>
            {/* Avatar */}
            <Box
              sx={{
                position: 'relative',
                width: { xs: 120, md: 150 },
                height: { xs: 120, md: 150 },
                borderRadius: '50%',
                overflow: 'hidden',
                border: `4px solid ${theme.palette.primary.main}`,
                boxShadow: `0 8px 24px ${alpha(theme.palette.primary.main, 0.3)}`,
                flexShrink: 0,
              }}
            >
              <Image
                src={escort.photos[0]}
                alt={escort.name}
                fill
                style={{ objectFit: 'cover' }}
              />
            </Box>

            {/* Info */}
            <Box sx={{ flex: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2, flexWrap: 'wrap' }}>
                <Typography variant="h3" sx={{ fontWeight: 700, fontSize: { xs: '1.75rem', md: '2.5rem' } }}>
                  {escort.name}, {escort.age}
                </Typography>
                {escort.verified && (
                  <Chip
                    icon={<VerifiedIcon />}
                    label="Verificada"
                    sx={{
                      backgroundColor: theme.palette.success.main,
                      color: '#FFFFFF',
                      fontWeight: 600,
                      height: 32,
                    }}
                  />
                )}
                {escort.premium && (
                  <Chip
                    label="Premium"
                    sx={{
                      backgroundColor: theme.palette.primary.main,
                      color: '#FFFFFF',
                      fontWeight: 600,
                      height: 32,
                    }}
                  />
                )}
                {escort.available && (
                  <Chip
                    icon={<CheckCircleIcon />}
                    label="Disponível"
                    sx={{
                      backgroundColor: theme.palette.success.main,
                      color: '#FFFFFF',
                      fontWeight: 600,
                      height: 32,
                    }}
                  />
                )}
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 2, flexWrap: 'wrap' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Rating
                    value={escort.rating}
                    readOnly
                    size="small"
                    sx={{
                      '& .MuiRating-iconFilled': {
                        color: theme.palette.primary.main,
                      },
                    }}
                  />
                  <Typography variant="body1" sx={{ fontWeight: 600, color: theme.palette.text.primary }}>
                    {escort.rating}
                  </Typography>
                  <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                    ({escort.reviewCount} avaliações)
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <LocationOnIcon sx={{ fontSize: 20, color: theme.palette.text.secondary }} />
                  <Typography variant="body1" sx={{ color: theme.palette.text.secondary }}>
                    {escort.location.neighborhood && `${escort.location.neighborhood}, `}
                    {escort.location.city}, {escort.location.state}
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
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
          </Box>
        </Paper>

      <Grid container spacing={4}>
        {/* Main Content */}
        <Grid item xs={12} md={8}>
          {/* Gallery */}
          <MediaGallery photos={escort.photos} videos={escort.videos} />

          {/* Description */}
          <Paper
            elevation={0}
            sx={{
              p: 3,
              mb: 4,
              borderRadius: 2,
              border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
            }}
          >
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
              Sobre
            </Typography>
            <Typography variant="body1" sx={{ color: theme.palette.text.secondary, lineHeight: 1.8, fontSize: '1.05rem' }}>
              {escort.description}
            </Typography>
          </Paper>

          {/* Services */}
          <Paper
            elevation={0}
            sx={{
              p: 3,
              mb: 4,
              borderRadius: 2,
              border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
            }}
          >
            <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
              Serviços Oferecidos
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
              {escort.services.map((service) => (
                <Chip
                  key={service}
                  label={service}
                  sx={{
                    backgroundColor: alpha(theme.palette.primary.main, 0.1),
                    color: theme.palette.primary.main,
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    height: 36,
                    '&:hover': {
                      backgroundColor: alpha(theme.palette.primary.main, 0.2),
                    },
                  }}
                />
              ))}
            </Box>
          </Paper>

          {/* Physical Attributes */}
          {escort.physicalAttributes && (
            <Paper
              elevation={0}
              sx={{
                p: 3,
                mb: 4,
                borderRadius: 2,
                border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
              }}
            >
              <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
                Características Físicas
              </Typography>
              <Grid container spacing={2}>
                {/* Coluna Esquerda */}
                <Grid item xs={12} md={6}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {escort.physicalAttributes.gender && (
                      <Box
                        sx={{
                          p: 2.5,
                          borderRadius: 2,
                          backgroundColor: alpha(theme.palette.secondary.main, 0.05),
                          border: `1px solid ${alpha(theme.palette.secondary.main, 0.2)}`,
                        }}
                      >
                        <Typography variant="caption" sx={{ color: theme.palette.text.secondary, display: 'block', mb: 1, fontWeight: 600, textTransform: 'uppercase', fontSize: '0.75rem' }}>
                          Gênero
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 600, color: theme.palette.text.primary, mb: 0.5 }}>
                          Mulher
                        </Typography>
                        <Typography variant="body2" sx={{ color: theme.palette.text.secondary, fontSize: '0.85rem', lineHeight: 1.6 }}>
                          Mulher Cisgênero. Nasceu do sexo feminino e identifica-se como mulher.
                        </Typography>
                      </Box>
                    )}
                    {escort.physicalAttributes.genitalia && (
                      <Box
                        sx={{
                          p: 2.5,
                          borderRadius: 2,
                          backgroundColor: alpha(theme.palette.primary.main, 0.05),
                          border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                        }}
                      >
                        <Typography variant="caption" sx={{ color: theme.palette.text.secondary, display: 'block', mb: 1, fontWeight: 600, textTransform: 'uppercase', fontSize: '0.75rem' }}>
                          Genitália
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 600, color: theme.palette.text.primary }}>
                          {escort.physicalAttributes.genitalia}
                        </Typography>
                      </Box>
                    )}
                    {escort.physicalAttributes.weight && (
                      <Box
                        sx={{
                          p: 2.5,
                          borderRadius: 2,
                          backgroundColor: alpha(theme.palette.secondary.main, 0.05),
                          border: `1px solid ${alpha(theme.palette.secondary.main, 0.2)}`,
                        }}
                      >
                        <Typography variant="caption" sx={{ color: theme.palette.text.secondary, display: 'block', mb: 1, fontWeight: 600, textTransform: 'uppercase', fontSize: '0.75rem' }}>
                          Peso
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 600, color: theme.palette.text.primary }}>
                          {escort.physicalAttributes.weight}
                        </Typography>
                      </Box>
                    )}
                    {escort.physicalAttributes.ethnicity && (
                      <Box
                        sx={{
                          p: 2.5,
                          borderRadius: 2,
                          backgroundColor: alpha(theme.palette.primary.main, 0.05),
                          border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                        }}
                      >
                        <Typography variant="caption" sx={{ color: theme.palette.text.secondary, display: 'block', mb: 1, fontWeight: 600, textTransform: 'uppercase', fontSize: '0.75rem' }}>
                          Etnia
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 600, color: theme.palette.text.primary }}>
                          {escort.physicalAttributes.ethnicity}
                        </Typography>
                      </Box>
                    )}
                    {escort.physicalAttributes.hairStyle && (
                      <Box
                        sx={{
                          p: 2.5,
                          borderRadius: 2,
                          backgroundColor: alpha(theme.palette.secondary.main, 0.05),
                          border: `1px solid ${alpha(theme.palette.secondary.main, 0.2)}`,
                        }}
                      >
                        <Typography variant="caption" sx={{ color: theme.palette.text.secondary, display: 'block', mb: 1, fontWeight: 600, textTransform: 'uppercase', fontSize: '0.75rem' }}>
                          Estilo de Cabelo
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 600, color: theme.palette.text.primary }}>
                          {escort.physicalAttributes.hairStyle}
                        </Typography>
                      </Box>
                    )}
                    {escort.physicalAttributes.footSize && (
                      <Box
                        sx={{
                          p: 2.5,
                          borderRadius: 2,
                          backgroundColor: alpha(theme.palette.primary.main, 0.05),
                          border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                        }}
                      >
                        <Typography variant="caption" sx={{ color: theme.palette.text.secondary, display: 'block', mb: 1, fontWeight: 600, textTransform: 'uppercase', fontSize: '0.75rem' }}>
                          Tamanho do Pé
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 600, color: theme.palette.text.primary }}>
                          {escort.physicalAttributes.footSize}
                        </Typography>
                      </Box>
                    )}
                    {escort.physicalAttributes.hasTattoos !== undefined && (
                      <Box
                        sx={{
                          p: 2.5,
                          borderRadius: 2,
                          backgroundColor: alpha(theme.palette.secondary.main, 0.05),
                          border: `1px solid ${alpha(theme.palette.secondary.main, 0.2)}`,
                        }}
                      >
                        <Typography variant="caption" sx={{ color: theme.palette.text.secondary, display: 'block', mb: 1, fontWeight: 600, textTransform: 'uppercase', fontSize: '0.75rem' }}>
                          Tatuagens
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 600, color: theme.palette.text.primary }}>
                          {escort.physicalAttributes.hasTattoos ? 'Sim' : 'Não'}
                        </Typography>
                      </Box>
                    )}
                    {escort.physicalAttributes.smoker && (
                      <Box
                        sx={{
                          p: 2.5,
                          borderRadius: 2,
                          backgroundColor: alpha(theme.palette.primary.main, 0.05),
                          border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                        }}
                      >
                        <Typography variant="caption" sx={{ color: theme.palette.text.secondary, display: 'block', mb: 1, fontWeight: 600, textTransform: 'uppercase', fontSize: '0.75rem' }}>
                          Fumante
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 600, color: theme.palette.text.primary }}>
                          {escort.physicalAttributes.smoker}
                        </Typography>
                      </Box>
                    )}
                  </Box>
                </Grid>

                {/* Coluna Direita */}
                <Grid item xs={12} md={6}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {escort.physicalAttributes.sexualPreference && (
                      <Box
                        sx={{
                          p: 2.5,
                          borderRadius: 2,
                          backgroundColor: alpha(theme.palette.secondary.main, 0.05),
                          border: `1px solid ${alpha(theme.palette.secondary.main, 0.2)}`,
                        }}
                      >
                        <Typography variant="caption" sx={{ color: theme.palette.text.secondary, display: 'block', mb: 1, fontWeight: 600, textTransform: 'uppercase', fontSize: '0.75rem' }}>
                          Preferência Sexual
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 600, color: theme.palette.text.primary, mb: 0.5 }}>
                          {escort.physicalAttributes.sexualPreference}
                        </Typography>
                        <Typography variant="body2" sx={{ color: theme.palette.text.secondary, fontSize: '0.85rem', lineHeight: 1.6 }}>
                          Faz e recebe penetração
                        </Typography>
                      </Box>
                    )}
                    {escort.physicalAttributes.height && (
                      <Box
                        sx={{
                          p: 2.5,
                          borderRadius: 2,
                          backgroundColor: alpha(theme.palette.primary.main, 0.05),
                          border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                        }}
                      >
                        <Typography variant="caption" sx={{ color: theme.palette.text.secondary, display: 'block', mb: 1, fontWeight: 600, textTransform: 'uppercase', fontSize: '0.75rem' }}>
                          Altura
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 600, color: theme.palette.text.primary }}>
                          {escort.physicalAttributes.height}
                        </Typography>
                      </Box>
                    )}
                    {escort.physicalAttributes.eyeColor && (
                      <Box
                        sx={{
                          p: 2.5,
                          borderRadius: 2,
                          backgroundColor: alpha(theme.palette.secondary.main, 0.05),
                          border: `1px solid ${alpha(theme.palette.secondary.main, 0.2)}`,
                        }}
                      >
                        <Typography variant="caption" sx={{ color: theme.palette.text.secondary, display: 'block', mb: 1, fontWeight: 600, textTransform: 'uppercase', fontSize: '0.75rem' }}>
                          Cor dos Olhos
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 600, color: theme.palette.text.primary }}>
                          {escort.physicalAttributes.eyeColor}
                        </Typography>
                      </Box>
                    )}
                    {escort.physicalAttributes.hairSize && (
                      <Box
                        sx={{
                          p: 2.5,
                          borderRadius: 2,
                          backgroundColor: alpha(theme.palette.primary.main, 0.05),
                          border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                        }}
                      >
                        <Typography variant="caption" sx={{ color: theme.palette.text.secondary, display: 'block', mb: 1, fontWeight: 600, textTransform: 'uppercase', fontSize: '0.75rem' }}>
                          Tamanho de Cabelo
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 600, color: theme.palette.text.primary }}>
                          {escort.physicalAttributes.hairSize}
                        </Typography>
                      </Box>
                    )}
                    {escort.physicalAttributes.hasSilicone !== undefined && (
                      <Box
                        sx={{
                          p: 2.5,
                          borderRadius: 2,
                          backgroundColor: alpha(theme.palette.secondary.main, 0.05),
                          border: `1px solid ${alpha(theme.palette.secondary.main, 0.2)}`,
                        }}
                      >
                        <Typography variant="caption" sx={{ color: theme.palette.text.secondary, display: 'block', mb: 1, fontWeight: 600, textTransform: 'uppercase', fontSize: '0.75rem' }}>
                          Silicone
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 600, color: theme.palette.text.primary }}>
                          {escort.physicalAttributes.hasSilicone ? 'Sim' : 'Não'}
                        </Typography>
                      </Box>
                    )}
                    {escort.physicalAttributes.hasPiercings !== undefined && (
                      <Box
                        sx={{
                          p: 2.5,
                          borderRadius: 2,
                          backgroundColor: alpha(theme.palette.primary.main, 0.05),
                          border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                        }}
                      >
                        <Typography variant="caption" sx={{ color: theme.palette.text.secondary, display: 'block', mb: 1, fontWeight: 600, textTransform: 'uppercase', fontSize: '0.75rem' }}>
                          Piercings
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 600, color: theme.palette.text.primary }}>
                          {escort.physicalAttributes.hasPiercings ? 'Sim' : 'Não'}
                        </Typography>
                      </Box>
                    )}
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          )}

          {/* Languages */}
          {escort.languages && escort.languages.length > 0 && (
            <Paper
              elevation={0}
              sx={{
                p: 3,
                mb: 4,
                borderRadius: 2,
                border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
              }}
            >
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                Idiomas
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {escort.languages.map((lang) => (
                  <Chip
                    key={lang}
                    label={lang}
                    sx={{
                      backgroundColor: alpha(theme.palette.primary.main, 0.1),
                      color: theme.palette.primary.main,
                      fontWeight: 600,
                    }}
                  />
                ))}
              </Box>
            </Paper>
          )}

          {/* Reviews Section */}
          <Paper
            elevation={0}
            sx={{
              p: 3,
              mb: 4,
              borderRadius: 2,
              border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
            }}
          >
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Avaliações ({mockReviews.length})
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {mockReviews.map((review) => (
                <Box key={review.id}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                    <Box>
                      <Typography variant="body1" sx={{ fontWeight: 600, mb: 0.5 }}>
                        {review.author}
                      </Typography>
                      <Rating value={review.rating} readOnly size="small" />
                    </Box>
                    <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>
                      {new Date(review.date).toLocaleDateString('pt-BR')}
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ color: theme.palette.text.secondary, lineHeight: 1.7 }}>
                    {review.comment}
                  </Typography>
                  {review.id !== mockReviews[mockReviews.length - 1].id && (
                    <Divider sx={{ mt: 2 }} />
                  )}
                </Box>
              ))}
            </Box>
          </Paper>
        </Grid>

        {/* Sidebar - Contact & Pricing */}
        <Grid item xs={12} md={4}>
          <Box sx={{ position: 'sticky', top: 100 }}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                borderRadius: 3,
                border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                mb: 3,
              }}
            >
              <Typography variant="h5" sx={{ mb: 3, fontWeight: 700 }}>
                Preços
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 3 }}>
                <Box
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    backgroundColor: alpha(theme.palette.primary.main, 0.05),
                    border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                  }}
                >
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box>
                      <Typography variant="body2" sx={{ color: theme.palette.text.secondary, mb: 0.5 }}>
                        Por hora
                      </Typography>
                      <Typography variant="h4" sx={{ fontWeight: 700, color: theme.palette.primary.main }}>
                        R$ {escort.pricing.hour}
                      </Typography>
                    </Box>
                    <AccessTimeIcon sx={{ fontSize: 32, color: theme.palette.primary.main, opacity: 0.5 }} />
                  </Box>
                </Box>
                {escort.pricing.halfHour && (
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      backgroundColor: alpha(theme.palette.secondary.main, 0.05),
                      border: `1px solid ${alpha(theme.palette.secondary.main, 0.2)}`,
                    }}
                  >
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Box>
                        <Typography variant="body2" sx={{ color: theme.palette.text.secondary, mb: 0.5 }}>
                          Meia hora
                        </Typography>
                        <Typography variant="h5" sx={{ fontWeight: 700, color: theme.palette.secondary.main }}>
                          R$ {escort.pricing.halfHour}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                )}
                {escort.pricing.night && (
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      backgroundColor: alpha(theme.palette.secondary.main, 0.05),
                      border: `1px solid ${alpha(theme.palette.secondary.main, 0.2)}`,
                    }}
                  >
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Box>
                        <Typography variant="body2" sx={{ color: theme.palette.text.secondary, mb: 0.5 }}>
                          Por noite
                        </Typography>
                        <Typography variant="h5" sx={{ fontWeight: 700, color: theme.palette.secondary.main }}>
                          R$ {escort.pricing.night}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                )}
                {escort.pricing.weekend && (
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      backgroundColor: alpha(theme.palette.primary.main, 0.05),
                      border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                    }}
                  >
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Box>
                        <Typography variant="body2" sx={{ color: theme.palette.text.secondary, mb: 0.5 }}>
                          Fim de semana
                        </Typography>
                        <Typography variant="h5" sx={{ fontWeight: 700, color: theme.palette.primary.main }}>
                          R$ {escort.pricing.weekend}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                )}
              </Box>

              <Button
                variant="contained"
                fullWidth
                size="large"
                startIcon={<MessageIcon />}
                sx={{
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
                Entrar em Contato
              </Button>

              <Button
                variant="outlined"
                fullWidth
                size="large"
                startIcon={<PhoneIcon />}
                sx={{
                  mb: 2,
                  py: 1.5,
                  fontSize: '1rem',
                  fontWeight: 600,
                  borderWidth: 2,
                  '&:hover': {
                    borderWidth: 2,
                    backgroundColor: alpha(theme.palette.primary.main, 0.05),
                  },
                }}
              >
                Ligar Agora
              </Button>

              <Button
                variant="outlined"
                fullWidth
                size="large"
                startIcon={<EmailIcon />}
                sx={{
                  py: 1.5,
                  fontSize: '1rem',
                  fontWeight: 600,
                  borderWidth: 2,
                  '&:hover': {
                    borderWidth: 2,
                    backgroundColor: alpha(theme.palette.primary.main, 0.05),
                  },
                }}
              >
                Enviar E-mail
              </Button>
            </Paper>

            {/* Availability Card */}
            {escort.available && (
              <Paper
                elevation={0}
                sx={{
                  p: 2,
                  borderRadius: 2,
                  backgroundColor: alpha(theme.palette.success.main, 0.1),
                  border: `1px solid ${alpha(theme.palette.success.main, 0.3)}`,
                  textAlign: 'center',
                }}
              >
                <CheckCircleIcon sx={{ fontSize: 40, color: theme.palette.success.main, mb: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: 600, color: theme.palette.success.main, mb: 0.5 }}>
                  Disponível Agora
                </Typography>
                <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                  Resposta rápida garantida
                </Typography>
              </Paper>
            )}
          </Box>
        </Grid>
      </Grid>
      </Container>
    </Box>
  )
}

