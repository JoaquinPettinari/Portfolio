import { memo, type ReactNode } from 'react'
import { Button, type ButtonProps } from '@mui/material'

interface PrimaryButtonProps extends ButtonProps {
  children: ReactNode | string
}

function PrimaryButton ({ children, ...props }: PrimaryButtonProps) {
  return (
    <Button variant="outlined" {...props}>
      {children}
    </Button>
  )
}

export default memo(PrimaryButton)
