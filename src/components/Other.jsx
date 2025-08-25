import React from 'react'

const Other = ({name}) => {
    // it is used to send data from parent to child
    //console.log(props)
    // console.log(p.data1.age)
    // console.log(p.data2)
  return (
    // <div className='other'>
    //     <h1>Welcome {data.name? data.name: "User"} </h1>
    //     <h4 style={{color:"blue"}} >Congrays you turned <span style={{color:"red"}}>{data.age}</span></h4>
    //     <p>Lorem ipsum dolor, sit amet consur vero commodi suscipit voluptatum quisquam ex.</p>
    // </div>

//Conditional  rendering
    // <div className='other'>
    //   {name? <div><h1>Welcome {name.name? name.name: "User"}</h1>
    //   <h4 style={{color:"blue"}} >Congrays you turned <span style={{color:"red"}}>{data.age}</span></h4>
    //   <p>Lorem ipsum dolor, sit amet consur vero commodi suscipit voluptatum quisquam ex.</p></div> :<h1>Welcome user</h1>}
    // </div>

    //3rd way of conditional redering
    <> 
    {name && <div className='other'>
      <div>

        <h4 style={{color:"blue"}} >Congrays you turned <span style={{color:"red"}}>{data.age}</span></h4>
        <p>Lorem ipsum dolor, sit amet consur vero commodi suscipit voluptatum quisquam ex.</p>
      </div>

     </div>}
    </>
     
  )
}

export default Other