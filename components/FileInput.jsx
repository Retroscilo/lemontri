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
    <div className={`bg-white rounded-full w-[60px] h-[60px] flex items-center justify-center ${className}`}>
      <IconButton size={"large"} className={"w-full h-full"} onClick={() => fileInput.current.click()}>
        {!loading && <AddAPhotoIcon fontSize="80px" />}
        {loading && <CircularProgress />}
      </IconButton>
      <input ref={fileInput} onChange={handleChange} type="file" accept="image/*" hidden />
    </div>
  );
};

export default FileInput;
