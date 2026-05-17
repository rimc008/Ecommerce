import React, { useState } from 'react'
import { assets } from '../assets/assets.js';
import { stringify } from 'postcss';
import { toast } from "react-toastify";
import { successToast, errorToast } from "../toastConfig.js";


const Add = ({trigger}) => {

    const [name,setName] = useState("")
    const [description,setDescription] = useState("")
    const [category,setCategory] = useState("Men")
    const [subcategory,setSubcategory] = useState("Topwear")
    const [price,setPrice] = useState("")
    const [images,setImages] = useState([false,false,false,false])
    const [size,setSize] = useState(["","","",""])
    

    const sizes = [{size:"S"},{size:"M"},{size:"L"},{size:"XL"},{size:"XXL"}]

    const handleChange10 = (size1) => {
        setSize(size1)
    }

    console.log(size);

    const submitHandler2 = async(e) => {

        //it is always preventDefault(),keep the spelling in mind
        e.preventDefault()

        try {
            const formData = new FormData();

            formData.append("name",name);
            formData.append("description",description);
            formData.append("category",category);
            formData.append("subcategory",subcategory);
            formData.append("price",price);

            // we msust append by using for loop take it as rule of FormData()
            // you must use multer as multer is middleware used to handle file uploads in Express.
            images.map((item)=>{
                if(item){
                    formData.append("image",item)
                }
            })

            //no mo need of multer here here because it is not file
            size.map((item)=>{
                if(item){
                    formData.append("size",item)
                }
            })


            //no header would be present if body is made using FormData()
            const res = await fetch("http://localhost:4001/api/admin/addparentitems",
            {
                method:"POST",
                body: formData
            })

            const data = await res.json();

            if(data.success){
                successToast(data.message);

                setName("");
                setDescription("");
                setCategory("Men");
                setSubcategory("Topwear");
                setPrice("")
                setImages([false,false,false,false]);
                setSize(["","","",""])

            }
            else{
                console.log(data.message);
            }

        } catch (error) {
            console.log(error.message);
            
        }
    }

//if you can two or more function on onSubmit then you must declare which function is directly linked to actual on submit event
  return (

    <div>

        <div className='text-3xl font-bold text-center mt-10'>
            Add Products
        </div>
    
    <form onSubmit={(e) => {submitHandler2(e),trigger()}} action="">
        <div className='flex flex-col gap-7 pt-10 pl-20 text-xl'>

            <div className='flex flex-col gap-3'>
                <h1 className='font-bold'>Upload Image</h1>
                <div className='flex flex-row gap-3'>
                    {images.map((item,i)=>(
                        <div>
                            <label htmlFor={`upload${i}`}>
                            <img className="h-30 w-30" src={!item ? assets.upload_area : URL.createObjectURL(item)} alt="" />
                            </label>
                            <input type="file" onChange={(e)=>{
                                let newImages = [...images]
                                newImages[i] = e.target.files[0]
                                setImages(newImages)
                                }} name="image" id={`upload${i}`} hidden/>
                            
                        </div>
                    ))}
                </div>
            </div>

            <div className='flex flex-col gap-2'>
                <label htmlFor="name" className='font-bold'>Product Name</label>
                <input className="w-100 border rounded-lg border-black pl-2" placeholder="Type here" type="text" name="name" id="name" onChange={(e) => setName(e.target.value)} value={name}/>
            </div>

            <div className='flex flex-col gap-2'>
                <label htmlFor="description" className='font-bold'>Product Description</label>
                <textarea className="w-100 h-fit border text-wrap border-black pl-2" placeholder="WRite content here" name="description" id="description" onChange={(e) => setDescription(e.target.value)} value={description} />
            </div>

            <div className='flex flex-row gap-10'>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="category" className='font-bold'>Product Category</label>
                    <select className="border border-black rounded-lg text-center" name="category" id="category" onChange={(e) => setCategory(e.target.value)}value = {category} >
                        <option value="Men">Men</option>
                        <option value="Women">Women</option>
                        <option value="Kids">kids</option>
                    </select>
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="subcategory" className='font-bold'>Product Subcategory</label>
                    <select className="border border-black rounded-lg text-center justify-center" name="subcategory" id="subcategory" onChange={(e) => setSubcategory(e.target.value)} value = {subcategory}>
                        <option value="Topwear">Topwear</option>
                        <option value="Bottomwear">Bottomwear</option>
                        <option value="Winterwear">Winterwear</option> 
                    </select>
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="price" className='font-bold'> Product Price</label>
                    <input className="border border-black rounded-lg pl-2" type="number" name="price" id="price" onChange={(e) => setPrice(e.target.value)} value={price} />
                </div>
            </div>

            <div className='flex flex-col gap-2'>
                <p className='font-bold'>Product Sizes</p>
                <div className='flex flex-row gap-3'>
                    {sizes.map((item,i)=> (
                        <div className={`border border-balck w-11 h-7 cursor-pointer pt-1 flex justify-center items-center ${(size[i]===item.size) ? "bg-pink-300" : "bg-gray-200"}`} onClick={() =>{

                            let newSize = [...size]
                            newSize[i] === "" ? newSize[i] = item.size : newSize[i] = ""
                            handleChange10(newSize)}}>
                                
                            {item.size}
                        </div>
                    ))}
                </div>
            </div>

            <div className='flex gap-2'>
                <input type="checkbox" className="h-5 w-5 mt-0.5" name="bestseller" id="bestseller" />
                <label htmlFor="bestseller" className='font-bold'>Add To Bestseller</label>
            </div>

            <div>
                <button type="submit" className='border w-30 h-10 rounded-lg border-2 border-balck text-white bg-black cursor-pointer hover:scale-105' >Add</button>
            </div>
        </div>
    </form>
    </div>
  )
}

export default Add