
"use client"
import { log } from 'console'
import React from 'react'
import { useState, useEffect } from 'react'

const index = () => {
// async function index() {  
    let output:string[] =[]

    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(true)
    console.log("staticData")

    const getData = async () => {
      let res = await fetch('http://127.0.0.1:3000/api/user/crud')
      let data = await res.json();
      // console.log("jsdfj",data);
      setData(data)
          setLoading(false)
    }
    useEffect(() => {
      getData();
    }, [])
    // console.log("jjfj",data)
  return (
    <>
    <h1 className='text text-4xl font-bold text-center'>List of All Movies</h1>
    <div className='flex flex-col gap-4 p-4 mx-auto'>
      {
        data && data?.map((elem: any, index: number) => {
           return (
            
            <div key={index} className='p-4 border border-gray rounded-xl'>
              <h1 className='text text-4xl font-bold'>{elem?.movieName}</h1>
              
              <p>{elem?._id}</p><br></br>
              <p>Description: {elem?.Description} </p>
              <p>ratings {elem?.rating}</p>
            </div>
           )
        })
      }

    </div>
    </>
  )
}

export default index
