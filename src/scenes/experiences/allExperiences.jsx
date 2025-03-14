import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Select,
  useTheme,
  // IconButton
} from "@mui/material";
import { Add } from "@mui/icons-material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
// import InputBase from "@mui/material/InputBase";
// import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
// import { Box,  } from "@mui/material";

// Sample Ticket Data
const sampleTickets = [
  { key: "#525464", subject: "Quo cupiditate quis dolores.", priority: "Less Urgent", status: "Pending", date: "3 hours ago", updated: "3 hours ago", assign: "Assign" },
  { key: "#466763", subject: "Et consequatur voluptatem et dolor modi.", priority: "Less Urgent", status: "Waiting for confirmation", date: "3 hours ago", updated: "3 hours ago", assign: "Assign" },
  { key: "#470049", subject: "Dolores est molestias beatae temporibus aspernatur delectus adipisci.", priority: "Generally", status: "Processing", date: "3 hours ago", updated: "3 hours ago", assign: "Assign" },
  { key: "#606794", subject: "Fuga commodi aut rerum sed modi.", priority: "Very Urgent", status: "Resolved", date: "3 hours ago", updated: "3 hours ago", assign: "Assign" },
  { key: "#525464", subject: "Quo cupiditate quis dolores.", priority: "Less Urgent", status: "Pending", date: "3 hours ago", updated: "3 hours ago", assign: "Assign" },
  { key: "#466763", subject: "Et consequatur voluptatem et dolor modi.", priority: "Less Urgent", status: "Waiting for confirmation", date: "3 hours ago", updated: "3 hours ago", assign: "Assign" },
  { key: "#470049", subject: "Dolores est molestias beatae temporibus aspernatur delectus adipisci.", priority: "Generally", status: "Processing", date: "3 hours ago", updated: "3 hours ago", assign: "Assign" },
  { key: "#606794", subject: "Fuga commodi aut rerum sed modi.", priority: "Very Urgent", status: "Resolved", date: "3 hours ago", updated: "3 hours ago", assign: "Assign" }
];

// Function to get status color
const getStatusColor = (status) => {
  switch (status) {
    case "Pending":
      return "red";
    case "Processing":
      return "orange";
    case "Resolved":
      return "green";
    default:
      return "gray";
  }
};

const AllExperiences = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [search, setSearch] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [filteredTickets, setFilteredTickets] = useState(sampleTickets);

  // Handle Search
  const handleSearch = (e) => {
    setSearch(e.target.value);
    filterTickets(e.target.value, priorityFilter, statusFilter);
  };

  // Handle Filters
  const handlePriorityFilter = (e) => {
    setPriorityFilter(e.target.value);
    filterTickets(search, e.target.value, statusFilter);
  };

  const handleStatusFilter = (e) => {
    setStatusFilter(e.target.value);
    filterTickets(search, priorityFilter, e.target.value);
  };

  // Filter Function
  const filterTickets = (searchText, priority, status,) => {
    let updatedTickets = sampleTickets;

    if (searchText) {
      updatedTickets = updatedTickets.filter((ticket) =>
        ticket.subject.toLowerCase().includes(searchText.toLowerCase())
      );
    }
    if (priority) {
      updatedTickets = updatedTickets.filter(
        (ticket) => ticket.priority === priority
      );
    }
    if (status) {
      updatedTickets = updatedTickets.filter(
        (ticket) => ticket.status === status
      );
    }

    setFilteredTickets(updatedTickets);
  };

  return (
    <Box p={3}>
      {/* Header */}
      <Header
        title="Total Experiences"
      // subtitle="List of Customer Relationship Managers"
      />
      <Box display="flex" justifyContent="space-between" alignItems="center" flexWrap="wrap">
        <TextField
          label="Search..."
          variant="outlined"
          size="medium"
          value={search}
          onChange={handleSearch}
          sx={{ fontSize: "1rem" }}
        />
        {/* <Button
          variant="contained"
          
          startIcon={<Add />}
          sx={{
            backgroundColor: colors.blueAccent[700],
            // color: colors.grey[100],
            color: '#fff',
            fontSize: "1rem",
            fontWeight: "bold",
            padding: "7px 15px",
            marginTop: "10px",
          }}

          onClick={() => navigate("/crmform")}
        >
            Allot To Experience
        </Button> */}
      </Box>

      {/* <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
        // width="100px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
     
      </Box> */}

      {/* Filters */}
      <Box my={2} display="flex" gap={2} flexWrap="wrap">
        <Select
          value={priorityFilter}
          onChange={handlePriorityFilter}
          displayEmpty
          variant="outlined"
          size="medium"
          sx={{ fontSize: "1rem" }}
        >
          <MenuItem value="">Priority</MenuItem>
          <MenuItem value="Less Urgent">Less Urgent</MenuItem>
          <MenuItem value="Generally">Generally</MenuItem>
          <MenuItem value="Very Urgent">Very Urgent</MenuItem>
          <MenuItem value="Urgent">Urgent</MenuItem>
        </Select>

        <Select
          value={statusFilter}
          onChange={handleStatusFilter}
          displayEmpty
          variant="outlined"
          size="medium"
          sx={{ fontSize: "1rem" }}
        >
          <MenuItem value="">Status</MenuItem>
          <MenuItem value="Pending">Pending</MenuItem>
          <MenuItem value="Waiting for confirmation">Waiting for confirmation</MenuItem>
          <MenuItem value="Processing">Processing</MenuItem>
          <MenuItem value="Resolved">Resolved</MenuItem>
        </Select>
      </Box>

      {/* Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontSize: "1rem", fontWeight: "bold" }}>Key</TableCell>
              <TableCell sx={{ fontSize: "1rem", fontWeight: "bold" }}>Subject</TableCell>
              <TableCell sx={{ fontSize: "1rem", fontWeight: "bold" }}>Priority</TableCell>
              <TableCell sx={{ fontSize: "1rem", fontWeight: "bold" }}>Status</TableCell>
              <TableCell sx={{ fontSize: "1rem", fontWeight: "bold" }}>Date</TableCell>
              <TableCell sx={{ fontSize: "1rem", fontWeight: "bold" }}>Updated</TableCell>
              <TableCell sx={{ fontSize: "1rem", fontWeight: "bold" }}>Assign</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredTickets.map((ticket, index) => (
              <TableRow key={index}>
                <TableCell sx={{ fontSize: "1rem" }}>{ticket.key}</TableCell>
                <TableCell sx={{ fontSize: "1rem" }}>{ticket.subject}</TableCell>
                <TableCell sx={{ fontSize: "1rem" }}>{ticket.priority}</TableCell>
                <TableCell sx={{ fontSize: "1rem", color: getStatusColor(ticket.status) }}>{ticket.status}</TableCell>
                <TableCell sx={{ fontSize: "1rem" }}>{ticket.date}</TableCell>
                <TableCell sx={{ fontSize: "1rem", textTransform:"none" }}>{ticket.updated}</TableCell>
                <TableCell sx={{ fontSize: "1rem" }}><Button
                  variant="contained"
                  startIcon={<Add />}
                  sx={{
                    backgroundColor: colors.blueAccent[700], // Ensure this is valid
                    color: '#fff',
                    fontSize: "1rem",
                    fontWeight: "bold",
                    padding: "7px 15px",
                    marginTop: "10px",
                    textTransform:"none"
                  }}
                  onClick={() => navigate("/crmform")}
                >
            {ticket.assign.charAt(0).toUpperCase() + ticket.assign.slice(1).toLowerCase()}
                </Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AllExperiences;
