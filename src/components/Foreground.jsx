import React, { useRef } from 'react'
import Cards from './Cards'

function Foreground() {

    const ref=useRef(null);

    const data=[
        {
            desc: " ipsum dolor sit amet consectetur adipisicing elit. Dolorem sunt libero, exercitationem est error iste.", 
            filesize:".4mb",
            close:false,
            tag:{isOpen: true, tagTitle:"hellodocs.", tagColor:"blue"},

        },
        {
            desc: " ipsum dolor sit amet consectetur adipisicing elit. Dolorem sunt libero, exercitationem est error iste.", 
            filesize:".9mb",
            close:true,
            tag:{isOpen: true, tagTitle:"Uploading", tagColor:"green"},

        },
        {
            desc: " ipsum dolor sit amet consectetur adipisicing elit. Dolorem sunt libero, exercitationem est error iste.", 
            filesize:".14mb",
            close:false,
            tag:{isOpen: false, tagTitle:"Download Now", tagColor:"green"},

        },
    ];
    return (
        <>
            <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
                {data.map((item,index)=>(
                    <Cards data={item} reference={ref}/>
                ))}
            </div>
        </>
    )
}

export default Foreground