import React from 'react'

const Update = () => {

    const updateall = async(e) => {
        try {
            const res = await fetch("http://localhost:4001/api/admin/patch",
                {
                    method:"PATCH",
                    headers:{
                        "Content-Type":"application/json"
                    },
                }
            )

            const data = await res.json()

            if (data.success){
                console.log("updated");
                
                console.log(data.data6);
                
            }
            else{
                console.log(data.message);
                
            }
            

        } catch (error) {

            console.log(error.message);
            
        }

    }
  return (
    <div className='h-10 w-30 bg-black text-white flex flex-row justify-center items-center text-2xl border rounded-xl cursor-pointer' onClick={updateall}>Update</div>
  )
}

export default Update