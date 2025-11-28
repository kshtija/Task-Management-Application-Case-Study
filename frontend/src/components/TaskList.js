// import React from'react';
// import{List,ListItem,ListItemText,IconButton}from'@mui/material';
// import DeleteIcon from'@mui/icons-material/Delete'; import EditIcon from'@mui/icons-material/Edit';
// export default({tasks,onEdit,onDelete,currentUser})=><List>{
// tasks.map(t=><ListItem key={t._id} divider secondaryAction={<>
// <IconButton onClick={()=>onEdit(t)}><EditIcon/></IconButton>
// {currentUser?.role==='admin'&&<IconButton onClick={()=>onDelete(t)}><DeleteIcon/></IconButton>}
// </>}>
// <ListItemText primary={t.title} secondary={t.description}/></ListItem>)}
// </List>;


import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  Typography,
  Chip,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export default function TaskList({ tasks, onEdit, onDelete, currentUser }) {
  return (
    <List>
      {tasks.map((t) => (
        <ListItem
          key={t._id}
          divider
          secondaryAction={
            <>
              <IconButton edge="end" onClick={() => onEdit(t)}>
                <EditIcon />
              </IconButton>
              {currentUser?.role === "admin" && (
                <IconButton edge="end" onClick={() => onDelete(t)}>
                  <DeleteIcon />
                </IconButton>
              )}
            </>
          }
        >
          <ListItemText
            primary={
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {t.title}
              </Typography>
            }
            secondary={
              <>
                <Typography>{t.description}</Typography>

                {/* Status Chip */}
                <Chip
                  label={t.status}
                  color={t.status === "completed" ? "success" : "warning"}
                  size="small"
                  sx={{ mt: 0.5 }}
                />

                <Typography variant="caption" color="text.secondary" display="block">
                  Created:{" "}
                  {new Date(t.createdAt).toLocaleString(undefined, {
                    dateStyle: "medium",
                    timeStyle: "short",
                  })}
                </Typography>
              </>
            }
          />
        </ListItem>
      ))}
    </List>
  );
}