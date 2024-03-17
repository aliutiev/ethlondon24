'use client'
import React, { useState } from 'react';
import { Button } from '@/components/Button';

const existingLimits = {
  daily: 100,
  weekly: 500,
  monthly: 2000,
};

const Dashboard = () => {

  const transactions = [
    {
      date: '2023-03-01',
      hash: '0x123...abc',
      amount: -50,
      merchant: 'NFTee-hee T-Shirts',
    },
    {
      date: '2023-03-02',
      hash: '0x456...def',
      amount: 300,
      merchant: 'CryptoCoffee Beans',
    },
    {
      date: '2023-03-03',
      hash: '0x789...ghi',
      amount: -100,
      merchant: 'Blocky Balloons',
    },
    {
      date: '2023-03-04',
      hash: '0xabc...def',
      amount: 150,
      merchant: 'Decentralized Doughnuts',
    },
    {
      date: '2023-03-05',
      hash: '0xdef...ghi',
      amount: -75,
      merchant: 'EtherEats Fast Food',
    },
  ];

  const [selectedSource, setSelectedSource] = useState('');
  const [showCryptoOptions, setShowCryptoOptions] = useState(false);

  const handleSourceChange = (event: { target: { value: any; }; }) => {
    const source = event.target.value;
    setSelectedSource(source);
    setShowCryptoOptions(source === 'Crypto Wallet');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="mx-auto bg-white shadow-lg rounded-lg p-6 space-y-6 ml-20 mr-20">

        <h2 className="text-2xl font-bold text-center mb-6">Gnosis Safe Pay Card Management</h2>

        <div className="grid grid-cols-2 gap-20 mr-10 ml-10 mb-20">
          {/* Card 1: Safe Balance Information */}
          <div className="card bg-white shadow-lg rounded-lg p-6 space-y-4">
            <h3 className="text-lg font-semibold">Safe Balance Information</h3>
            <div className="flex justify-between items-center">
              <p>Safe Balance: $1,234.56</p>
              <div className="flex items-center space-x-2">
                <Button className="btn btn-primary">Add Liquidity</Button>
                <Button className="btn btn-primary">Remove Liquidity</Button>
              </div>
            </div>
            <div className="flex justify-between">
              <p>Available Debit: $500</p>
              <Button className="btn btn-primary">Swap Pool</Button>
            </div>
            <p>Staking Crypto: 2 ETH</p>
            <p className="font-semibold">Current Yield: <span className="text-green-500">5%</span></p>
          </div>



          {/* Card 2: Security Settings */}
          <div className="card bg-white shadow-lg rounded-lg p-6 space-y-4">
            <h3 className="text-lg font-semibold">Security Settings</h3>
            <div className="form-control flex items-center">
              <label className="cursor-pointer">
                <span className="label-text mr-2">Lock Card</span>
                <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                  <input type="checkbox" className="toggle toggle-primary absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" />
                  <label className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                </div>
                <span className="text-gray-500">Locked</span>
              </label>
            </div>

            <Button className="btn btn-primary rounded-lg mt-4 mr-10">Change PIN</Button>
            <Button className="btn btn-primary rounded-lg mt-4">Set up 2FA</Button>
          </div>
        </div>


        <div className="grid grid-cols-2 gap-20 mr-10 ml-10">
          {/* Card 1: Top-Up Your Card */}
          <div className="card bg-white shadow-lg rounded-lg p-6 space-y-4 p-20">
            <h3 className="text-lg font-semibold">Top-Up Your Card</h3>
            <input type="number" className="input border rounded-lg" placeholder="Enter amount" />
            <select className="select select-bordered w-full rounded-lg" onChange={handleSourceChange}>
              <option disabled selected>Select funding source</option>
              <option value="Crypto Wallet">Crypto Wallet</option>
              <option value="Bank Account">Bank Account</option>
            </select>
            {showCryptoOptions && (
              <select className="select select-bordered w-full mt-2 rounded-lg">
                <option disabled selected>Select cryptocurrency</option>
                <option value="BTC">Bitcoin (BTC)</option>
                <option value="ETH">Ethereum (ETH)</option>
                <option value="xDAI">xDAI</option>
              </select>
            )}
            <Button className="btn btn-primary pl-5 pr-5">Top up</Button>

          </div>

          <div className="card bg-white shadow-lg rounded-lg p-6 space-y-4 p-20">
            <h3 className="text-lg font-semibold">Set Spending Limits</h3>

            {Object.entries(existingLimits).map(([limitType, value]) => (
              <div key={limitType} className="flex items-center space-x-2 justify-between">
                <h3 className="font-semibold capitalize text-left">{`${limitType} Limit:`}</h3>
                <input
                  type="number"
                  className="input rounded-lg text-right"
                  defaultValue={value}
                  placeholder={`New ${limitType} limit`}
                />
              </div>
            ))}

            <Button className="btn btn-primary pl-5 pr-5">Save Limits</Button>

          </div>


          <div className="card bg-white shadow-lg rounded-lg p-6 col-span-2 space-y-4 p-20">
            <h3 className="text-lg font-semibold">Transaction History</h3>
            <div className="overflow-x-auto">
              <table className="table-auto w-full text-left">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Hash</th>
                    <th>Amount</th>
                    <th>Merchant</th>
                    <th>Reference</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((transaction, index) => (
                    <tr key={index}>
                      <td>{transaction.date}</td>
                      <td>{transaction.hash}</td>
                      <td className={transaction.amount >= 0 ? 'text-green-500' : 'text-red-500'}>
                        {transaction.amount >= 0 ? `+ $${transaction.amount}` : `- $${Math.abs(transaction.amount)}`}
                      </td>
                      <td>{transaction.merchant}</td>
                      <td><a href="#" className="link">View</a></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Button className="btn btn-primary">Load More</Button>
          </div>





        </div>
      </div>
    </div >
  );
};

export default Dashboard;
