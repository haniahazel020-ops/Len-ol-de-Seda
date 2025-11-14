'use client'

import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  useTheme,
  alpha,
} from '@mui/material'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { EscortCard } from '@/components/escorts/EscortCard'
import { mockEscorts } from '@/lib/utils/mockEscorts'
import { palette } from '@/lib/theme/palette'
import { StatsSection } from '@/components/common/StatsSection'

export default function HomePage() {
  const theme = useTheme()
  const router = useRouter()
  const featuredEscorts = mockEscorts.slice(0, 3)
  const latestEscorts = mockEscorts.slice(3, 9) // Próximas 6 profissionais

  return (
    <Box>
      {/* Hero Section - Foco em Acompanhantes */}
      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
          minHeight: { xs: '70vh', md: '90vh' },
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {/* Background Image with Animation */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 0,
          }}
        >
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              height: '100%',
              '&::after': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.3) 100%)',
                zIndex: 1,
              },
            }}
          >
            <Image
              src="/images/hero.jpg"
              alt="Hero Background"
              fill
              priority
              quality={100}
              unoptimized={false}
              style={{
                objectFit: 'cover',
                objectPosition: 'center top',
                transform: 'scale(1.02)',
                transition: 'transform 0.5s ease',
                filter: 'contrast(1.1) brightness(1.05)',
              }}
              className="hero-image"
            />
          </Box>
          
          {/* Multi-layer Overlay for Depth */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: `linear-gradient(135deg, ${alpha(palette.primary[900], 0.75)} 0%, ${alpha(palette.primary[500], 0.55)} 50%, ${alpha(palette.secondary[500], 0.45)} 100%)`,
              zIndex: 2,
            }}
          />
          
          {/* Subtle Radial Gradient for Focus */}
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '100%',
              height: '100%',
              background: `radial-gradient(circle at center, transparent 0%, ${alpha(palette.primary[900], 0.4)} 100%)`,
              zIndex: 3,
            }}
          />
        </Box>

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 4, py: { xs: 10, md: 16 } }}>
          <Box 
            sx={{ 
              textAlign: 'center', 
              maxWidth: '900px', 
              mx: 'auto',
              animation: 'fadeInUp 0.8s ease-out',
              '@keyframes fadeInUp': {
                '0%': {
                  opacity: 0,
                  transform: 'translateY(30px)',
                },
                '100%': {
                  opacity: 1,
                  transform: 'translateY(0)',
                },
              },
            }}
          >
            {/* Badge/Subtitle */}
            <Box
              sx={{
                display: 'inline-block',
                mb: 3,
                px: 3,
                py: 1,
                borderRadius: '50px',
                backgroundColor: alpha('#FFFFFF', 0.15),
                backdropFilter: 'blur(10px)',
                border: `1px solid ${alpha('#FFFFFF', 0.2)}`,
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  color: '#FFFFFF',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  fontSize: '0.875rem',
                }}
              >
                ✦ Premium Experience ✦
              </Typography>
            </Box>

            <Typography
              variant="h1"
              sx={{
                mb: 3,
                fontSize: { xs: '2.5rem', md: '4.5rem' },
                fontWeight: 800,
                letterSpacing: '-0.04em',
                color: '#FFFFFF',
                textShadow: '0 4px 20px rgba(0, 0, 0, 0.5), 0 2px 8px rgba(0, 0, 0, 0.3)',
                lineHeight: 1.1,
                '&::after': {
                  content: '""',
                  display: 'block',
                  width: '80px',
                  height: '4px',
                  background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  margin: '20px auto 0',
                  borderRadius: '2px',
                },
              }}
            >
              Elegância e Sofisticação
            </Typography>
            
            <Typography
              variant="h5"
              sx={{
                mb: 6,
                color: '#FFFFFF',
                fontWeight: 300,
                fontSize: { xs: '1.1rem', md: '1.5rem' },
                maxWidth: '700px',
                mx: 'auto',
                lineHeight: 1.7,
                textShadow: '0 2px 12px rgba(0, 0, 0, 0.4)',
                opacity: 0.95,
              }}
            >
              Conheça profissionais exclusivas que transformam momentos especiais em experiências inesquecíveis
            </Typography>
            
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                size="large"
                onClick={() => router.push('/escorts')}
                endIcon={<ArrowForwardIcon />}
                sx={{
                  px: 6,
                  py: 2.5,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                  boxShadow: `0 8px 32px ${alpha(theme.palette.primary.main, 0.4)}, 0 4px 16px ${alpha(theme.palette.primary.main, 0.3)}`,
                  border: `1px solid ${alpha('#FFFFFF', 0.2)}`,
                  backdropFilter: 'blur(10px)',
                  '&:hover': {
                    background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.secondary.dark} 100%)`,
                    boxShadow: `0 12px 40px ${alpha(theme.palette.primary.main, 0.5)}, 0 6px 20px ${alpha(theme.palette.primary.main, 0.4)}`,
                    transform: 'translateY(-3px) scale(1.02)',
                  },
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                Explorar Acompanhantes
              </Button>
              
              <Button
                variant="outlined"
                size="large"
                onClick={() => router.push('/rooms')}
                sx={{
                  px: 5,
                  py: 2.5,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  borderWidth: 2,
                  borderColor: alpha('#FFFFFF', 0.3),
                  color: '#FFFFFF',
                  backdropFilter: 'blur(10px)',
                  backgroundColor: alpha('#FFFFFF', 0.1),
                  '&:hover': {
                    borderWidth: 2,
                    borderColor: '#FFFFFF',
                    backgroundColor: alpha('#FFFFFF', 0.2),
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Ver Quartos
              </Button>
            </Box>
          </Box>
        </Container>

        {/* Scroll Indicator */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 40,
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 4,
            display: { xs: 'none', md: 'flex' },
            flexDirection: 'column',
            alignItems: 'center',
            gap: 1,
            animation: 'bounce 2s infinite',
            '@keyframes bounce': {
              '0%, 100%': {
                transform: 'translateX(-50%) translateY(0)',
              },
              '50%': {
                transform: 'translateX(-50%) translateY(10px)',
              },
            },
          }}
        >
          <Typography
            variant="caption"
            sx={{
              color: '#FFFFFF',
              opacity: 0.8,
              fontWeight: 500,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              fontSize: '0.75rem',
            }}
          >
            Role para explorar
          </Typography>
          <Box
            sx={{
              width: '2px',
              height: '30px',
              background: `linear-gradient(180deg, ${theme.palette.primary.main}, transparent)`,
              borderRadius: '2px',
            }}
          />
        </Box>
      </Box>

      {/* Featured Escorts Section */}
      <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              mb: 2,
              fontWeight: 700,
              fontSize: { xs: '2rem', md: '3rem' },
              letterSpacing: '-0.02em',
            }}
          >
            Destaques
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
            Conheça algumas de nossas profissionais mais requisitadas
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ mb: 8 }}>
          {featuredEscorts.map((escort) => (
            <Grid item xs={12} md={4} key={escort.id}>
              <EscortCard escort={escort} />
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center' }}>
          <Button
            variant="outlined"
            size="large"
            onClick={() => router.push('/escorts')}
            endIcon={<ArrowForwardIcon />}
            sx={{
              px: 5,
              py: 1.5,
              fontSize: '1.1rem',
              fontWeight: 600,
              borderWidth: 2,
              borderColor: theme.palette.primary.main,
              color: theme.palette.primary.main,
              '&:hover': {
                borderWidth: 2,
                backgroundColor: alpha(theme.palette.primary.main, 0.05),
                transform: 'translateY(-2px)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            Ver Todos os Perfis
          </Button>
        </Box>
      </Container>

      {/* Latest Escorts Section */}
      <Container maxWidth="xl" sx={{ py: { xs: 4, md: 6 } }}>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography
            variant="h4"
            sx={{
              mb: 1,
              fontWeight: 600,
              fontSize: { xs: '1.5rem', md: '2rem' },
              letterSpacing: '-0.01em',
              color: theme.palette.text.primary,
            }}
          >
            Últimas Profissionais Cadastradas
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: theme.palette.text.secondary,
              fontWeight: 300,
              fontSize: '0.875rem',
            }}
          >
            Conheça as mais recentes adições à nossa plataforma
          </Typography>
        </Box>

        <Grid container spacing={2}>
          {latestEscorts.map((escort) => (
            <Grid item xs={6} sm={4} md={2} key={escort.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer',
                  border: `1px solid ${theme.palette.grey[200]}`,
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: `0 4px 12px ${alpha(theme.palette.primary.main, 0.1)}`,
                    borderColor: theme.palette.primary.main,
                  },
                }}
                onClick={() => router.push('/escorts/10')} // Todos apontam para a página de exemplo
              >
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    paddingTop: '100%', // Aspect ratio 1:1 (quadrado)
                    overflow: 'hidden',
                  }}
                >
                  <Image
                    src={escort.photos[0]}
                    alt={escort.name}
                    fill
                    style={{
                      objectFit: 'cover',
                    }}
                  />
                  {escort.verified && (
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 4,
                        left: 4,
                        backgroundColor: theme.palette.success.main,
                        color: '#FFFFFF',
                        px: 0.5,
                        py: 0.25,
                        borderRadius: 0.5,
                        fontSize: '0.6rem',
                        fontWeight: 600,
                      }}
                    >
                      ✓
                    </Box>
                  )}
                  {escort.available && (
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 4,
                        right: 4,
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        backgroundColor: theme.palette.success.main,
                        border: '1px solid #FFFFFF',
                      }}
                    />
                  )}
                </Box>
                <CardContent sx={{ flexGrow: 1, p: 1.5 }}>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 600,
                      mb: 0.25,
                      fontSize: '0.875rem',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {escort.name}, {escort.age}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: theme.palette.text.secondary,
                      mb: 0.5,
                      fontSize: '0.7rem',
                      display: 'block',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {escort.location.city}, {escort.location.state}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 0.5 }}>
                    <Typography
                      variant="caption"
                      sx={{
                        color: theme.palette.primary.main,
                        fontWeight: 600,
                        fontSize: '0.7rem',
                      }}
                    >
                      ★ {escort.rating}
                    </Typography>
                    <Typography variant="caption" sx={{ color: theme.palette.text.secondary, fontSize: '0.65rem' }}>
                      ({escort.reviewCount})
                    </Typography>
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{
                      color: theme.palette.primary.main,
                      fontWeight: 700,
                      fontSize: '0.875rem',
                    }}
                  >
                    R$ {escort.pricing.hour}/h
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Stats Section */}
      <StatsSection />

      {/* Secondary Section - Quartos */}
      <Box
        sx={{
          background: alpha(theme.palette.grey[50], 0.5),
          py: { xs: 8, md: 12 },
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h2"
                sx={{
                  mb: 3,
                  fontWeight: 700,
                  fontSize: { xs: '2rem', md: '3rem' },
                  letterSpacing: '-0.02em',
                }}
              >
                Quartos Exclusivos
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  mb: 4,
                  color: theme.palette.text.secondary,
                  fontWeight: 300,
                  lineHeight: 1.8,
                }}
              >
                Descubra acomodações de luxo em localizações privilegiadas.
                Experiência única de hospedagem com conforto e elegância.
              </Typography>
              <Button
                variant="contained"
                size="large"
                onClick={() => router.push('/rooms')}
                endIcon={<ArrowForwardIcon />}
                sx={{
                  px: 5,
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                }}
              >
                Explorar Quartos
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  borderRadius: 3,
                  overflow: 'hidden',
                  height: { xs: 300, md: 400 },
                  position: 'relative',
                }}
              >
                <CardMedia
                  component="img"
                  image="https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80"
                  alt="Quartos Premium"
                  sx={{
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
          minHeight: { xs: '60vh', md: '70vh' },
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {/* Background Image */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 0,
          }}
        >
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              height: '100%',
              '&::after': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.3) 100%)',
                zIndex: 1,
              },
            }}
          >
            <Image
              src="/images/sensual-home-cta.jpg"
              alt="CTA Background"
              fill
              priority
              quality={100}
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
                transform: 'scale(1.02)',
                transition: 'transform 0.5s ease',
                filter: 'contrast(1.1) brightness(1.05)',
              }}
            />
          </Box>
          
          {/* Multi-layer Overlay */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: `linear-gradient(135deg, ${alpha(palette.primary[900], 0.75)} 0%, ${alpha(palette.primary[500], 0.55)} 50%, ${alpha(palette.secondary[500], 0.45)} 100%)`,
              zIndex: 2,
            }}
          />
          
          {/* Radial Gradient for Focus */}
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '100%',
              height: '100%',
              background: `radial-gradient(circle at center, transparent 0%, ${alpha(palette.primary[900], 0.4)} 100%)`,
              zIndex: 3,
            }}
          />
        </Box>

        <Container maxWidth="md" sx={{ textAlign: 'center', position: 'relative', zIndex: 4, py: { xs: 10, md: 14 } }}>
          <Box
            sx={{
              animation: 'fadeInUp 0.8s ease-out',
              '@keyframes fadeInUp': {
                '0%': {
                  opacity: 0,
                  transform: 'translateY(30px)',
                },
                '100%': {
                  opacity: 1,
                  transform: 'translateY(0)',
                },
              },
            }}
          >
            <Typography
              variant="h3"
              sx={{
                mb: 2,
                fontWeight: 700,
                fontSize: { xs: '2rem', md: '3rem' },
                color: '#FFFFFF',
                textShadow: '0 4px 20px rgba(0, 0, 0, 0.5), 0 2px 8px rgba(0, 0, 0, 0.3)',
              }}
            >
              Pronto para começar?
            </Typography>
            <Typography
              variant="h6"
              sx={{
                mb: 5,
                opacity: 0.95,
                fontWeight: 300,
                fontSize: { xs: '1rem', md: '1.25rem' },
                color: '#FFFFFF',
                textShadow: '0 2px 12px rgba(0, 0, 0, 0.4)',
                lineHeight: 1.7,
              }}
            >
              Junte-se à nossa comunidade premium e descubra experiências exclusivas
            </Typography>
            <Button
              variant="contained"
              size="large"
              onClick={() => router.push('/register')}
              sx={{
                backgroundColor: '#FFFFFF',
                color: theme.palette.primary.main,
                px: 6,
                py: 2.5,
                fontSize: '1.1rem',
                fontWeight: 600,
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 4px 16px rgba(0, 0, 0, 0.2)',
                border: `1px solid ${alpha('#FFFFFF', 0.2)}`,
                backdropFilter: 'blur(10px)',
                '&:hover': {
                  backgroundColor: theme.palette.grey[50],
                  transform: 'translateY(-3px) scale(1.02)',
                  boxShadow: '0 12px 40px rgba(0, 0, 0, 0.4), 0 6px 20px rgba(0, 0, 0, 0.3)',
                },
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              Criar Conta Gratuita
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

