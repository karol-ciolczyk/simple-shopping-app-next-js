import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FolderIcon from "@material-ui/icons/Folder";
import DeleteIcon from "@material-ui/icons/Delete";
import { Card } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    minWidth: "300px",
    margin: "50px 50px",
    padding: "50px",
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    padding: "10px",
    margin: theme.spacing(0, 0, 2),
  },
}));

function generate(products) {
  return products?.map((product, index) => {
    return (
      <ListItem key={product.id}>
        <ListItemAvatar>
          <Avatar>
            <FolderIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={product.name}
          // secondary={secondary ? "Secondary text" : null}
        />
        <ListItemText
          primary={`$ ${product.price}`}
          // secondary={secondary ? "Secondary text" : null}
        />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    );
  });
}

export function BasketTable(props) {
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);
  console.log(props);
  // const [secondary, setSecondary] = React.useState(false);

  return (
    <Card elevation={3} className={classes.container}>
      <div className={classes.root}>
        <Grid item xs={12}>
          <Typography variant="h6" className={classes.title} align="center">
            Shopping basket
          </Typography>
          <div className={classes.demo}>
            <List dense={dense}>{generate(props.products)}</List>
          </div>
        </Grid>
      </div>
    </Card>
  );
}
