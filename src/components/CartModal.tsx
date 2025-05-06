'use client'

import Image from "next/image";

const CartModal = () => {
  const cartItems = true;
  return (
    <div className=" w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgba(0,0,0,0.2)] bg-white top-12 right-0 z-20 flex flex-col gap-6 ">
      {!cartItems ? (
        <div className="">Cart is empty</div>
      ) : (
        <>
        <h2 className="text-xl">Shopping Cart</h2>
        {/* PRODUCT ITEMS */}
        <div className="flex flex-col gap-8">
          {/* ITEM */}
           <div className=" flex gap-4">
            <Image src='/product.png' alt='' width={72}  height={96} className="object-cover rounded-md" />
            <div className=" flex flex-col justify-between w-full">
              {/* TOP SECTİON */}
              <div>
                {/* TITLE */}
                <div className="flex items-center justify-between gap-8">
                  <h3 className="font-semibold">Product Name</h3>
                  <div className="p-1 bg-gray-50 rounded-sm">$49</div>
                </div>
                {/* DESCRIPTION */}
                <div className="text-sm text-gray-500">
                    Available
                </div>
              </div>
              {/* BOTTOM SECTİON */}
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Qty: 2</span>
                <span className="text-blue-500 cursor-pointer" >Remove</span>
              </div>
            </div>
           </div>
           {/* ITEM */}
           <div className=" flex gap-4">
            <Image src='/product.png' alt='' width={72}  height={96} className="object-cover rounded-md" />
            <div className=" flex flex-col justify-between w-full">
              {/* TOP SECTİON */}
              <div>
                {/* TITLE */}
                <div className="flex items-center justify-between gap-8">
                  <h3 className="font-semibold">Product Name</h3>
                  <div className="p-1 bg-gray-50 rounded-sm">$49</div>
                </div>
                {/* DESCRIPTION */}
                <div className="text-sm text-gray-500">
                    Available
                </div>
              </div>
              {/* BOTTOM SECTİON */}
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Qty: 2</span>
                <span className="text-blue-500 cursor-pointer" >Remove</span>
              </div>
            </div>
            </div>
        </div>
        {/* CART BOTTOM */}
        <div className="">
          <div className="flex items-center justify-between text-sm font-semibold">
            <span className="">
                Subtotal
            </span>
             <span className="">
                $98
            </span>
          </div>
          <p className="text-sm text-gray-500 mt-2 mb-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
          <div className="flex justify-between text-sm">
            <button className=" rounded-md py-3 px-4 ring-1 ring-gray-300">View Cart</button>
            <button className=" rounded-md py-3 px-4 bg-black text-white ">Checkout</button>
          </div>

        </div>
        </>
      )}
    </div>
  )
}

export default CartModal