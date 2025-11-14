'use client'

import { Box, Container, Typography, Grid, Link, useTheme } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'

export function Footer() {
  const theme = useTheme()

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.palette.grey[900],
        color: theme.palette.grey[100],
        py: 6,
        mt: 8,
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                mb: 2,
                background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Lençol de Seda
            </Typography>
            <Typography variant="body2" sx={{ color: theme.palette.grey[400], mb: 2 }}>
              Plataforma premium para aluguel de quartos e serviços exclusivos.
              Experiência de luxo e sofisticação.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
              <Link href="#" sx={{ color: theme.palette.grey[400], '&:hover': { color: theme.palette.primary.main } }}>
                <FacebookIcon />
              </Link>
              <Link href="#" sx={{ color: theme.palette.grey[400], '&:hover': { color: theme.palette.primary.main } }}>
                <InstagramIcon />
              </Link>
              <Link href="#" sx={{ color: theme.palette.grey[400], '&:hover': { color: theme.palette.primary.main } }}>
                <TwitterIcon />
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Quartos
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="/rooms" sx={{ color: theme.palette.grey[400], '&:hover': { color: theme.palette.primary.main } }}>
                Buscar Quartos
              </Link>
              <Link href="/rooms/publish" sx={{ color: theme.palette.grey[400], '&:hover': { color: theme.palette.primary.main } }}>
                Publicar Quarto
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Acompanhantes
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="/escorts" sx={{ color: theme.palette.grey[400], '&:hover': { color: theme.palette.primary.main } }}>
                Buscar Acompanhantes
              </Link>
              <Link href="/escorts/publish" sx={{ color: theme.palette.grey[400], '&:hover': { color: theme.palette.primary.main } }}>
                Criar Anúncio
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Sobre
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="/quem-somos" sx={{ color: theme.palette.grey[400], '&:hover': { color: theme.palette.primary.main } }}>
                Quem Somos
              </Link>
              <Link href="/contato" sx={{ color: theme.palette.grey[400], '&:hover': { color: theme.palette.primary.main } }}>
                Contato
              </Link>
              <Link href="/regras" sx={{ color: theme.palette.grey[400], '&:hover': { color: theme.palette.primary.main } }}>
                Regras e Termos
              </Link>
              <Link href="#" sx={{ color: theme.palette.grey[400], '&:hover': { color: theme.palette.primary.main } }}>
                Central de Ajuda
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Conta
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="/login" sx={{ color: theme.palette.grey[400], '&:hover': { color: theme.palette.primary.main } }}>
                Entrar
              </Link>
              <Link href="/register" sx={{ color: theme.palette.grey[400], '&:hover': { color: theme.palette.primary.main } }}>
                Criar Conta
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Box
          sx={{
            borderTop: `1px solid ${theme.palette.grey[800]}`,
            mt: 4,
            pt: 4,
            textAlign: 'center',
          }}
        >
          <Typography variant="body2" sx={{ color: theme.palette.grey[400] }}>
            © {new Date().getFullYear()} Lençol de Seda. Todos os direitos reservados.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

