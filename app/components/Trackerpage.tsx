"use client"
import { ChangeEventHandler, useState } from "react";
import axios from "axios";
import SingleLog from "./SingleLog";
import { useRouter } from "next/navigation";

const Trackerpage = () => {
    const [topic, setTopic] = useState("");
    const [timeFrom, setTimefrom] = useState("");
    const [timeTo, setTimeto] = useState("");
    const [subtopic, setSubtopic] = useState("");
    const [hours, setHours] = useState("");
    const router = useRouter();

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-900 text-white">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-blue-400 md:text-5xl lg:text-6xl">Study Tracker</h1>
      <div className="flex flex-col md:flex-row">
        <div className="mr-4">
            <LabelledInput label={"Topic"} placeholder="Enter Time" type="text" onChange={(e) => setTopic(e.target.value)}/>
        </div>
        <div className="mr-4">
            <LabelledInput label={"Time From"} placeholder="Enter Time" type="text" onChange={(e) => setTimefrom(e.target.value)}/>
        </div>
        <div className="mr-4">
            <LabelledInput label={"Time To"} placeholder="Enter Time" type="text" onChange={(e) => setTimeto(e.target.value)}/>
        </div>

        <div className="mr-4">
            <LabelledInput label={"Subtopic"} placeholder="Enter Time" type="text" onChange={(e) => setSubtopic(e.target.value)}/>
        </div>
        <div>
            <LabelledInput label={"Hours Studied"} placeholder="Enter Time" type="text" onChange={(e) => setHours(e.target.value)}/>
        </div>
      </div>
      <div>
      <button onClick={async() => {
        await axios.post("http://localhost:3000/api/user", {
            topic,
            timeFrom,
            timeTo,
            subtopic,
            hours
        })
        router.push("logs/")
      }} type="submit" className="m-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Submit
    </button>
      </div>
    </div>
  );

  
  <SingleLog />


};



function LabelledInput({ label, placeholder, type, onChange}: LabelledInputType){
    return <div>
        <label className="text-gray-400">{label}</label>
        <input onChange={onChange} type={type || "text"} className="w-full px-3 py-2 mt-2 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:border-blue-500" />
    </div>
}


interface LabelledInputType {
    label: string;
    placeholder: string;
    type?: string;
    onChange: ChangeEventHandler<HTMLInputElement>
}
export default Trackerpage;
