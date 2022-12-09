import { useRef } from "react";
import { IconButton } from "@mui/material";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";

const FileInput = ({ onChange }) => {
  const fileInput = useRef(null);

  return (
    <div>
      <IconButton onClick={() => fileInput.current.click()}>
        <AddAPhotoIcon />
      </IconButton>
      <input ref={fileInput} onChange={onChange} type="file" accept="image/*" hidden />
    </div>
  );
};

export default FileInput;
