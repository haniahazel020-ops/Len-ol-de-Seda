'use client'

import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  TextField,
  Button,
  useTheme,
  alpha,
  Divider,
} from '@mui/material'
import { palette } from '@/lib/theme/palette'
import Image from 'next/image'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import SendIcon from '@mui/icons-material/Send'
import { Breadcrumbs } from '@/components/common/Breadcrumbs'

export default function ContatoPage() {
  const theme = useTheme()

  return (
    <Box sx={{ backgroundColor: '#FAFAFA', minHeight: '100vh' }}>
      <Container maxWidth="xl" sx={{ py: { xs: 4, md: 8 } }}>
        {/* Breadcrumbs */}
        <Breadcrumbs items={[
          { label: 'Início', href: '/' },
          { label: 'Contato' },
        ]} />

        {/* Hero Section */}
        <Box
          sx={{
            position: 'relative',
            borderRadius: 4,
            overflow: 'hidden',
            mb: 6,
            minHeight: { xs: 300, md: 400 },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
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
                src="/images/lençou1.jpg"
                alt="Contato Background"
                fill
                priority
                quality={100}
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center top',
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
          </Box>
          
          <Container maxWidth="md" sx={{ position: 'relative', zIndex: 4, textAlign: 'center', py: 6 }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontWeight: 700,
                color: '#FFFFFF',
                mb: 2,
                textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
              }}
            >
              Entre em Contato
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: '1rem', md: '1.2rem' },
                color: alpha('#FFFFFF', 0.95),
                fontWeight: 300,
              }}
            >
              Estamos aqui para ajudar você
            </Typography>
          </Container>
        </Box>

        <Grid container spacing={4}>
          {/* Contact Information */}
          <Grid item xs={12} md={4}>
            <Box sx={{ position: 'sticky', top: 100 }}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  borderRadius: 3,
                  background: `linear-gradient(135deg, ${alpha(palette.primary[50], 0.5)} 0%, ${alpha(palette.secondary[50], 0.3)} 100%)`,
                  border: `1px solid ${alpha(palette.primary[500], 0.1)}`,
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    color: palette.primary[900],
                    mb: 4,
                  }}
                >
                  Informações de Contato
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: '50%',
                        backgroundColor: palette.primary[500],
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <EmailIcon sx={{ color: '#FFFFFF', fontSize: 24 }} />
                    </Box>
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5, color: palette.primary[900] }}>
                        E-mail
                      </Typography>
                      <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                        contato@lençoldeseda.com.br
                      </Typography>
                      <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                        suporte@lençoldeseda.com.br
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: '50%',
                        backgroundColor: palette.secondary[500],
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <PhoneIcon sx={{ color: '#FFFFFF', fontSize: 24 }} />
                    </Box>
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5, color: palette.primary[900] }}>
                        Telefone
                      </Typography>
                      <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                        (11) 98765-4321
                      </Typography>
                      <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                        (11) 3456-7890
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: '50%',
                        backgroundColor: palette.primary[500],
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <LocationOnIcon sx={{ color: '#FFFFFF', fontSize: 24 }} />
                    </Box>
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5, color: palette.primary[900] }}>
                        Endereço
                      </Typography>
                      <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                        Av. Paulista, 1000
                      </Typography>
                      <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                        Bela Vista, São Paulo - SP
                      </Typography>
                      <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                        CEP: 01310-100
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Divider sx={{ my: 4 }} />

                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2, color: palette.primary[900] }}>
                    Horário de Atendimento
                  </Typography>
                  <Typography variant="body2" sx={{ color: theme.palette.text.secondary, mb: 1 }}>
                    Segunda a Sexta: 9h às 18h
                  </Typography>
                  <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                    Sábado: 10h às 14h
                  </Typography>
                </Box>
              </Paper>
            </Box>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={8}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                borderRadius: 3,
                background: `linear-gradient(135deg, ${alpha(palette.secondary[50], 0.5)} 0%, ${alpha(palette.primary[50], 0.3)} 100%)`,
                border: `1px solid ${alpha(palette.secondary[500], 0.1)}`,
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 600,
                  color: palette.primary[900],
                  mb: 4,
                }}
              >
                Envie sua Mensagem
              </Typography>

              <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Nome Completo"
                      variant="outlined"
                      required
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '&:hover fieldset': {
                            borderColor: palette.primary[500],
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: palette.primary[500],
                          },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="E-mail"
                      type="email"
                      variant="outlined"
                      required
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '&:hover fieldset': {
                            borderColor: palette.primary[500],
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: palette.primary[500],
                          },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Telefone"
                      type="tel"
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '&:hover fieldset': {
                            borderColor: palette.primary[500],
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: palette.primary[500],
                          },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Assunto"
                      variant="outlined"
                      required
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '&:hover fieldset': {
                            borderColor: palette.primary[500],
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: palette.primary[500],
                          },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Mensagem"
                      multiline
                      rows={6}
                      variant="outlined"
                      required
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '&:hover fieldset': {
                            borderColor: palette.primary[500],
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: palette.primary[500],
                          },
                        },
                      }}
                    />
                  </Grid>
                </Grid>

                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  endIcon={<SendIcon />}
                  sx={{
                    mt: 2,
                    py: 1.5,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    background: `linear-gradient(135deg, ${palette.primary[500]} 0%, ${palette.secondary[500]} 100%)`,
                    boxShadow: `0 8px 24px ${alpha(palette.primary[500], 0.3)}`,
                    '&:hover': {
                      background: `linear-gradient(135deg, ${palette.primary[600]} 0%, ${palette.secondary[600]} 100%)`,
                      boxShadow: `0 12px 32px ${alpha(palette.primary[500], 0.4)}`,
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Enviar Mensagem
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

