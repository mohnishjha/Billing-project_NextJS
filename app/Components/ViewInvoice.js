import React from "react";
import GoBackBtn from "./GoBackBtn";
import Image from "next/image";
import { useContext } from "react";
import { MainContext } from "../Context/MainFormDataContext";

const ViewInvoice = () => {

  const contextHere = useContext(MainContext)

  return (
    <div className="bg-[#F8F8FB] h-fit w-screen pt-px">
      <GoBackBtn/>
      <div
        style={{
          width: "327px",
          height: "91px",
          boxShadow: "0px 10px 10px -10px rgba(72, 84, 159, 0.10)",
        }}
        className="bg-white ml-6 mt-7 mb-4 flex justify-around items-center"
      >
        <span className="text-xs font-medium text-[#858BB2]">
        Status
        </span>
        <div
          className="rounded-md flex items-center"
          style={{
            width: "104px",
            height: "40px",
            backgroundColor: "rgba(255, 143, 0, 0.0571)",
          }}
        >
          <Image
            src="./Assets/icons/pendingStatus.svg"
            alt="logo"
            width={8}
            height={8}
            className="ml-4 mr-2"
          />
          <span
            className="text-xs font-bold"
            style={{ color: "rgba(255, 143, 0, 1)" }}
          >
            Pending
          </span>
        </div>
      </div>
      <div
        style={{
          width: "327px",
          height: "91px",
          boxShadow: "0px 10px 10px -10px rgba(72, 84, 159, 0.10)"
        }}
        className="bg-white ml-6 mt-7 mb-4 flex justify-around items-center">

        
        {/* details of invoice */}
        <div>
        <h1>InvoiceNumber</h1>
        <h2>{contextHere.form[1].tProjectDesc}</h2>
        </div>
      
      
      </div>



      <div
        style={{
          backgroundColor: "#FFF",
          boxShadow: "0px 10px 10px -10px rgba(72, 84, 159, 0.10)",
          width: "375px",
          height: "91px",
        }}
        className="flex justify-around items-center mt-14"
      >
        <button style={{
            width: "89px",
            height: "48px",
            flexShrink: "0",
            borderRadius: "24px",
            backgroundColor: "#F9FAFE",
            color: "#7E88C3",}}>Edit</button>
        <button
          style={{
            width: "89px",
            height: "48px",
            flexShrink: "0",
            borderRadius: "24px",
            backgroundColor: "#EC5757",
            color: "white"
          }}
        >
          Delete
        </button>
        <button style={{
          width: "149px",
          height: "48px",
          flexShrink: "0", borderRadius: "24px",
          backgroundColor: "#7C5DFA",
          color: 'white'}}>Mark as Paid</button>
      </div>
    </div>
  );
};

export default ViewInvoice;
