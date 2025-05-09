'use client'
import Image from "next/image"
import { useState } from "react"

 const images = [
        {
            id:1,
            url:'https://images.pexels.com/photos/1029896/pexels-photo-1029896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
         {
            id:2,
            url:'https://images.pexels.com/photos/208052/pexels-photo-208052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            id:3,
            url:'https://images.pexels.com/photos/2113855/pexels-photo-2113855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

        },
        {
            id:4,
            url:'https://images.pexels.com/photos/2536965/pexels-photo-2536965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        }
    ]

const ProductImages = () => {
    const [index, setIndex] = useState(0);
   
  return (
    <div className="">
        <div className="h-[500px] relative">
            <Image src={images[index].url} alt='' fill sizes="50vw" className="object-cover rounded-md" />
        </div>
        <div className=" flex justify-between gap-4 mt-8">
            {images.map((image, i) => (
                <div className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer" key={image.id} onClick={() => setIndex(i)}>
                    <Image src={image.url} alt='' fill sizes="30vw" className="object-cover rounded-md" />
                </div>
            ))}
        </div>
    </div>
  )
}

export default ProductImages