import React, { useState } from 'react'

import logo from '../images/book_PNG2113.png'
const Todo=()=>{
    const [inputData,setInputData]=useState('')
    const [items,setItems]=useState([]);
    const removeitem=(id)=>{
     
        const newItems=items.filter((elm,idx)=>{
return idx!==id
        })
        setItems(newItems)
    }
    return(
            <>
            <div className="main-div">
                <div className='child-div'>
                    <figure>
                      <img src={logo} alt='logo'/> 
                      <figcaption>Add Your Tasks Here</figcaption>                 
                       </figure>
                       <div className='addItems'>
                           <input type='text' placeholder='Add tash here....'
                           value={inputData}
                           onChange={(e)=>{setInputData(e.target.value)}}
                           />
                           <i class="fa fa-plus add-btn" title='Add item' 
                           onClick={(e)=>{if(!inputData){

                           }
                           else{
                               setItems([...items,inputData])
                               setInputData('')
                               console.log(items)
                            }
                        }}
                           ></i>
                       </div>

                    <div className='showItems'>
                       
                            r{
                                items.map((elem,index)=>{
                                 return( 
                                    <div className='eachItem'>
                                    <h3 key={index}>{elem}</h3>
                                    <i class="fas fa-trash-alt add-btn" title='Delete item'
                                    onClick={()=>{removeitem(index)}}
                                    ></i> 
                                    </div>
                                )})

                            }
                            
                            
                           
                        
                    </div>

                    <div className="showItems">
                        <button className="btn effect04" data-sm-link-text='Remove All' onClick={()=>{
                                        setItems([])}}><span>List</span></button>

                    </div>
                </div>

            </div>
            </>
    );

}
export default Todo;