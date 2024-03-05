'use client'

import React, { useEffect, useState } from "react";
import GoBackBtn from "@/app/Components/GoBackBtn"
import { useContext } from "react";
import { MainContext } from "@/app/Context/MainFormDataContext";
import Navbar from "@/app/Components/Navbar";
import PendingStatus from "@/app/Components/PendingStatus";
import EmptyInvoice from "@/app/Components/EmptyInvoice";
import LoadingComponent from "@/app/Components/LoadingComponent";


const ViewInvoice = ({params}) => {

  const contextHere = useContext(MainContext)
  console.log(params)
  let inID = decodeURIComponent(params.viewMode)
  const [babaka, setBabaka] = useState(null)


  //checks if form doesn't have any contents then it renders home page elements

  if(!contextHere.form || contextHere.form.length == 0){
      return (
      <>
      <Navbar/>
      <EmptyInvoice/>
      </>
        )
  }


  useEffect(()=> {
    //search inID in context.form array and then render the details below
    if(contextHere.form && contextHere.form.length > 0){

      for(let i=0;i<contextHere.form.length;i++){
        if(contextHere.form[i].invoiceNumber == inID){
          setBabaka(i)
          console.log(babaka)
          break;
        }
      }
    }
     return;

  },[])

  if(babaka == null){
    return <LoadingComponent/>
  }

  return (
    <>
    <Navbar/>
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
          <PendingStatus/>
        </div>
      </div>
      <div
        className="bg-white ml-6 mt-7 mb-4 flex justify-around items-center w-[327px]">

        
        {/* details of invoice */}
        <div>
          
        <h2>{contextHere.form[babaka].invoiceNumber}</h2>
        <h1>{contextHere.form[babaka].tProjectDesc}</h1>
        <h2>{contextHere.form[babaka].fAddress}</h2>
        <h2>{contextHere.form[babaka].fCity}</h2>
        <h2>{contextHere.form[babaka].fPostCode}</h2>
        <h2>{contextHere.form[babaka].fCountry}</h2>
        <h2>{contextHere.form[babaka].tInvoiceDate}</h2>


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
    </>
  );
};

export default ViewInvoice;
