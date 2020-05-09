import React, { Component } from "react";
import { Cell, Grid } from "react-mdl";
import {
  Card,
  CardActions,
  CardText,
  CardMenu,
  Button,
  IconButton,
  CardTitle,
} from "react-mdl";
import Picture from "./b&w_artsy.jpg";
import "./components.css";

class Games extends Component {
  render() {
    return (
      <div className="sectionPage" id="games">
        <h1 className="regText">My Games</h1>
        <div className="mygamesdisplays" style={{ position: "relative" }}>
          <Grid className="games-grid">
            <Cell col={2}></Cell>
            <Card shadow={1} style={{ width: "512px", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "#fff",
                  height: "176px",
                  background: (
                    <img>
                      <source src={Picture} />
                    </img>
                  ),
                }}
              >
                Welcome
              </CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                sagittis pellentesque lacus eleifend lacinia...
              </CardText>
              <CardActions border>
                <h1 colored>Pill Up</h1>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
            <Card shadow={0} style={{ width: "512px", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "#fff",
                  height: "176px",
                }}
              >
                {/* <video muted loop>
                  <source src={Video} />
                </video> */}
                Welcome
              </CardTitle>
              <CardActions border>
                <Button colored>Planet-Panic</Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Games;
