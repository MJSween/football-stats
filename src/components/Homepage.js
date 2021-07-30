import * as React from "react";
import {
  Container,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { mockPlayerStats } from "../mockData/mockStats";
import { data_2 } from "./data/2021Data";

export const Homepage = () => {
  return (
    <Container maxWidth="lg">
      <Grid xs={12}>
        <div className="homepage-header">Football Stats!!!</div>
        <TableContainer>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Rank</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Team</TableCell>
                <TableCell>Position</TableCell>
                <TableCell>Played</TableCell>
                <TableCell>Passing Yards</TableCell>
                <TableCell>Passing Touchdowns</TableCell>
                <TableCell>Passing Interceptions</TableCell>
                <TableCell>Rushing Yards</TableCell>
                <TableCell>Rushing Touchdowns</TableCell>
                <TableCell>Receptions</TableCell>
                <TableCell>Receiving Yards</TableCell>
                <TableCell>Receiving Touchdowns</TableCell>
                <TableCell>Sacks</TableCell>
                <TableCell>Interceptions</TableCell>
                <TableCell>Fumbles Forced</TableCell>
                <TableCell>Fumbles Recovered</TableCell>
                <TableCell>Fantasy PPG</TableCell>
                <TableCell>Total Fantasy Points</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data_2.map((row, idx) => (
                <TableRow key={`${idx + 1}`}>
                  <TableCell>{row.rank}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.team}</TableCell>
                  <TableCell>{row.position}</TableCell>
                  <TableCell>{row.games_played}</TableCell>
                  <TableCell>{row.passing_yards}</TableCell>
                  <TableCell>{row.passing_touchdowns}</TableCell>
                  <TableCell>{row.passing_interceptions}</TableCell>
                  <TableCell>{row.rushing_yards}</TableCell>
                  <TableCell>{row.rushing_touchdowns}</TableCell>
                  <TableCell>{row.receptions}</TableCell>
                  <TableCell>{row.receiving_yards}</TableCell>
                  <TableCell>{row.receiving_touchdowns}</TableCell>
                  <TableCell>{row.sacks}</TableCell>
                  <TableCell>{row.interceptions}</TableCell>
                  <TableCell>{row.fumbles_forced}</TableCell>
                  <TableCell>{row.fumbles_recovered}</TableCell>
                  <TableCell>{row.fantasy_points_per_game}</TableCell>
                  <TableCell>{row.total_fantasy_points}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Container>
  );
};
