import React from 'react';
import logo from '../logo.svg'

const Home = () => {
    return (
      <div className="App">
        <header className="App-header">
  
          <h1 className="text-5xl font-italic px-6 py-12">ROLL FOR INITIATIVE!</h1>
  
          <img src={logo} className="App-logo px-6 py-6" alt="logo" />
  
        <div class="px-6 py-12">

          <button class="bg-gray-700 hover:bg-gray-800 text-white font-italic py-2 px-6 rounded">
            Player Set Up
          </button>

        </div>
  
  
        <div class="relative overflow-x-auto">
  
        <h1 className="text-2xl font-italic px-6 py-3">Statistics</h1>
  
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
  
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Stat Type
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Player Name
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Best Roll
                        </th>
                        <td class="px-6 py-4">
                            Player 2
                        </td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Lowest Roll
                        </th>
                        <td class="px-6 py-4">
                            Player 4
                        </td>
                    </tr>
                    <tr class="bg-white dark:bg-gray-800">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Most times at top
                        </th>
                        <td class="px-6 py-4">
                            Player 3
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
  
        </header>
      </div>
    );
  }

  export default Home;