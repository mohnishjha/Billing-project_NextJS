import React from "react";
import ItemListInvoice from "./ItemListInvoice";
import GoBackBtn from "./GoBackBtn";

const EditInvoiceForm = () => {
  return (
    <div>
      <GoBackBtn/>
      <div className="mt-6 text-2xl font-bold ml-6 mb-6">----Put Name of Invoice to Edit---</div>
      <div className="font-bold text-xs ml-6 text-[#7c5dfa]">
        Bill From
      </div>

      {/* ---------------------Form Start------------------------------*/}
      <form>
        <label>
          <div
            className="font-medium text-xs ml-6 mt-6 mb-2 text-[#7e88c3]">
            Street Address
          </div>
          <input
            type="text"
            className="ml-6 w-80 h-12 border-solid text-xs font-bold pl-5 border-[#dfe3fa] border-[1px]"
            defaultValue={"19 Union Terrace"}
          />
        </label>

        <div className="flex">
          <label>
            <div
              className="font-medium text-xs ml-6 mt-6 mb-2 text-[#7e88c3]"
            >
              City
            </div>
            <input
              type="text"
              className="ml-6 w-36 h-12 text-xs font-bold pl-5 border-[#dfe3fa] border-[1px]"
              defaultValue={"London"}
            />
          </label>
          <label>
            <div
              className="font-medium text-xs ml-6 mt-6 mb-2 text-[#7c5dfa]"
              >
              Post Code
            </div>
            <input
              type="text"
              className="ml-6 w-36 h-12 text-xs font-bold pl-5 border-[#dfe3fa] border-[1px]"
              defaultValue={"E1 3EZ"}
            />
          </label>
        </div>

        <label>
          <div
            className="font-medium text-xs ml-6 mt-6 mb-2 text-[#7c5dfa]">
            Country
          </div>
          <input
            type="text"
            className="ml-6 w-80 h-12 text-xs font-bold pl-5 border-[#dfe3fa] border-[1px]" defaultValue={"United Kingdom"}
          />
        </label>

        {/* ---------------------Bill To--------------------------- */}

        <div
          className="font-bold text-xs ml-6 mt-10 text-[#7c5dfa]"
        >
          Bill To
        </div>

        <label>
          <div
            className="font-medium text-xs ml-6 mt-6 mb-2 text-[#7e88c3]"
          >
            Client's Name
          </div>
          <input
            type="text"
            className="ml-6 w-80 h-12 text-xs font-bold pl-5 border-[#dfe3fa] border-[1px]"
            defaultValue={"Alex Grim"}
          />
        </label>

        <label>
          <div
            className="font-medium text-xs ml-6 mt-6 mb-2 text-[#7e88c3]"
          >
            Client's Email
          </div>
          <input
            type="text"
            className="ml-6 w-80 h-12 text-xs font-bold pl-5 border-[#dfe3fa] border-[1px]"
            defaultValue={"alexgrim@mail.com"}
          />
        </label>

        <label>
          <div
            className="font-medium text-xs ml-6 mt-6 mb-2 text-[#7e88c3]"
          >
            Street Address
          </div>
          <input
            type="text"
            className="ml-6 w-80 h-12 text-xs font-bold pl-5 border-[#dfe3fa] border-[1px]"
            defaultValue={"84 Church Way"}
          />
        </label>

        <div className="flex">
          <label>
            <div
              className="font-medium text-xs ml-6 mt-6 mb-2 text-[#7e88c3]"
            >
              City
            </div>
            <input
              type="text"
              className="ml-6 w-36 h-12 text-xs font-bold pl-5 border-[#dfe3fa] border-[1px]"
              defaultValue={"Bradford"}
            />
          </label>
          <label>
            <div
              className="font-medium text-xs ml-6 mt-6 mb-2 text-[#7e88c3]"
            >
              Post Code
            </div>
            <input
              type="text"
              className="ml-6 w-36 h-12 text-xs font-bold pl-5 border-[#dfe3fa] border-[1px]"
              defaultValue={"BD1 9PB"}
            />
          </label>
        </div>

        <label>
          <div
            className="font-medium text-xs ml-6 mt-6 mb-2 text-[#7e88c3]">
            Country
          </div>
          <input
            type="text"
            className="ml-6 w-80 h-12 text-xs font-bold pl-5 border-[#dfe3fa] border-[1px]"
            defaultValue={"United Kingdom"}
          />
        </label>

        <label>
          <div
            className="font-medium text-xs ml-6 mt-6 mb-2 text-[#7e88c3]">
            Invoice Date
          </div>
          <input
            type="date"
            className="ml-6 w-80 h-12 text-xs font-bold pl-5 pr-4 border-[#dfe3fa] border-[1px]"defaultValue={"2021-08-21"}
          />
        </label>

        <label>
          <div
            className="font-medium text-xs ml-6 mt-6 mb-2 text-[#7e88c3]"
          >
            Payment Terms
          </div>
          <input
            type="text"
            className="ml-6 w-80 h-12 text-xs font-bold pl-5 border-[#dfe3fa] border-[1px]"
            defaultValue={"Next 30 Days"}
          />
        </label>

        <label>
          <div
            className="font-medium text-xs ml-6 mt-6 mb-2 text-[#7e88c3]">
            Project Description
          </div>
          <input
            type="text"
            className="ml-6 w-80 h-12 text-xs font-bold pl-5 border-[#dfe3fa] border-[1px]" defaultValue={"Graphic Design"}
          />
        </label>

        {/* ---------------------Item List-------------------------- */}

        <ItemListInvoice />

        {/* ------------------------------------------- */}

        <div
          className="w-96 h-16 mt-6"
          style={{
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.10) 100%)",
          }}
        ></div>



        <div className="flex w-96 h-24">
            <div className=" rounded-3xl mt-5 mb-5 mr-2 ml-32 w-24 h-12">
          <button className="text-xs font-bold text ml-6 mt-4 text-[#7e88c3]">
            Cancel
          </button>
            </div>

          <div
            className="w-32 h-12 rounded-3xl mt-5 mr-6 bg-[#7c5dfa]">
            <button
              className="h-12 w-28 ml-2 text-xs font-bold text-white"
            >
              Save Changes
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditInvoiceForm;
