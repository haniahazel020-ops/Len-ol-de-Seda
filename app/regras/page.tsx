'use client'

import {
  Box,
  Container,
  Typography,
  Paper,
  useTheme,
  alpha,
  Divider,
  List,
  ListItem,
  ListItemText,
} from '@mui/material'
import { palette } from '@/lib/theme/palette'
import Image from 'next/image'
import GavelIcon from '@mui/icons-material/Gavel'
import SecurityIcon from '@mui/icons-material/Security'
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser'
import { Breadcrumbs } from '@/components/common/Breadcrumbs'

export default function RegrasPage() {
  const theme = useTheme()

  const sections = [
    {
      title: '1. Aceitação dos Termos',
      icon: <GavelIcon />,
      content: [
        'Ao acessar e utilizar a plataforma Lençol de Seda, você concorda em cumprir e estar vinculado a estes Termos de Uso.',
        'Se você não concordar com qualquer parte destes termos, não deve utilizar nossos serviços.',
        'Reservamos o direito de modificar estes termos a qualquer momento, e tais modificações entrarão em vigor imediatamente após a publicação.',
      ],
    },
    {
      title: '2. Uso da Plataforma',
      icon: <SecurityIcon />,
      content: [
        'A plataforma é destinada exclusivamente para pessoas maiores de 18 anos.',
        'Você é responsável por manter a confidencialidade de sua conta e senha.',
        'É proibido utilizar a plataforma para atividades ilegais ou que violem direitos de terceiros.',
        'Reservamo-nos o direito de suspender ou encerrar contas que violem estes termos.',
      ],
    },
    {
      title: '3. Anúncios e Conteúdo',
      icon: <VerifiedUserIcon />,
      content: [
        'Todo conteúdo publicado deve ser verdadeiro, preciso e não enganoso.',
        'É proibido publicar conteúdo ofensivo, discriminatório ou que viole direitos de terceiros.',
        'Reservamo-nos o direito de remover qualquer conteúdo que consideremos inadequado, sem aviso prévio.',
        'Você é responsável por todo conteúdo que publicar na plataforma.',
      ],
    },
    {
      title: '4. Privacidade e Discrição',
      icon: <SecurityIcon />,
      content: [
        'Valorizamos a privacidade e discrição de todos os usuários.',
        'Informações pessoais são tratadas com total confidencialidade, conforme nossa Política de Privacidade.',
        'É proibido compartilhar informações de outros usuários sem autorização expressa.',
        'Comprometemo-nos a proteger seus dados pessoais e não compartilhá-los com terceiros sem seu consentimento.',
      ],
    },
    {
      title: '5. Pagamentos e Transações',
      icon: <GavelIcon />,
      content: [
        'Todas as transações devem ser realizadas através dos canais oficiais da plataforma.',
        'Valores e taxas são claramente informados antes da confirmação de qualquer transação.',
        'Reservamo-nos o direito de verificar e validar todas as transações.',
        'Reembolsos seguem nossa política específica, disponível na seção de ajuda.',
      ],
    },
    {
      title: '6. Responsabilidades',
      icon: <VerifiedUserIcon />,
      content: [
        'A plataforma atua como intermediária, não sendo responsável por acordos diretos entre usuários.',
        'Cada usuário é responsável por suas próprias ações e interações na plataforma.',
        'Não nos responsabilizamos por danos decorrentes do uso ou impossibilidade de uso da plataforma.',
        'Recomendamos que todos os encontros sejam realizados em locais seguros e públicos quando possível.',
      ],
    },
    {
      title: '7. Propriedade Intelectual',
      icon: <GavelIcon />,
      content: [
        'Todo o conteúdo da plataforma, incluindo design, textos e logotipos, é propriedade do Lençol de Seda.',
        'É proibido copiar, reproduzir ou utilizar qualquer conteúdo sem autorização prévia.',
        'Conteúdo publicado por usuários permanece de propriedade dos mesmos, mas concede licença de uso à plataforma.',
      ],
    },
    {
      title: '8. Moderação e Penalidades',
      icon: <SecurityIcon />,
      content: [
        'Reservamo-nos o direito de moderar todo conteúdo publicado na plataforma.',
        'Violações dos termos podem resultar em avisos, suspensão temporária ou banimento permanente.',
        'Decisões de moderação são finais e não estão sujeitas a recurso.',
        'Casos graves podem ser reportados às autoridades competentes.',
      ],
    },
    {
      title: '9. Alterações nos Termos',
      icon: <GavelIcon />,
      content: [
        'Podemos modificar estes termos a qualquer momento.',
        'Alterações significativas serão comunicadas aos usuários através dos canais oficiais.',
        'O uso continuado da plataforma após alterações constitui aceitação dos novos termos.',
      ],
    },
    {
      title: '10. Lei Aplicável',
      icon: <GavelIcon />,
      content: [
        'Estes termos são regidos pelas leis brasileiras.',
        'Qualquer disputa será resolvida nos tribunais competentes do Brasil.',
        'Em caso de conflito entre versões em diferentes idiomas, a versão em português prevalece.',
      ],
    },
  ]

  return (
    <Box sx={{ backgroundColor: '#FAFAFA', minHeight: '100vh' }}>
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
        {/* Breadcrumbs */}
        <Breadcrumbs items={[
          { label: 'Início', href: '/' },
          { label: 'Regras e Termos' },
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
                alt="Regras Background"
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
              Regras e Termos de Uso
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: '1rem', md: '1.2rem' },
                color: alpha('#FFFFFF', 0.95),
                fontWeight: 300,
              }}
            >
              Conheça nossas diretrizes e políticas
            </Typography>
          </Container>
        </Box>

        {/* Introduction */}
        <Paper
          elevation={0}
          sx={{
            p: 4,
            mb: 4,
            borderRadius: 3,
            background: `linear-gradient(135deg, ${alpha(palette.primary[50], 0.5)} 0%, ${alpha(palette.secondary[50], 0.3)} 100%)`,
            border: `1px solid ${alpha(palette.primary[500], 0.1)}`,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              color: palette.primary[900],
              mb: 2,
            }}
          >
            Bem-vindo ao Lençol de Seda
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: theme.palette.text.secondary,
              lineHeight: 1.8,
            }}
          >
            Estes Termos de Uso estabelecem as regras e diretrizes para o uso de nossa plataforma. 
            Ao utilizar nossos serviços, você concorda em cumprir estas regras. Nossa prioridade é 
            garantir um ambiente seguro, discreto e respeitoso para todos os usuários.
          </Typography>
        </Paper>

        {/* Rules Sections */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {sections.map((section, index) => (
            <Paper
              key={index}
              elevation={0}
              sx={{
                p: 4,
                borderRadius: 3,
                background: index % 2 === 0
                  ? `linear-gradient(135deg, ${alpha(palette.primary[50], 0.5)} 0%, ${alpha(palette.secondary[50], 0.3)} 100%)`
                  : `linear-gradient(135deg, ${alpha(palette.secondary[50], 0.5)} 0%, ${alpha(palette.primary[50], 0.3)} 100%)`,
                border: `1px solid ${alpha(palette.primary[500], 0.1)}`,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: `0 8px 32px ${alpha(palette.primary[500], 0.15)}`,
                },
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: '50%',
                    backgroundColor: palette.primary[500],
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFFFF',
                  }}
                >
                  {section.icon}
                </Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    color: palette.primary[900],
                  }}
                >
                  {section.title}
                </Typography>
              </Box>
              <Divider sx={{ mb: 3, borderColor: alpha(palette.primary[500], 0.2) }} />
              <List sx={{ pl: 0 }}>
                {section.content.map((item, itemIndex) => (
                  <ListItem key={itemIndex} sx={{ pl: 0, pb: 2 }}>
                    <Box
                      sx={{
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        backgroundColor: palette.primary[500],
                        mr: 2,
                        mt: 1,
                        flexShrink: 0,
                      }}
                    />
                    <ListItemText
                      primary={item}
                      primaryTypographyProps={{
                        variant: 'body1',
                        sx: {
                          color: theme.palette.text.secondary,
                          lineHeight: 1.8,
                        },
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>
          ))}
        </Box>

        {/* Footer Note */}
        <Paper
          elevation={0}
          sx={{
            p: 4,
            mt: 6,
            borderRadius: 3,
            background: `linear-gradient(135deg, ${alpha(palette.primary[500], 0.1)} 0%, ${alpha(palette.secondary[500], 0.08)} 100%)`,
            border: `2px solid ${alpha(palette.primary[500], 0.2)}`,
            textAlign: 'center',
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              color: palette.primary[900],
              mb: 2,
            }}
          >
            Dúvidas ou Questões?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: theme.palette.text.secondary,
              mb: 3,
            }}
          >
            Se você tiver dúvidas sobre estes termos ou precisar de esclarecimentos, 
            entre em contato conosco através da nossa página de contato.
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: theme.palette.text.secondary,
              fontStyle: 'italic',
            }}
          >
            Última atualização: Novembro de 2024
          </Typography>
        </Paper>
      </Container>
    </Box>
  )
}

