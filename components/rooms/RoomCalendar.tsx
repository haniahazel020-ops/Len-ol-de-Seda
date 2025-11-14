'use client'

import { Box, Typography, useTheme } from '@mui/material'
import { useState } from 'react'

export function RoomCalendar() {
  const theme = useTheme()
  const [checkIn, setCheckIn] = useState<Date | null>(null)
  const [checkOut, setCheckOut] = useState<Date | null>(null)

  return (
    <Box>
      <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 600 }}>
        Selecione as datas
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Box
          component="input"
          type="date"
          value={checkIn ? checkIn.toISOString().split('T')[0] : ''}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCheckIn(e.target.value ? new Date(e.target.value) : null)}
          min={new Date().toISOString().split('T')[0]}
          style={{
            padding: '10px',
            borderRadius: '8px',
            border: `1px solid ${theme.palette.grey[300]}`,
            fontSize: '14px',
            width: '100%',
          }}
        />
        <Box
          component="input"
          type="date"
          value={checkOut ? checkOut.toISOString().split('T')[0] : ''}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCheckOut(e.target.value ? new Date(e.target.value) : null)}
          min={checkIn ? checkIn.toISOString().split('T')[0] : new Date().toISOString().split('T')[0]}
          style={{
            padding: '10px',
            borderRadius: '8px',
            border: `1px solid ${theme.palette.grey[300]}`,
            fontSize: '14px',
            width: '100%',
          }}
        />
      </Box>
      {checkIn && checkOut && (
        <Box sx={{ mt: 2, p: 2, backgroundColor: theme.palette.grey[50], borderRadius: 1 }}>
          <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
            Total estimado: R$ {Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24)) * 450}
          </Typography>
        </Box>
      )}
    </Box>
  )
}

