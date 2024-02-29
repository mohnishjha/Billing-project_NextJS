"use client";

import React, { useState } from "react";
import {useForm} from 'react-hook-form'
import { useContext } from "react";
import { MainContext } from "@/app/Context/MainFormDataContext";
import ItemListInvoice from "@/app/Components/ItemListInvoice";
import GoBackBtn from "@/app/Components/GoBackBtn";
import Link from "next/link";
import Navbar from "@/app/Components/Navbar";


const NewInvoiceForm = () => {

  const contextHere = useContext(MainContext)

  let invoiceNum = contextHere.form.length + 2
  
  const {register, handleSubmit, formState:{errors}} = useForm()


  const [input, setInput] = useState({
    invoiceStatus: "",
    invoiceNumber: "XMP" + invoiceNum,
    fAddress: "19 Union Terrace",
    fCity: "London",
    fPostCode: "E1 3EZ",
    fCountry: "United Kingdom",
    tName: "Alex Grim",
    tEmail: "alexgrim@mail.com",
    tAddress: "84 Church Way",
    tCity: "Bradford",
    tPostCode: "BD1 9PB",
    tCountry: "United Kingdom",
    tInvoiceDate: "2021-08-21",
    tPaymentTerms: "Net 30 Days",
    tProjectDesc: "Graphic Design",
  });


  const invoiceIDGenerate = () => {
    contextHere.setInvoiceID("#XMP"+ invoiceNum)
    console.log(contextHere.invoiceID)
  }

  const pendingstatusGenerate = () => {
    contextHere.setStatus("Pending")
  }

  const handleSubmitOriginal = () => {

    invoiceIDGenerate()
    pendingstatusGenerate()

    const newInput = {
      invoiceStatus: contextHere.status,
      invoiceNumber: contextHere.invoiceID,
      fAddress: input.fAddress,
      fCity: input.fCity,
      fPostCode: input.fPostCode,
      fCountry: input.fCountry,
      tName: input.tName,
      tEmail: input.tEmail,
      tAddress: input.tAddress,
      tCity: input.tCity,
      tPostCode: input.tPostCode,
      tCountry: input.tCountry,
      tInvoiceDate: input.tInvoiceDate,
      tPaymentTerms: input.tPaymentTerms,
      tProjectDesc: input.tProjectDesc,
    };

    contextHere.setForm([...contextHere.form, newInput]);
    setInput({
      invoiceStatus: contextHere.status,
      invoiceNumber: contextHere.invoiceID,
      fAddress: "19 Union Terrace",
      fCity: "London",
      fPostCode: "E1 3EZ",
      fCountry: "United Kingdom",
      tName: "Alex Grim",
      tEmail: "alexgrim@mail.com",
      tAddress: "84 Church Way",
      tCity: "Bradford",
      tPostCode: "BD1 9PB",
      tCountry: "United Kingdom",
      tInvoiceDate: "2021-08-21",
      tPaymentTerms: "Net 30 Days",
      tProjectDesc: "Graphic Design",
    });

    console.log(contextHere.form);
  };

  const saveDraft = (e) => {
    e.preventDefault();

    invoiceIDGenerate()
    contextHere.setStatus("Draft")

    const newInput = {
      invoiceStatus: contextHere.status,
      invoiceNumber: contextHere.invoiceID,
      fAddress: input.fAddress,
      fCity: input.fCity,
      fPostCode: input.fPostCode,
      fCountry: input.fCountry,
      tName: input.tName,
      tEmail: input.tEmail,
      tAddress: input.tAddress,
      tCity: input.tCity,
      tPostCode: input.tPostCode,
      tCountry: input.tCountry,
      tInvoiceDate: input.tInvoiceDate,
      tPaymentTerms: input.tPaymentTerms,
      tProjectDesc: input.tProjectDesc,
    };

    contextHere.setForm([...contextHere.form, newInput]);
    setInput({
      invoiceStatus: "",
      invoiceNumber: contextHere.invoiceID,
      fAddress: "19 Union Terrace",
      fCity: "London",
      fPostCode: "E1 3EZ",
      fCountry: "United Kingdom",
      tName: "Alex Grim",
      tEmail: "alexgrim@mail.com",
      tAddress: "84 Church Way",
      tCity: "Bradford",
      tPostCode: "BD1 9PB",
      tCountry: "United Kingdom",
      tInvoiceDate: "2021-08-21",
      tPaymentTerms: "Net 30 Days",
      tProjectDesc: "Graphic Design",
    });

    console.log(contextHere.form);
  }


  return (
    <div>
      <Navbar/>
      <GoBackBtn />
      <div className="mt-6 text-2xl font-bold ml-6 mb-6">New Invoice</div>
      <div className="font-bold text-xs ml-6 text-[#7c5dfa]">Bill From</div>

      {/* ---------------------Form Start------------------------------*/}

      <form
        className="text-xs font-bold text-[#0c0e16]"
        onSubmit={handleSubmit(handleSubmitOriginal)}
      >
        <label>
          <div className="font-medium text-xs ml-6 mt-6 mb-2 text-[#7e88c3]">
            Street Address 
            {errors.fAddress && <span className="ml-16 text-red-600">{errors.fAddress.message}</span>}
          </div>
          <input
            type="text"
            className="ml-6 w-80 h-12 pl-5 border-solid border-[#dfe3fa] border-[1px]"
            value={input.fAddress}
            id="fAddress"
            {...register("fAddress", {required: "*This is a required field", minLength: {
              value: 5,
              message: "*Minimum 5 characters"
            }})}
            onChange={(e) =>
              setInput((prev) => ({ ...prev, fAddress: e.target.value }))}
          />
        </label>
        


        <div className="flex">
          <label>
            <div className="font-medium text-xs ml-6 mt-6 mb-2 text-[#7e88c3]">
              City</div>
            <input
              type="text"
              className="ml-6 w-36 h-12 pl-5 border-[#dfe3fa] border-[1px]"
              value={input.fCity}
                {...register("fCity", {required: "*This field is required", minLength: {
                  value: 3,
                  message: "*Minimum 3 characters"
                }})}
                onChange={(e) =>
                  setInput((prev) => ({ ...prev, fCity: e.target.value }))}
            /><br/>
            {errors.fCity && <span className="ml-6 text-red-600 font-medium">{errors.fCity.message}</span>}
          </label>
          <label>
            <div className="font-medium text-xs ml-6 mt-6 mb-2 text-[#7e88c3]">
              Post Code
            </div>
            <input
              type="text"
              className="ml-6 w-36 h-12 pl-5 border-[#dfe3fa] border-[1px]"
              value={input.fPostCode}
              {...register("fPostCode", {required: "*This is a required field", minLength: {
                value: 4,
                message: "*Minimum 4 characters"
              }})}
              onChange={(e) =>
                setInput((prev) => ({ ...prev, fPostCode: e.target.value }))}/><br/>
            {errors.fPostCode && <span className="ml-6 text-red-600 font-medium">{errors.fPostCode.message}</span>}
          </label>
        </div>

        <label>
          <div className="font-medium text-xs ml-6 mt-6 mb-2 text-[#7e88c3]">
            Country
          </div>
          <input
            type="text"
            className="ml-6 w-80 h-12 pl-5 border-[#dfe3fa] border-[1px]"
            value={input.fCountry}
            onChange={(e) =>
              setInput((prev) => ({ ...prev, fCountry: e.target.value }))}
              required
          />
        </label>

        {/* ---------------------Bill To--------------------------- */}

        <div className="font-bold text-xs ml-6 mt-10 text-[#7e88c3]">
          Bill To
        </div>

        <label>
          <div className="font-medium text-xs ml-6 mt-6 mb-2 text-[#7e88c3]">
            Client's Name
          </div>
          <input
            type="text"
            className="ml-6 w-80 h-12 pl-5 border-[#dfe3fa] border-[1px]"
            value={input.tName}
            onChange={(e) =>
              setInput((prev) => ({ ...prev, tName: e.target.value }))}
              required
              minLength={5}
          />
        </label>

        <label>
          <div className="font-medium text-xs ml-6 mt-6 mb-2 text-[#7e88c3]">
            Client's Email
          </div>
          <input
            type="email"
            className="ml-6 w-80 h-12 pl-5 border-[#dfe3fa] border-[1px]"
            value={input.tEmail}
            onChange={(e) =>
              setInput((prev) => ({ ...prev, tEmail: e.target.value }))
            }
            required
          />
        </label>

        <label>
          <div className="font-medium text-xs ml-6 mt-6 mb-2 text-[#7e88c3]">
            Street Address
          </div>
          <input
            type="text"
            className="ml-6 w-80 h-12 pl-5 border-[#dfe3fa] border-[1px]"
            value={input.tAddress}
            onChange={(e) =>
              setInput((prev) => ({ ...prev, tAddress: e.target.value }))}
              required
          />
        </label>

        <div className="flex">
          <label>
            <div className="font-medium text-xs ml-6 mt-6 mb-2 text-[#7e88c3]">
              City
            </div>
            <input
              type="text"
              className="ml-6 w-36 h-12 pl-5 border-[#dfe3fa] border-[1px]"
              value={input.tCity}
              onChange={(e) =>
                setInput((prev) => ({ ...prev, tCity: e.target.value }))}
                required
            />
          </label>
          <label>
            <div className="font-medium text-xs ml-6 mt-6 mb-2 text-[#7e88c3]">
              Post Code
            </div>
            <input
              type="text"
              className="ml-6 w-36 h-12 pl-5 border-[#dfe3fa] border-[1px]"
              value={input.tPostCode}
              onChange={(e) =>
                setInput((prev) => ({ ...prev, tPostCode: e.target.value }))}
                
            />
          </label>
        </div>

        <label>
          <div className="font-medium text-xs ml-6 mt-6 mb-2 text-[#7e88c3]">
            Country
          </div>
          <input
            type="text"
            className="ml-6 w-80 h-12 pl-5 border-[#dfe3fa] border-[1px]"
            value={input.tCountry}
            onChange={(e) =>
              setInput((prev) => ({ ...prev, tCountry: e.target.value }))}
              required
          />
        </label>

        <label>
          <div className="font-medium text-xs ml-6 mt-6 mb-2 text-[#7e88c3]">
            Invoice Date
          </div>
          <input
            type="date"
            className="ml-6 w-80 h-12 pl-5 border-[#dfe3fa] border-[1px]"
            value={input.tInvoiceDate}
            onChange={(e) =>
              setInput((prev) => ({ ...prev, tInvoiceDate: e.target.value }))}
              required
          />
        </label>

        <label>
          <div className="font-medium text-xs ml-6 mt-6 mb-2 text-[#7e88c3]">
            Payment Terms
          </div>
          <input
            type="text"
            className="ml-6 w-80 h-12 pl-5 border-[#dfe3fa] border-[1px]"
            value={input.tPaymentTerms}
            onChange={(e) =>
              setInput((prev) => ({ ...prev, tPaymentTerms: e.target.value }))}
              required
          />
        </label>

        <label>
          <div className="font-medium text-xs ml-6 mt-6 mb-2 text-[#7e88c3]">
            Project Description
          </div>
          <input
            type="text"
            className="ml-6 w-80 h-12 pl-5 border-[#dfe3fa] border-[1px]"
            value={input.tProjectDesc}
            onChange={(e) =>
              setInput((prev) => ({ ...prev, tProjectDesc: e.target.value }))}
              required
          />
        </label>

        {/* ---------------------Item List-------------------------- */}

        <ItemListInvoice />

        <div
          className="w-96 h-16 mt-6"
          style={{
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.10) 100%)",
          }}
        ></div>

        <div className="flex justify-around mt-5 mb-5 ml-6">
          <div className="mt-4">
          <Link href='/'>
          <button
            className="text-xs font-bold text-[#7e88c3]"
            >
            Discard
          </button>
          </Link>
              </div>

          <div className="w-28 h-12 rounded-3xl bg-[#373b53]">
            <button className="h-12 w-28 text-xs font-bold text-[#888eb0]" onClick={saveDraft}>
              Save as Draft
            </button>
          </div>

          <div className="w-28 h-12 rounded-3xl mr-6 bg-[#7c5dfa]">
            <button
              className="h-12 w-28 text-xs font-bold text-white"
              type="submit"
            >
              Save & Send
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewInvoiceForm;
