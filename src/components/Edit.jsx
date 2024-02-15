import React,{ useState,useContext,useEffect } from 'react'
import {useNavigate,useParams} from 'react-router-dom'
import { NotesDataContext } from './context/NotesContext'
function Edit() {
 
    const params = useParams()
    const {data,setData} = useContext(NotesDataContext)
    let [title,setTitle] = useState("")
    let [des,setDes] = useState("")
    let navigate=useNavigate()

    const getData= (index)=>{
        setTitle(data[index].title)
        setDes(data [index].des)
    }

    useEffect(()=>{
        if(Number(params.id)<data.length)
        {
            getData(Number(params.id))
        }
        else{
          navigate ('/note')
        }
    },[])

    const handleEdit = ()=>{
        let newArray = [...data]
        newArray.splice(Number(params.id),1,{
            title,
            des
        })
        setData(newArray)
        navigate('/note')
    }


  return (
<>
<div id='container-fluid'>
        
<div className='addnote bg-white '>
       <div className='input'>
        <h3 className='top1'> Add a Note</h3>
       <input className='title' type="text" placeholder='Title' value={title} onChange={(e)=>{setTitle(e.target.value)}} />
        <textarea className="form" id="exampleFormControlTextarea1" value={des} placeholder='Take a note...' rows="3" onChange={(e)=>setDes(e.target.value)} ></textarea>

       </div>
       <span className='btn btn-primary mt-2 ' onClick={()=>handleEdit()}> Add Notes</span>

      </div>
      </div>
</>
  )
}

export default Edit