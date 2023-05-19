import React from "react";
import Avatar from "@mui/material/Avatar";
import { Button } from "@mui/material";
import { Google, Apple } from "@mui/icons-material";

export default function LandlordProfile() {
  return (
    <>
      <div className="!bottom-20 relative">
        <div className="relative inline-block">
          <Avatar
            alt="?"
            src="public/images/no-profile-image.png"
            className="!w-28 !h-28 mx-auto"
          />
          <img
            src="public/images/hone-h-logo.png"
            className="absolute bottom-0 right-0 w-10"
          />
        </div>
        <Button
          variant="outlined"
          fullWidth
          type="button"
          className={
            "!bg-orange-500 !w-48 !mt-5 !rounded-lg !text-white !block !mx-auto"
          }
        >
          Log-in
        </Button>
        <Button
          variant="outlined"
          fullWidth
          type="button"
          className={
            "!bg-white !text-black !w-48 !mt-5 !rounded-lg !block !mx-auto"
          }
        >
          Create Account
        </Button>

        <div className="mt-5">
          <button className="!bg-transparent !border-none">
            <Google sx={{ color: "black" }} className="!inline-block" />
          </button>
          <button className="!bg-transparent !border-none">
            <Apple sx={{ color: "black" }} className="!inline-block" />
          </button>
        </div>
      </div>
    </>
  );
}
