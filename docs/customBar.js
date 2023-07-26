import DocCard from '@theme/DocCard';
import React from 'react';


const CustomComponent = () => {

  const data = [
    {
      type: 'category',
      // collapsed:false,
      // collapsible:true,
      description:'dsadsadsa',
      items: [],
      href:'/authorization-and-verification/sign-in',

      label: 'Kekis'
    },
    {
      type: 'link',
      // collapsed:false,
      // collapsible:false,
      description:'dsadsadsa',
      items: [],
      href:'dsadsas',

      label: 'Kekis'
    },
    {
      type: 'link',
      // collapsed:false,
      // collapsible:false,
      description:'dsadsadsa',
      items: [],
      href:'dsadsas',

      label: 'Kekis'
    },
  ]
  return (
      <div style={{display:"flex", flexDirection:'row', flexWrap:'wrap', width:'100%', gap:'20px', marginBottom:'20px'}}>
        {data.map((item) => (
          <div style={{width:'45%', flex:'1 auto'}}>
            <DocCard  item={item}/>
          </div>
        ))}
      </div>
    )
}

export default CustomComponent