"use client";

//Assets
import Home from "../../../img/home-outline.png";

//Libraries
import Card from "../_ui/Card";
import Button from "../_ui/Button";
import SearchBar from "../_ui/SearchBar";
import TableResults from "../_ui/TableResults";
import Image from "next/image";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import { InputComponent } from "../m-profile/page";
import { Dispatch, SetStateAction, useState } from "react";
import ButtonWhite from "../_ui/ButtonWhite";

//Define

function AddVehicleTypeForm({
  onClose,
}: {
  onClose: Dispatch<SetStateAction<boolean>>;
}) {
  const [newTypeName, setNewTypeName] = useState("");
  const [newBookingFee, setNewBookingFee] = useState(0);
  const [newParkingFee, setNewParkingFee] = useState(0);

  return (
    <div className="w-full h-full absolute top-0 left-0 z-100 bg-neutral-200 bg-opacity-40 overflow-hidden flex items-center justify-center">
      <Card className="w-1/2 h-auto text-base p-8 py-10 ">
        <form className="w-full h-full flex-col justify-center items-start gap-2.5 flex">
          <InputComponent
            name="typeName"
            type="text"
            value={newTypeName}
            label="Type name"
            onChangeFunction={(e) => setNewTypeName(e.target.value)}
          />
          <InputComponent
            name="bookingFee"
            type="number"
            value={String(newBookingFee)}
            label="Booking fee ($)"
            onChangeFunction={(e) => setNewBookingFee(e.target.value)}
          />
          <InputComponent
            name="parkingFee"
            type="number"
            value={String(newParkingFee)}
            onChangeFunction={(e) => setNewParkingFee(e.target.value)}
            label="Parking fee / day ($)"
          />
          <div className="w-full font-bold mt-4 flex gap-4">
            <ButtonWhite
              name="Cancel"
              className="w-full p-3"
              onClickFunction={() => onClose(false)}
            />
            <Button name="Add" className="w-full p-3" />
          </div>
        </form>
      </Card>
    </div>
  );
}

export default function ManagerVehicleType() {
  const [isAdd, setIsAdd] = useState(false);

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
        ,<Typography key="2">Vehicle Type</Typography>
      </Breadcrumbs>
      <div className="w-full my-6 pt-6 pb-12 flex flex-col gap-6 h-full">
        <Card className="w-full h-full p-8 px-5">
          <div className="w-full h-full overflow-hidden flex flex-col items-center gap-9">
            {/* Searching and adding functions */}
            <div className="w-full justify-between items-center flex gap-10">
              {/* Form for searching */}
              <SearchBar />
              {/* Adding button */}
              <Button
                name="Add vehicle type"
                className="p-3 text-sm font-normal leading-4"
                onClickFunction={() => setIsAdd(true)}
              />
            </div>
            {/* Table of results */}
            <TableResults tableType={1} />
          </div>
        </Card>
        {isAdd && <AddVehicleTypeForm onClose={setIsAdd} />}
      </div>
    </div>
  );
}
