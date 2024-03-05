"use client";

import React, { useState } from "react";
import Select from "react-select";
import Image from "next/image";
import "./middleComp.css";
import Link from "next/link";
import { MainContext } from "../Context/MainFormDataContext";
import { useContext } from "react";

const Invoice = () => {
  const [value, setValue] = useState(null);

  const contextHere = useContext(MainContext)
  let InvoiceListLength = contextHere.form.length

  const options = [
    { value: "draft", label: "Draft" },
    { value: "pending", label: "Pending" },
    { value: "paid", label: "Paid" },
  ];
  return (
    <div>
      <div className="flex justify-between ml-6 mr-6 mt-9">
        <div>
          <h1 className="text-xl font-bold">Invoices</h1>
          <h2
            className="text-xs font-medium h2invoice text-[#888eb0]"
          >
            {InvoiceListLength == 0 ?  "No Invoices" : InvoiceListLength + " Invoices" } 
          </h2>
        </div>

        <div className="flex">
          <div className="w-20 h-4 text-xs font-bold text-black">
            <Select
              options={options}
              placeholder="Filter"
              defaultValue={value}
              onChange={setValue}
            />
          </div>
          <div>
            <Link href='/newInvoice'>
            <button
              className="w-24 h-11 rounded-3xl text-white text-xs font-bold flex items-center justify-around pl-1/2 pr-2 ml-5 bg-[#7c5dfa]"
              >
              <Image
                src="/Assets/icons/newInvoiceBtn.svg"
                alt="new invoice"
                height={32}
                width={32}
                />
              New
            </button>
                </Link>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
