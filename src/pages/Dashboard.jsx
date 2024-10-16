import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
<div className="flex flex-wrap justify-center items-center h-screen bg-white">
      <Link to="/pagina1" className="m-4 p-6 bg-yellow-500 text-black rounded-lg shadow-lg hover:bg-yellow-400 transition duration-300">
        Contenedor 1
      </Link>
      <Link to="/pagina2" className="m-4 p-6 bg-black text-white rounded-lg shadow-lg hover:bg-gray-800 transition duration-300">
        Contenedor 2
      </Link>
      <Link to="/pagina3" className="m-4 p-6 bg-white text-black rounded-lg shadow-lg hover:bg-gray-200 transition duration-300">
        Contenedor 3
      </Link>
      <Link to="/pagina4" className="m-4 p-6 bg-yellow-500 text-black rounded-lg shadow-lg hover:bg-yellow-400 transition duration-300">
        Contenedor 4
      </Link>
    </div>
  )
}

export default Dashboard