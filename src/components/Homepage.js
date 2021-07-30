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

export const Homepage = () => {
  return (
    <Container maxWidth="lg">
      <Grid xs={12}>
        <div className="homepage-header">Football Stats!!!</div>
        <TableContainer>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Position</TableCell>
                <TableCell>Team</TableCell>
                <TableCell>Catches</TableCell>
                <TableCell>Total Yards</TableCell>
                <TableCell>TPC</TableCell>
                <TableCell>Touchdowns</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {mockPlayerStats.map((row, idx) => (
                <TableRow key={`${idx + 1}`}>
                  <TableCell>{`${idx + 1}`}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.position}</TableCell>
                  <TableCell>{row.team}</TableCell>
                  <TableCell>{row.stats.catches}</TableCell>
                  <TableCell>{row.stats.total_yards}</TableCell>
                  <TableCell>{row.stats.ypc}</TableCell>
                  <TableCell>{row.stats.touchdowns}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Container>
  );
};
