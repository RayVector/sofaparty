import React from "react";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Avatar from "@mui/material/Avatar";
import {List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';

interface IFriendsDrawerProps {
  isDrawerShown: boolean
  setDrawerShown: (status: boolean) => void
}

// for dev
const friendsList = [
  {
    id: 1,
    name: 'Mike',
    avatar: '/mike'
  },
  {
    id: 2,
    name: 'Sam',
    avatar: '/sam'
  }
]

export const TheFriendsDrawer = ({isDrawerShown, setDrawerShown}: IFriendsDrawerProps) => {
  const [expanded, setExpanded] = React.useState<number | false>(false);

  const handleChange =
    (panel: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const toggleDrawer = (status: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
      setDrawerShown(status);
    };

  const friendActionHandler = (action: string) => {
    console.log('friendActionHandler:', action)
  }


  return (
    <>
      <Drawer
        anchor={'right'}
        open={isDrawerShown}
        onClose={toggleDrawer(false)}
      >
        <Box
          sx={{width: 250}}
          role="presentation"
          onKeyDown={toggleDrawer(false)}
        >
          <div>
            {friendsList.map(friend =>
              <Accordion expanded={expanded === friend.id} onChange={handleChange(friend.id)}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon/>}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography sx={{width: '33%', flexShrink: 0}}>
                    <Avatar/>
                  </Typography>
                  <Typography>
                    {friend.name}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ padding: '0px' }}>
                  <List dense={true}>
                    <ListItem dense={true} sx={{ padding: '0px' }}>
                      <ListItemButton onClick={() => friendActionHandler('invite')}>
                        <ListItemIcon>
                          <SendIcon/>
                        </ListItemIcon>
                        <ListItemText>
                          Invite
                        </ListItemText>
                      </ListItemButton>
                    </ListItem>
                    <ListItem dense={true} sx={{ padding: '0px' }}>
                      <ListItemButton onClick={() => friendActionHandler('message')}>
                        <ListItemIcon>
                          <EmailIcon/>
                        </ListItemIcon>
                        <ListItemText>
                          Message
                        </ListItemText>
                      </ListItemButton>
                    </ListItem>
                    <ListItem dense={true} sx={{ padding: '0px' }}>
                      <ListItemButton onClick={() => friendActionHandler('remove')}>
                        <ListItemIcon>
                          <DeleteIcon/>
                        </ListItemIcon>
                        <ListItemText>
                          Remove
                        </ListItemText>
                      </ListItemButton>
                    </ListItem>
                  </List>
                </AccordionDetails>
              </Accordion>)
            }
          </div>
        </Box>
      </Drawer>
    </>
  )
}
