import axios from "axios"
import { Key } from "react";


const SingleLog = async () => {

  async function getLogs() {
    try {
      // Send a GET request to the endpoint using axios
      const response = await axios.get("http://localhost:3000/api/user");
      
      // Return the data from the response
      return response.data;
  } catch (error) {
      // Handle any errors
      console.error('Error fetching data:', error);
      throw error; // Rethrow the error to be handled by the caller
  }
  }

  const logs = await getLogs();

  return (
    <>
      {logs.slice(-6).reverse().map((log: { id: Key | string | number;
      topic: string;
      timeFrom: string;
      subtopic: string;
      timeTo: string;
      hours: string
       })=> (
        <div key={log.id}>


<div className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-wrap">
  <div className="flex-1 bg-gray-800 rounded-lg p-6 mr-4 mb-4">
    <div className="text-indigo-500 font-semibold text-lg">Topic</div>
    <p className="mt-2 text-gray-300">{log.topic}</p>
  </div>
  <div className="flex-1 bg-gray-800 rounded-lg p-6 mr-4 mb-4">
    <div className="text-indigo-500 font-semibold text-lg">Time From</div>
    <p className="mt-2 text-gray-300">{log.timeFrom}</p>
  </div>
  <div className="flex-1 bg-gray-800 rounded-lg p-6 mr-4 mb-4">
    <div className="text-indigo-500 font-semibold text-lg">Time To</div>
    <p className="mt-2 text-gray-300">{log.timeTo}</p>
  </div>
  <div className="flex-1 bg-gray-800 rounded-lg p-6 mb-4">
    <div className="text-indigo-500 font-semibold text-lg">Subtopic</div>
    <p className="mt-2 text-gray-300">{log.subtopic}</p>
  </div>
</div>


</div>
 
      ))}
    </>
  )
}

export default SingleLog