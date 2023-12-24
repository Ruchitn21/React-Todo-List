import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function form() {

    const [title,setTitle]= useState("");
    const [desc,setDesc] = useState("");
    const [mainTask,setMainTask]= useState([]);

    const notify = () =>{
      toast.success('Task Added Successfully', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }

    const deleteNotify = ()=>{
      toast.error('Task Removed Successfully', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }

    const submitHandler = (e)=>{
        e.preventDefault();

        setMainTask([...mainTask,{title, desc}]);
        
        setTitle("");
        setDesc("");

        console.log(mainTask);
        notify();
    }

    const deleteHandler= (i)=>{
        let copyTask = [...mainTask]
    
        copyTask.splice(i,1);
        setMainTask(copyTask)
        deleteNotify();
      }
    
      let renderTask = "No Task Available";
    
      if (mainTask.length>0)
      {
        renderTask = mainTask.map((t,i)=>{
          return(
            <li key={i} className='flex items-center justify-between'>
              <div className='flex justify-between mb-5 w-2/3'>
                <h5 className='text-xl font-semibold'>{i+1}</h5>
                <h5 className='text-2xl font-semibold'>{t.title}</h5>
                <h6 className='text-xl font-semibold'>{t.desc}</h6>
    
                <button onClick={()=>{
                deleteHandler(i)}}
                className='bg-red-600 text-white font-bold px-3 rounded'>Delete</button>
              </div>
            </li>
          
        )});
      }
      

    return (
        <>
            <form>
                <input type="text" onChange={(e)=>{
                // console.log(e.target.value);
                setTitle(e.target.value);
                }} className='text-2xl border-zinc-800 border-4 m-4 px-4 py-2'
                placeholder="Enter Task Here"
                value={title}></input>

                <input type="text" onChange={(e)=>{
                setDesc(e.target.value);
                }}
                className='text-2xl border-zinc-800 border-4 px-4 m-4 py-2'
                placeholder='Enter Task Description' value={desc}></input>

                <button onClick={submitHandler}
                className='bg-green-500 p-3 mx-8 text-white font-bold text-xl rounded'>Add Task</button>
            </form>

            <br />
            <div className='p-8 bg-slate-200'>
                <ul>
                {renderTask}
                </ul>
            </div>
                </>
    );
}

export default form;