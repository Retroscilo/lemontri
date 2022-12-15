"use client";
import { useRef } from "react";
import IconButton from "@mui/material/IconButton";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import CircularProgress from "@mui/material/CircularProgress";
import { useState } from "react";
const FileInput = ({ onChange, className }) => {
  const fileInput = useRef(null);
  const [loading, setLoading] = useState(false);
  async function handleChange(e) {
    setLoading(true);
    if (onChange) await onChange(e);
    setLoading(false);
  }

  return (
    <div className={`scale-150 bg-white rounded-full ${className}`}>
      {!loading ? (
        <>
          <IconButton size={"large"} onClick={() => fileInput.current.click()}>
            <AddAPhotoIcon fontSize="80px" />
          </IconButton>
          <input ref={fileInput} onChange={handleChange} type="file" accept="image/*" hidden />
        </>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default FileInput;
