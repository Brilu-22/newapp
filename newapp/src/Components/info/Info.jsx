import React from "react";
import "./info.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import LAC from "../../Components/logo/LAC.png";
import MH from "../../Components/logo/MH.png";
import GSW from "../../Components/logo/GSW.png";
import CL from "../../Components/logo/CL.png";
import LAKE from "../../Components/logo/LAKE.png";
import HomeVideo from "../../Homevideo/homevideo2.mp4";

const rows = [
  {
    id: 1234,
    team: "Lakers",
    img: LAKE,
    league: "Sacramento",
    standing: 9,
    status: "upcoming",
  },
  {
    id: 5678,
    team: "La Clippers",
    img: LAC,
    league: "Sacramento",
    standing: 3,
    status: "upcoming",
  },
  {
    id: 9012,
    team: "Miami Heat",
    img: MH,
    league: "Sacramento",
    standing: 8,
    status: "game",
  },
  {
    id: 3456,
    team: "Golden Warriors",
    img: GSW,
    league: "Sacramento",
    standing: 2,
    status: "upcoming",
  },
  {
    id: 7890,
    team: "Celtics",
    img: CL,
    league: "Sacramento",
    standing: 11,
    status: "game",
  },
];

const Info = () => {
  return (
    <div className="info-container">
      <TableContainer component={Paper} className="InfoContainer">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="tableCell">Logo</TableCell>
              <TableCell className="tableCell">Team ID</TableCell>
              <TableCell className="tableCell">Team</TableCell>
              <TableCell className="tableCell">League</TableCell>
              <TableCell className="tableCell">Standing</TableCell>
              <TableCell className="tableCell">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>
                  <img src={row.img} alt={row.team} className="teamLogo" />
                </TableCell>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.team}</TableCell>
                <TableCell>{row.league}</TableCell>
                <TableCell>{row.standing}</TableCell>
                <TableCell>
                  <span className={`status ${row.status}`}>{row.status}</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="next">
          <video src={HomeVideo} autoPlay loop />
        </div>
      </TableContainer>
    </div>
  );
};

export default Info;
