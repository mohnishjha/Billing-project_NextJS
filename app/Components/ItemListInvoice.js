import React, { useState } from "react";
import Image from "next/image";

const ItemListInvoice = () => {


  const [item, setItem] = useState({
    iName: "Email Design",
    iQty: "2",
    iPrice: "200.00",
    iTotal: "400",
  })

  const [itemList, setItemList] = useState([item])

  const handleSubmit = (event) => {
    event.preventDefault()    
    const newarr = [...itemList, item]
    setItem({
      iName: "Email Design",
      iQty: "2",
      iPrice: "200.00",
      iTotal: "400",
    })
    setItemList(newarr)
    console.log(itemList)
  }

  const deleteHandler = (e) => {
    const deletearr = [...itemList]
    deletearr.splice(e,1)
    setItemList(deletearr)
  }


  return (
    <div>
      <div
        className="font-bold text-lg ml-6 mt-16 text-[#7e88c3]">
        Item List
      </div>

      {/* --------------List of Items for Billing------------------ */}
      
 
      <div>
      {
        itemList.map((t, i) => {
          return (
            <div key={t+i}>
            <label>
          <div
            className="font-medium text-xs ml-6 mt-6 mb-2 text-[#7e88c3]"
          >Item Name
          </div>
          <input
            type="text"
            className="ml-6 w-80 h-12 pl-5 text-xs font-bold border-[#dfe3fa] border-[1px]"
            value={t.iName}
            onChange={(e) => {
              const newArray = [...itemList]
              newArray[i] = {...newArray[i], iName: e.target.value}
              setItemList(newArray)
            }}
            
          />
        </label>

        <div className="flex">
          <label>
            <div
              className="font-medium text-xs ml-6 mt-6 mb-2 text-[#7e88c3]">
              Qty.
            </div>
            <input
              type="text"
              className="ml-6 w-16 h-12 pl-5 text-xs font-bold border-[#dfe3fa] border-[1px]"
              value={t.iQty}
              onChange={(e) => {
                
                  const tempArr = [...itemList]
                  tempArr[i] = {...tempArr[i], iQty: e.target.value}
                  setItemList(tempArr)
                
              }}
              
            />
          </label>

          <label>
            <div
              className="font-medium text-xs ml-6 mt-6 mb-2 text-[#7e88c3]">
              Price
            </div>
            <input
              type="text"
              className="ml-6 w-24 h-12 pl-5 text-xs font-bold border-[#dfe3fa] border-[1px]"
              value={t.iPrice}
              onChange={(e) => {

                const tempList = [...itemList]
                tempList[i] = {...tempList[i], iPrice: e.target.value}
                setItemList(tempList)
              }}
              
            />
          </label>

          <label>
            <div
              className="font-medium text-xs ml-6 mt-6 mb-2 text-[#7e88c3]">
              Total
            </div>
            <div type="text" className="ml-6 w-24 h-12 mt-6 pl-5 text-xs font-bold text-[#888EB0]" >{
              !isNaN(parseFloat(t.iPrice)) && !isNaN(parseFloat(t.iQty)) ? parseFloat(t.iPrice) * parseFloat(t.iQty) : ""
              
            }
            </div>
          </label>

          <button className="mr-8  mt-8">
            <Image
              src="./Assets/icons/itemDeletebtn.svg"
              alt="Delete Item"
              height={16}
              width={12.44}
              onClick={(e) => deleteHandler()}
            />
          </button>
        </div>
        </div>
          )
        })
      }


        <div
          className="w-80 mr-6 ml-6 mt-12 rounded-3xl bg-[#f9fafe]">
          <button
            className="text-xs font-bold mt-4 mb-4 ml-24 mr-24 text-[#7e88c3]" onClick={handleSubmit}
          >+ Add New Item
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemListInvoice;
