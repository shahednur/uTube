import React, { useEffect, useState } from 'react'
import { Box, Stack, Typography } from '@mui/material';
import { Videos, Sidebar } from './';

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        
        <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff", }}>
          Copyright © 2022 JSM Media
        </Typography>
      </Box>
    </Stack>
  )
}

export default Feed