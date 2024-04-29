import Button from "@mui/material/Button";
// import SaveIcon from "@mui/icons-material/Save";
import ButtonGroup from "@mui/material/ButtonGroup";
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";

export default function MaterialUI() {
  return (
    <div style={{ margin: "auto", padding: "10px" }}>
      <ButtonGroup>
        <Button
          size="large"
          startIcon={<SaveIcon />}
          disabled={false}
          // style={{
          //   fontSize: 24,
          // }}
          onClick={() => alert("Hello !")}
          variant="contained"
          color="primary"
        >
          Save
        </Button>
        <Button
          size="large"
          endIcon={<DeleteIcon />}
          disabled={false}
          // style={{
          //   fontSize: 24,
          // }}
          onClick={() => alert("Hello !")}
          variant="contained"
          color="warning"
        >
          Discard
        </Button>
      </ButtonGroup>
    </div>
  );
}
