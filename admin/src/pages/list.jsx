import React, { useEffect, useState } from 'react'

const List = ({triggerkey}) => {

    const [listdata,setListdata] = useState([])

    const deleteproduct = async(id) => {
        try {
            const res = await fetch("http://localhost:4001/api/admin/deletesingleitem",
                {
                    method:"DELETE",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body:JSON.stringify({id})

                }
            ) 

            const data = await res.json();
            if (data.success){
                const nextListdata1 = data.data6
                setListdata(nextListdata1)
            }
            else{
                console.log(data.message);
                
            }
        } catch (error) {
            console.log(error.message);
            
        }
    }

    useEffect(()=>{

        const fetchData = async() => {
            try {
                const res = await fetch("http://localhost:4001/api/admin/all2",{
                    method:"GET",
                    headers:{
                        "Content-Type":"application/json"
                    },
                }) 

                const data = await res.json()

                if (data.success) {
                    const nextListdata = data.data4
                    setListdata(nextListdata)
    
                }
                else{
                    console.log(data.message);
                    
                }

            } catch (error) {
                console.log(error.message);
                
            }
    }
    fetchData()
    },[triggerkey])

//you can use item.image[0] directly only beacuse you have used cloudinary otherwise you have to use the something like src={`http://localhost:4001/uploads/${item.image[0]}`}
  return (
    <div>
        <div className='text-3xl text-center font-bold mt-10 mb-10'>
            All Listed Products
        </div>
        
        <div className='grid grid-cols-[1fr_3fr_2fr_1fr_1fr] text-center text-2xl font-bold border-b-black border-b-3 border-t-balck border-t-3 pb-4 pt-4'>
            <p>Image</p>
            <p>Name</p>
            <p>Category</p>
            <p>Price</p>
            <p>Action</p>
        </div>

        {listdata.map((item)=> (
            <div className='grid grid-cols-[1fr_3fr_2fr_1fr_1fr] text-center border-b-black border-b-2 pb-5 pt-5 text-2xl '>
                
                <div className='flex justify-center'>
                    <img className="h-28 w-25 rounded-xl border border-black" src={item.image[0]} alt="" />
                </div>
                <p className='flex flex-col justify-center'>{item.name}</p>
                <p className='flex flex-col justify-center'>{item.category}</p>
                <p className='flex flex-col justify-center'>{item.price}</p>
                <p className='flex flex-col justify-center cursor-pointer text-2xl' onClick={() => deleteproduct(item._id)}>X</p>
            </div>
        ))}
    </div>
  )
}

export default List