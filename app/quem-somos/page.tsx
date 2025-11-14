'use client'

import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  useTheme,
  alpha,
  Divider,
  Card,
  CardContent,
} from '@mui/material'
import { palette } from '@/lib/theme/palette'
import Image from 'next/image'
import SecurityIcon from '@mui/icons-material/Security'
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser'
import FavoriteIcon from '@mui/icons-material/Favorite'
import LocalOfferIcon from '@mui/icons-material/LocalOffer'
import StarIcon from '@mui/icons-material/Star'
import ShieldIcon from '@mui/icons-material/Shield'
import { Breadcrumbs } from '@/components/common/Breadcrumbs'

export default function QuemSomosPage() {
  const theme = useTheme()

  const values = [
    {
      icon: <SecurityIcon sx={{ fontSize: 48 }} />,
      title: 'Discrição Absoluta',
      description: 'Seu anonimato e privacidade são nossa prioridade máxima. Operamos com total confidencialidade e segurança.',
    },
    {
      icon: <ShieldIcon sx={{ fontSize: 48 }} />,
      title: 'Segurança Garantida',
      description: 'Plataforma segura com verificação rigorosa de perfis e transações protegidas para sua tranquilidade.',
    },
    {
      icon: <StarIcon sx={{ fontSize: 48 }} />,
      title: 'Bom Gosto',
      description: 'Criado para pessoas que valorizam qualidade, elegância e experiências refinadas.',
    },
    {
      icon: <LocalOfferIcon sx={{ fontSize: 48 }} />,
      title: 'Valores Justos',
      description: 'Acreditamos em transparência e justiça. Sem taxas abusivas, com valores justos para quem anuncia.',
    },
  ]

  const principles = [
    {
      title: 'Nossa Missão',
      content: 'Criar um espaço exclusivo e discreto onde pessoas de bom gosto possam encontrar experiências únicas, seja através de aluguel de quartos sofisticados ou serviços de acompanhamento de alto padrão. Valorizamos a elegância, o respeito e a discrição em cada interação.',
    },
    {
      title: 'Nossa Visão',
      content: 'Ser a plataforma de referência para quem busca qualidade, segurança e bom gosto. Um ambiente onde a sofisticação encontra a praticidade, sempre com valores justos e transparência total.',
    },
    {
      title: 'Nossos Valores',
      content: 'Discrição, segurança, elegância e justiça são os pilares que guiam cada decisão. Acreditamos que experiências memoráveis nascem de encontros respeitosos, ambientes cuidados e valores justos para todos.',
    },
  ]

  return (
    <Box sx={{ backgroundColor: '#FAFAFA', minHeight: '100vh' }}>
      <Container maxWidth="xl" sx={{ py: { xs: 4, md: 8 } }}>
        {/* Breadcrumbs */}
        <Breadcrumbs items={[
          { label: 'Início', href: '/' },
          { label: 'Quem Somos' },
        ]} />

        {/* Hero Section */}
        <Box
          sx={{
            position: 'relative',
            borderRadius: 4,
            overflow: 'hidden',
            mb: 6,
            minHeight: { xs: 400, md: 500 },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
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
                src="/images/lençou1.jpg"
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
          
          <Container maxWidth="md" sx={{ position: 'relative', zIndex: 4, textAlign: 'center', py: 8 }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', md: '4rem' },
                fontWeight: 700,
                color: '#FFFFFF',
                mb: 3,
                textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                lineHeight: 1.2,
              }}
            >
              Lençol de Seda
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: '1.1rem', md: '1.5rem' },
                color: alpha('#FFFFFF', 0.95),
                mb: 2,
                fontWeight: 300,
                fontStyle: 'italic',
              }}
            >
              "Pensa nós dois molhando o lençol de seda"
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '1rem', md: '1.2rem' },
                color: alpha('#FFFFFF', 0.9),
                maxWidth: 600,
                mx: 'auto',
                lineHeight: 1.8,
              }}
            >
              Uma plataforma discreta, segura e elegante para pessoas que valorizam experiências sofisticadas e valores justos.
            </Typography>
          </Container>
        </Box>

        {/* About Section */}
        <Box sx={{ mb: 8 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  height: '100%',
                  borderRadius: 3,
                  background: `linear-gradient(135deg, ${alpha(palette.primary[50], 0.5)} 0%, ${alpha(palette.secondary[50], 0.3)} 100%)`,
                  border: `1px solid ${alpha(palette.primary[500], 0.1)}`,
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: { xs: '2rem', md: '2.5rem' },
                    fontWeight: 700,
                    color: palette.primary[900],
                    mb: 3,
                  }}
                >
                  Quem Somos
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '1.1rem',
                    lineHeight: 1.9,
                    color: theme.palette.text.secondary,
                    mb: 3,
                  }}
                >
                  O <strong>Lençol de Seda</strong> nasceu da inspiração de criar um espaço exclusivo, 
                  onde a elegância encontra a discrição. Somos uma plataforma local, pensada para 
                  pessoas de bom gosto que buscam experiências refinadas e valores justos.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '1.1rem',
                    lineHeight: 1.9,
                    color: theme.palette.text.secondary,
                  }}
                >
                  Nossa essência reflete a sofisticação e a sensualidade da música que nos inspira, 
                  sempre mantendo um ambiente profissional, seguro e discreto. Acreditamos que 
                  experiências memoráveis nascem de encontros respeitosos e ambientes cuidados.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  height: '100%',
                  borderRadius: 3,
                  background: `linear-gradient(135deg, ${alpha(palette.secondary[50], 0.5)} 0%, ${alpha(palette.primary[50], 0.3)} 100%)`,
                  border: `1px solid ${alpha(palette.secondary[500], 0.1)}`,
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 600,
                    color: palette.primary[900],
                    mb: 3,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                  }}
                >
                  <FavoriteIcon sx={{ color: palette.primary[500] }} />
                  Nossa Filosofia
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '1.1rem',
                    lineHeight: 1.9,
                    color: theme.palette.text.secondary,
                    mb: 3,
                  }}
                >
                  Acreditamos em <strong>valores justos</strong> para quem anuncia em nossa plataforma. 
                  Sem taxas abusivas, sem comissões exorbitantes. Queremos que você tenha uma experiência 
                  lucrativa e satisfatória.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '1.1rem',
                    lineHeight: 1.9,
                    color: theme.palette.text.secondary,
                  }}
                >
                  Priorizamos a <strong>discrição</strong> e a <strong>segurança</strong> em cada 
                  interação. Seu anonimato e privacidade são sagrados para nós. Criamos um ambiente 
                  onde você pode se sentir confortável e protegido.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>

        {/* Values Grid */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 700,
              textAlign: 'center',
              color: palette.primary[900],
              mb: 6,
            }}
          >
            Nossos Pilares
          </Typography>
          <Grid container spacing={4}>
            {values.map((value, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  elevation={0}
                  sx={{
                    height: '100%',
                    p: 3,
                    borderRadius: 3,
                    textAlign: 'center',
                    background: `linear-gradient(135deg, ${alpha(palette.primary[50], 0.6)} 0%, ${alpha(palette.secondary[50], 0.4)} 100%)`,
                    border: `1px solid ${alpha(palette.primary[500], 0.1)}`,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: `0 12px 40px ${alpha(palette.primary[500], 0.2)}`,
                      borderColor: palette.primary[500],
                    },
                  }}
                >
                  <CardContent>
                    <Box
                      sx={{
                        color: palette.primary[500],
                        mb: 2,
                        display: 'flex',
                        justifyContent: 'center',
                      }}
                    >
                      {value.icon}
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        color: palette.primary[900],
                        mb: 2,
                      }}
                    >
                      {value.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: theme.palette.text.secondary,
                        lineHeight: 1.7,
                      }}
                    >
                      {value.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Principles Section */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 700,
              textAlign: 'center',
              color: palette.primary[900],
              mb: 6,
            }}
          >
            Missão, Visão e Valores
          </Typography>
          <Grid container spacing={4}>
            {principles.map((principle, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: '100%',
                    borderRadius: 3,
                    background: index % 2 === 0
                      ? `linear-gradient(135deg, ${alpha(palette.primary[50], 0.5)} 0%, ${alpha(palette.secondary[50], 0.3)} 100%)`
                      : `linear-gradient(135deg, ${alpha(palette.secondary[50], 0.5)} 0%, ${alpha(palette.primary[50], 0.3)} 100%)`,
                    border: `1px solid ${alpha(palette.primary[500], 0.1)}`,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: `0 8px 32px ${alpha(palette.primary[500], 0.15)}`,
                    },
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 600,
                      color: palette.primary[900],
                      mb: 2,
                    }}
                  >
                    {principle.title}
                  </Typography>
                  <Divider sx={{ mb: 3, borderColor: alpha(palette.primary[500], 0.2) }} />
                  <Typography
                    variant="body1"
                    sx={{
                      color: theme.palette.text.secondary,
                      lineHeight: 1.9,
                    }}
                  >
                    {principle.content}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* CTA Section */}
        <Box
          sx={{
            position: 'relative',
            borderRadius: 4,
            overflow: 'hidden',
            p: { xs: 4, md: 8 },
            minHeight: { xs: 400, md: 500 },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
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
                src="/images/lençou1.jpg"
                alt="CTA Background"
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
          
          <Box sx={{ position: 'relative', zIndex: 4, width: '100%' }}>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: '2rem', md: '3rem' },
                fontWeight: 700,
                color: '#FFFFFF',
                mb: 3,
                textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
              }}
            >
              Faça Parte Desta Experiência
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: '1rem', md: '1.3rem' },
                color: alpha('#FFFFFF', 0.95),
                mb: 4,
                maxWidth: 700,
                mx: 'auto',
                lineHeight: 1.8,
                fontWeight: 300,
              }}
            >
              Seja para anunciar seu espaço ou seus serviços, oferecemos uma plataforma 
              discreta, segura e com valores justos. Junte-se a nós e descubra uma nova 
              forma de conectar pessoas de bom gosto.
            </Typography>
            <Box
              sx={{
                display: 'flex',
                gap: 2,
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <Box
                sx={{
                  px: 4,
                  py: 2,
                  borderRadius: 2,
                  backgroundColor: alpha('#FFFFFF', 0.2),
                  backdropFilter: 'blur(10px)',
                  border: `1px solid ${alpha('#FFFFFF', 0.3)}`,
                }}
              >
                <Typography variant="h6" sx={{ color: '#FFFFFF', fontWeight: 600, mb: 0.5 }}>
                  Valores Justos
                </Typography>
                <Typography variant="body2" sx={{ color: alpha('#FFFFFF', 0.9) }}>
                  Sem taxas abusivas
                </Typography>
              </Box>
              <Box
                sx={{
                  px: 4,
                  py: 2,
                  borderRadius: 2,
                  backgroundColor: alpha('#FFFFFF', 0.2),
                  backdropFilter: 'blur(10px)',
                  border: `1px solid ${alpha('#FFFFFF', 0.3)}`,
                }}
              >
                <Typography variant="h6" sx={{ color: '#FFFFFF', fontWeight: 600, mb: 0.5 }}>
                  Total Discrição
                </Typography>
                <Typography variant="body2" sx={{ color: alpha('#FFFFFF', 0.9) }}>
                  Seu anonimato garantido
                </Typography>
              </Box>
              <Box
                sx={{
                  px: 4,
                  py: 2,
                  borderRadius: 2,
                  backgroundColor: alpha('#FFFFFF', 0.2),
                  backdropFilter: 'blur(10px)',
                  border: `1px solid ${alpha('#FFFFFF', 0.3)}`,
                }}
              >
                <Typography variant="h6" sx={{ color: '#FFFFFF', fontWeight: 600, mb: 0.5 }}>
                  Ambiente Seguro
                </Typography>
                <Typography variant="body2" sx={{ color: alpha('#FFFFFF', 0.9) }}>
                  Plataforma verificada
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

