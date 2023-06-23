"use client"; // This is a client component 

import * as React from "react";
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { NavBar } from "@/components/navbar/navbar";

export default function Create() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    control,
    formState: {
      errors,
      isSubmitting,
    }
  } = useForm({
    defaultValues: {
      "team": ""
    }
  });
  const onSubmit = async (data: any) => {
    console.log(data);
    try {
      const response = await axios.post('/api/team', data);      
      router.push('./list');
    } catch (error) {
      console.error(error);
      alert("error")
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      
      <NavBar></NavBar>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Create Team</h1>
        
        <div className="mb-6">
          <label>
            <span className="label">Team</span>
            <input
              {...register("team", {
                required: "Please fill in this field.",
                minLength: {
                  value: 3,
                  message: "Please lengthen this text to more."
                },
                maxLength: {
                  value: 20,
                  message: "Please reduce this text to less."
                },
              })}
              aria-invalid={errors["team"] ? "true" : "false"}
              type="text"
              className="input"
            />
          </label>
          {errors["team"] && <p role="alert">{errors["team"]?.message}</p>}
        </div>

        <button className="btn" disabled={isSubmitting}>Gotta Catch 'Em All</button>
      </form>
    </main>
  );
}











/*
import { useState } from 'react'

export default function About() {
  const [input, setInput] = useState('')

  const subscribe = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch('./api/team', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          text: input
        })
      })
      
      if (res.status === 200) {
        alert('Team created')
      } else {
        alert('Sorry, something went wrong.')
      }
    } catch(err) {
      alert(err)
    }
  }


  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">

      <h1 className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30" >CREATE NEW TEAM</h1>
      <form className='flex'>
        <input className='dark:bg-gray-800 bg-gray-200 shadow-inner rounded-l p-2 flex-1' id='text' type='text' aria-label='Create new Team' placeholder='Enter name' value={input} onChange={e => setInput(e.target.value)} />
        <button className='dark:bg-blue-900 bg-blue-600 hover:bg-blue-700 duration-300 text-white shadow p-2 rounded-r' type='submit' onClick={subscribe}>
          Gotta Catch 'Em All
        </button>
      </form>
    </main>
  )
}*/