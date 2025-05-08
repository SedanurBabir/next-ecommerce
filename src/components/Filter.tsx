const Filter = () => {
  return (
    <div className="mt-12 flex justify-between">
        {/* LEFT AREA */}
        <div className="flex gap-6 flex-wrap">
            <select name="type" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]">
                <option value="type">Type</option>
                <option value="physical">Phsical</option>
                <option value="digital">Digital</option>
            </select>
            <input type="text" name="min" placeholder="min price" className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400 "/>
            <input type="text" name="max" placeholder="max price" className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400 "/>
            <select name="type" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]">
                <option value="type">Size</option>
                <option value="physical">Phsical</option>
                <option value="digital">Digital</option>
            </select>
            <select name="type" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]">
                <option value="type">Color</option>
                <option value="physical">Phsical</option>
                <option value="digital">Digital</option>
            </select>
            <select name="type" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]">
                <option value="type">Category</option>
                <option value="physical">Phsical</option>
                <option value="digital">Digital</option>
            </select>
             <select name="type" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]">
                <option value="type">All Filters</option>
                <option value="physical">Phsical</option>
                <option value="digital">Digital</option>
            </select>
        </div>
        {/* RIGHT AREA */}
        <div className="">
            <select name="" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-white ring-1 ring-gray-400">
                <option value="">Sort By</option>
                <option value="low">Low Price</option>
                <option value="high">High Price</option>
                <option value="newest">Newest</option>
            </select>
        </div>
    </div>
  )
}

export default Filter