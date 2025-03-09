import React from "react";
import { FaFileExport, FaFileImport, FaPlus } from "react-icons/fa";
import Header from "../../components/Header";


// const ticketsData = [
//   { key: "#525464", subject: "Quo cupiditate quis dolores.", priority: "Less Urgent", status: "Pending", date: "3 hours ago", updated: "3 hours ago" },
//   { key: "#466763", subject: "Et consequatur voluptatem et dolor modi.", priority: "Less Urgent", status: "Waiting for confirmation", date: "3 hours ago", updated: "3 hours ago" },
//   { key: "#470049", subject: "Dolores est molestias beatae temporibus aspernatur delectus adipisci.", priority: "Generally", status: "Processing", date: "3 hours ago", updated: "3 hours ago" },
//   { key: "#606794", subject: "Fuga commodi aut rerum sed modi.", priority: "Very Urgent", status: "Pending", date: "3 hours ago", updated: "3 hours ago" },
//   { key: "#519760", subject: "Quibusdam quia velit voluptatem rerum.", priority: "Generally", status: "Completed", date: "3 hours ago", updated: "3 hours ago" },
// ];

const styles = {
  container: { padding: "20px" },
  header: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" },
  searchBox: { padding: "10px", width: "200px", border: "1px solid #ccc", borderRadius: "5px" },
  buttons: { display: "flex", gap: "10px" },
  button: { padding: "10px 15px", border: "none", borderRadius: "5px", cursor: "pointer" },
  export: { backgroundColor: "#3498db", color: "white" },
  import: { backgroundColor: "#2ecc71", color: "white" },
  newTicket: { backgroundColor: "#e74c3c", color: "white" },
  filters: { display: "flex", gap: "10px", marginBottom: "20px" },
  select: { padding: "10px", border: "1px solid #ccc", borderRadius: "5px" },
  tableContainer: { overflowX: "auto" },
  table: { width: "100%", borderCollapse: "collapse" },
  th: { backgroundColor: "#f4f4f4", padding: "10px", textAlign: "left", borderBottom: "2px solid #ddd",color: "black" },
  td: { padding: "10px", borderBottom: "1px solid #ddd" },
};

const TicketTable = () => {
  return (
    <div style={styles.container}>
      <Header title="Ticket Management" subtitle="Manage and track your tickets" />
      <div style={styles.header}>
        <input type="text" placeholder="Search..." style={styles.searchBox} />
        <div style={styles.buttons}>
          <button style={{ ...styles.button, ...styles.export }}><FaFileExport /> EXPORT</button>
          <button style={{ ...styles.button, ...styles.import }}><FaFileImport /> IMPORT</button>
          <button style={{ ...styles.button, ...styles.newTicket }}><FaPlus /> New Ticket</button>
        </div>
      </div>
      <div style={styles.filters}>
        <select style={styles.select}><option>Type</option></select>
        <select style={styles.select}><option>Category</option></select>
        <select style={styles.select}><option>Department</option></select>
        <select style={styles.select}><option>Priority</option></select>
        <select style={styles.select}><option>Status</option></select>
        <select style={styles.select}><option>Assign To</option></select>
      </div>
      {/* <div style={styles.tableContainer}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Key</th>
              <th style={styles.th}>Subject</th>
              <th style={styles.th}>Priority</th>
              <th style={styles.th}>Status</th>
              <th style={styles.th}>Date</th>
              <th style={styles.th}>Updated</th>
            </tr>
          </thead>
          <tbody>
            {ticketsData.map((ticket, index) => (
              <tr key={index}>
                <td style={styles.td}>{ticket.key}</td>
                <td style={styles.td}>{ticket.subject}</td>
                <td style={styles.td}>{ticket.priority}</td>
                <td style={styles.td}>{ticket.status}</td>
                <td style={styles.td}>{ticket.date}</td>
                <td style={styles.td}>{ticket.updated}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}
    </div>
  );
};

export default TicketTable;
