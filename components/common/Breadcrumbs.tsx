'use client'

import { Breadcrumbs as MuiBreadcrumbs, Link, Typography, Box, useTheme } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const theme = useTheme()

  return (
    <MuiBreadcrumbs
      separator={<NavigateNextIcon fontSize="small" sx={{ color: theme.palette.text.secondary }} />}
      sx={{
        mb: 3,
        '& .MuiBreadcrumbs-ol': {
          flexWrap: 'nowrap',
        },
      }}
    >
      <Link
        href="/"
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 0.5,
          color: theme.palette.text.secondary,
          textDecoration: 'none',
          transition: 'all 0.3s ease',
          '&:hover': {
            color: theme.palette.primary.main,
            transform: 'translateX(2px)',
          },
        }}
      >
        <HomeIcon sx={{ fontSize: 18 }} />
        <Typography variant="body2">Início</Typography>
      </Link>
      {items.map((item, index) => {
        const isLast = index === items.length - 1
        return isLast ? (
          <Typography
            key={item.label}
            variant="body2"
            sx={{
              color: theme.palette.text.primary,
              fontWeight: 600,
            }}
          >
            {item.label}
          </Typography>
        ) : (
          <Link
            key={item.label}
            href={item.href || '#'}
            sx={{
              color: theme.palette.text.secondary,
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              '&:hover': {
                color: theme.palette.primary.main,
              },
            }}
          >
            {item.label}
          </Link>
        )
      })}
    </MuiBreadcrumbs>
  )
}

