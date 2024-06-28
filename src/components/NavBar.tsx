import React, { useState } from "react";
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
const Navbar = () => {

  const [value, setValue] = React.useState(0);
  return(
    
    <nav>
      <Box sx={{ width: 500 }}>
      <BottomNavigation 
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels>
        <BottomNavigationAction LinkComponent={Link} to="/" label="All" icon={<ClearAllIcon />} />
        <BottomNavigationAction LinkComponent={Link} to="/?todos=active" label="Active" icon={<PendingActionsIcon />} />
        <BottomNavigationAction LinkComponent={Link} to="/?todos=done" label="Done" icon={<DoneAllIcon />} />

      </BottomNavigation>
      </Box>
      
    </nav>
  )
}

export default Navbar;

