import { 
  Box, Button, TextField, Select, MenuItem, InputLabel, FormControl, 
  Typography, useTheme , useMediaQuery
} from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
// import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { tokens } from "../../theme";

const CrmForm = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  // const [status] = useState("Open");
  const isMobile = useMediaQuery("(max-width:600px)");


  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m="20px">
      <Header title="Allot Experience" subtitle="Allot Experience To Business of The Unit" />

      <Formik
        initialValues={initialValues}
        validationSchema={checkoutSchema}
        onSubmit={handleFormSubmit}
      >
        {({ values, errors, touched, handleBlur, handleChange, handleSubmit, setFieldValue }) => (
          <form onSubmit={handleSubmit}>

            {/** Dropdowns Grid */}
            <Box 
              display="grid" 
              gap="30px" 
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{ "& > div": { gridColumn: isNonMobile ? undefined : "span 4" } }}
            >
              <DropdownField label="Customers" name="status" value={values.status} handleChange={handleChange} options={[
                "Pending", "Waiting for confirmation", "Processing", "Resolved"
              ]} />

              <DropdownField label="Priority" name="priority" value={values.priority} handleChange={handleChange} options={[
                "Low", "Medium", "High", "Urgent"
              ]} />

              <DropdownField label="Ticket Type" name="ticketType" value={values.ticketType} handleChange={handleChange} options={[
                "Issue", "Request", "Query"
              ]} />

              <DropdownField label="Department" name="department" value={values.department} handleChange={handleChange} options={[
                "Support", "Sales", "Technical", "HR"
              ]} />

              <DropdownField label="Assign To" name="assignTo" value={values.assignTo} handleChange={handleChange} options={[
                "User1", "User2", "User3"
              ]} />
            </Box>

            {/** Text Fields */}
            <Box mt="25px">
              <StyledTextField
                label="Subject"
                name="subject"
                value={values.subject}
                handleChange={handleChange}
                handleBlur={handleBlur}
                error={touched.subject && errors.subject}
              />
              <Box mt="24px">
                <StyledTextField
                  label="Details of your experience"
                  name="experienceDetails"
                  value={values.experienceDetails}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  error={touched.experienceDetails && errors.experienceDetails}
                  multiline
                  rows={4}
                />
              </Box>
            </Box>

            {/** File Upload Section */}
            <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "#f0f0f0",
                  padding: "10px",
                  mt:"24px",
                  borderRadius: "5px",
                  width: isMobile ? "100%" : "50%",
                  position: "relative",
                }}
              >
                <input
                  type="file"
                  name="attachments"
                  multiple
                  id="fileUpload"
                  style={{ display: "none" }}
                  onChange={(event) => setFieldValue("attachments", event.currentTarget.files)}
                />
                <label
                  htmlFor="fileUpload"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#192032",
                    color: "white",
                    padding: "10px 15px",
                    borderRadius: "5px",
                    cursor: "pointer",
                    fontWeight: "bold",
                    width: isMobile ? "100%" : "auto",
                    boxShadow: "3px 3px 6px rgba(0, 0, 0, 0.2)",
                    transition: "0.3s",
                    "&:hover": { backgroundColor: "#5a0ca1" },
                  }}
                >
                  📤 Choose a file...
                </label>
                <Typography
                  sx={{
                    marginLeft: "10px",
                    fontSize: "1rem",
                    color: "#555",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {values.attachments.length > 0 ? values.attachments[0].name : "No file chosen"}
                </Typography>
              </Box>



            {/** Submit Button */}
            <Box display="flex" justifyContent="flex-end" mt="24px">
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    padding: "10px",
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    borderRadius: "8px",
                    boxShadow: "3px 3px 6px rgba(0, 0, 0, 0.2)",
                    transition: "0.3s",
                    backgroundColor: colors.blueAccent[700],
                    "&:hover": { backgroundColor: colors.blueAccent[600], boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)" },
                  }}
                >
                  Allot Experience
                </Button>
              </Box>

          </form>
        )}
      </Formik>
    </Box>
  );
};

// 🔹 Dropdown Component with Modern Styling
const DropdownField = ({ label, name, value, handleChange, options }) => {
  const theme = useTheme();
  
  return (
    <FormControl fullWidth sx={dropdownStyle(theme)}>
      <InputLabel>{label}</InputLabel>
      <Select name={name} value={value} onChange={handleChange}>
        {options.map((option) => (
          <MenuItem key={option} value={option}>{option}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

// 🔹 Styled TextField Component
const StyledTextField = ({ label, name, value, handleChange, handleBlur, error, multiline = false, rows = 1 }) => {
  const theme = useTheme();
  return (
    <TextField
      fullWidth
      variant="outlined"
      label={label}
      name={name}
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
      error={!!error}
      helperText={error}
      multiline={multiline}
      rows={rows}
      sx={textFieldStyle(theme)}
    />
  );
};

// ✅ **Validation Schema**
const checkoutSchema = yup.object().shape({
  status: yup.string().required("Status is required"),
  priority: yup.string().required("Priority is required"),
  ticketType: yup.string().required("Ticket Type is required"),
  department: yup.string().required("Department is required"),
  assignTo: yup.string().required("Assignee is required"),
  subject: yup.string().required("Subject is required"),
  experienceDetails: yup.string().required("Experience Details are required"),
  attachments: yup.mixed().required("File attachment is required"),
});

// ✅ **Initial Values**
const initialValues = {
  status: "",
  priority: "",
  ticketType: "",
  department: "",
  assignTo: "",
  subject: "",
  experienceDetails: "",
  attachments: [], // ✅ Set this as an empty array
};

// ✅ **Styles**
const dropdownStyle = (theme) => ({
  "& .MuiInputLabel-root": { color: theme.palette.mode === "dark" ? "#ffffff" : "#333" },
  "& .MuiOutlinedInput-root": {
    borderRadius: "8px",
    backgroundColor: theme.palette.mode === "dark" ? "#1f2a40" : "#ffffff",
    boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)",
    "& fieldset": { borderColor: theme.palette.mode === "dark" ? "#555" : "#ccc" },
    "&:hover fieldset": { borderColor: theme.palette.mode === "dark" ? "#888" : "#666" },
    "&.Mui-focused fieldset": { borderColor: theme.palette.mode === "dark" ? "#00bcd4" : "#1976d2" },
  },
});

const textFieldStyle = (theme) => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: "8px",
    backgroundColor: theme.palette.mode === "dark" ? "#1f2a40" : "#ffffff",
  },
});

// const uploadButtonStyle = (colors) => ({
//   backgroundColor: colors.blueAccent[600], color: "#FFF",
// });

// const submitButtonStyle = (colors) => ({
//   backgroundColor: colors.blueAccent[700], "&:hover": { backgroundColor: colors.blueAccent[600] },
// });

export default CrmForm;
