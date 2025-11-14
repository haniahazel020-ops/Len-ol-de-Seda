'use client'

import { useState } from 'react'
import { Box, IconButton, Grid, Typography, useTheme } from '@mui/material'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'

interface MediaGalleryProps {
  photos: string[]
  videos?: string[]
}

export function MediaGallery({ photos, videos = [] }: MediaGalleryProps) {
  const theme = useTheme()
  const [currentIndex, setCurrentIndex] = useState(0)
  const allMedia = [...photos, ...videos]

  const nextMedia = () => {
    setCurrentIndex((prev) => (prev + 1) % allMedia.length)
  }

  const prevMedia = () => {
    setCurrentIndex((prev) => (prev - 1 + allMedia.length) % allMedia.length)
  }

  const isVideo = (index: number) => index >= photos.length

  return (
    <Box>
      {/* Main Media */}
      <Box
        sx={{
          position: 'relative',
          borderRadius: 2,
          overflow: 'hidden',
          height: { xs: 300, md: 500 },
          mb: 2,
        }}
      >
        {isVideo(currentIndex) ? (
          <Box
            component="video"
            src={allMedia[currentIndex]}
            controls
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        ) : (
          <Box
            component="img"
            src={allMedia[currentIndex]}
            alt={`Mídia ${currentIndex + 1}`}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        )}
        {allMedia.length > 1 && (
          <>
            <IconButton
              onClick={prevMedia}
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
              onClick={nextMedia}
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
            {isVideo(currentIndex) && (
              <Box
                sx={{
                  position: 'absolute',
                  top: 16,
                  left: 16,
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  color: '#FFFFFF',
                  px: 1.5,
                  py: 0.5,
                  borderRadius: 1,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.5,
                }}
              >
                <PlayArrowIcon sx={{ fontSize: 16 }} />
                <Typography variant="caption" sx={{ fontWeight: 600 }}>
                  Vídeo
                </Typography>
              </Box>
            )}
          </>
        )}
      </Box>

      {/* Thumbnails */}
      {allMedia.length > 1 && (
        <Grid container spacing={1}>
          {allMedia.slice(0, 5).map((media, index) => (
            <Grid item xs={2.4} key={index}>
              <Box
                onClick={() => setCurrentIndex(index)}
                sx={{
                  position: 'relative',
                  borderRadius: 1,
                  overflow: 'hidden',
                  height: 80,
                  cursor: 'pointer',
                  border: index === currentIndex ? `2px solid ${theme.palette.primary.main}` : '2px solid transparent',
                  opacity: index === currentIndex ? 1 : 0.7,
                  '&:hover': {
                    opacity: 1,
                  },
                }}
              >
                {isVideo(index) ? (
                  <>
                    <Box
                      component="video"
                      src={media}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        color: '#FFFFFF',
                      }}
                    >
                      <PlayArrowIcon />
                    </Box>
                  </>
                ) : (
                  <Box
                    component="img"
                    src={media}
                    alt={`Thumbnail ${index + 1}`}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                )}
              </Box>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  )
}

