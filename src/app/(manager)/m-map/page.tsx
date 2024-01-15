"use client";

import Button from "../_ui/Button";
import Card from "../_ui/Card";
import SmallStatisticsContent from "../_ui/SmallStatisticsContent";
import Home from "../../../img/home-outline.png";
import Image from "next/image";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";

export default function ManagerMap() {
  return (
    <div className="Content w-full h-full px-16 pt-6 pb-12 overflow-hidden">
      <Breadcrumbs
        separator="›"
        aria-label="breadcrumb"
        className="text-black text-opacity-70 text-base font-medium"
      >
        <Typography key="1" className="flex gap-2">
          <Image src={Home} alt="home-icon" className="w-6 h-6" />
          Home
        </Typography>
        ,<Typography key="2">Map</Typography>
      </Breadcrumbs>
      <div className="w-full relative my-6 pt-6 pb-12 h-full flex gap-3">
        <Card className="w-4/5 h-full p-5">
          <img
            className="w-full h-full"
            src="https://via.placeholder.com/713x678"
          />
        </Card>
        <div className="flex flex-col gap-3">
          <Card className="w-full h-24">
            <SmallStatisticsContent name="Total slots" value="120" />
          </Card>
          <Card className="w-full h-24">
            <SmallStatisticsContent name="Total sections" value="3" />
          </Card>
          <Button name="EDIT MAP" className="p-6 font-bold w-full" />
        </div>
      </div>
    </div>
  );
}
