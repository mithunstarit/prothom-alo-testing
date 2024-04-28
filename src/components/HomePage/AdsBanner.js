import { Box } from '@mui/material'
import Image from 'next/image'

export default function AdsBanner() {
  return (
    <Box sx={{py: 2, borderBottom: 2, borderColor: 'grey.400' }}>
        <Box sx={{display:'flex', alignItems: 'center', justifyContent: 'center', bgcolor: "grey.200"}}>
            <Image src="/images/banner.png" width={970} height={90} alt="Prothom Alo Logo" style={{maxWidth: '100%', height: "auto"}}/>
        </Box>
    </Box>
  )
}
