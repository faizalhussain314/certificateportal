import React, { useState } from 'react'
import Breadcrumb from '../Breadcrumb'

function NewEntry() {

    const [FormData,getFormData] = useState();

  const Vechile = [{
    vechiclemake: "DAIMLER INDIA COMMERCIAL VEHICLE"
  },
{
  vechiclemake:"ASHOK LEYLAND "
},
{
  vechiclemake:"ASIA MOTORS"
},
{
  vechiclemake:"GENERAL MOTORS"
},
{
  vechiclemake:"HINDUSTAN MOTORS"
},
{
  vechiclemake:"HONDA"
},
{
  vechiclemake:"HYUNDAI"
},
{
  vechiclemake:"MARUTI SUZUKI"
},
{
  vechiclemake:"RENAULT"
},
{
  vechiclemake:"NISSAN"
}];

const Rto = 
   [
      { regno: "TN01", area: "CHENNAI (CENTRAL)" },
      { regno: "TN02", area: "CHENNAI(NORTH-WEST)" },
      { regno: "TN03", area: "CHENNAI(NORTH EAST)" },
      { regno: "TN04", area: "CHENNAI(EAST)" },
      { regno: "TN05", area: "CHENNAI(NORTH)" },
      { regno: "TN06", area: "CHENNAI(SOUTH-EAST)" },
      { regno: "TN07", area: "RTO CHENNAI(SOUTH)" },
      { regno: "TN09", area: "CHENNAI (WEST)" },
      { regno: "TN10", area: "CHENNAI(SOUTH-WEST)" },
      { regno: "TN11", area: "TAMBARAM" },
      { regno: "TN12", area: "POONAMALLE" },
      { regno: "TN13", area: "AMBATTUR" },
      { regno: "TN14", area: "SHOLINGANALLUR" },
      { regno: "TN15", area: "ULUNDURPET" },
      { regno: "TN15Z", area: "KALLAKURICHI" },
      { regno: "TN16", area: "TINDIVANAM" },
      { regno: "TN16Z", area: "GINGEE" },
      { regno: "TN18", area: "REDHILLS" },
      { regno: "TN18Y", area: "GUMIDIPOONDI" },
      { regno: "TN19", area: "CHENGALPATTU" },
      { regno: "TN19Z", area: "MADURANTAKAM" },
      { regno: "TN20", area: "THIRUTHANI" },
      { regno: "TN21", area: "KANCHEEPURAM" },
      { regno: "TN21W", area: "SRIPERUMBUDUR" },
      { regno: "TN22", area: "MEENAMBAKKAM" },
      { regno: "TN23", area: "Vellore RTO" },
      { regno: "TN23T", area: "GUDIYATHAM" },
      { regno: "TN24", area: "KRISHNAGIRI" },
      { regno: "TN25", area: "TIRUVANNAMALAI" },
      { regno: "TN25Y", area: "CHEYYAR" },
      { regno: "TN25Z", area: "ARANI" },
      { regno: "TN28", area: "NAMAKKAL (NORTH)" },
      { regno: "TN28Z", area: "RASIPURAM" },
      { regno: "TN29", area: "DHARMAPURI" },
      { regno: "TN29W", area: "PALACODE" },
      { regno: "TN29Z", area: "HARUR" },
      { regno: "TN30", area: "SALEM(WEST)" },
      { regno: "TN30W", area: "OMALUR" },
      { regno: "TN31", area: "CUDDALORE" },
      { regno: "TN31Z", area: "PANRUTI" },
      { regno: "TN32", area: "VILLUPURAM" },
      { regno: "TN33", area: "ERODE-EAST" },
      { regno: "TN34", area: "TIRUCHENCODE" },
      { regno: "TN36", area: "GOBICHETTIPALAYAM" },
      { regno: "TN36W", area: "BHAVANI" },
      { regno: "TN36Z", area: "SATHIYAMANGALAM" },
      { regno: "TN37", area: "COIMBATORE(SOUTH)" },
      { regno: "TN38", area: "COIMBATORE-NORTH" },
      { regno: "TN39", area: "TIRUPPUR(NORTH)" },
      { regno: "TN39Z", area: "AVINASHI" },
      { regno: "TN40", area: "METTUPALAYAM" },
      { regno: "TN41", area: "VALPARAI" },
      { regno: "TN41W", area: "OOTY" },
      { regno: "TN42", area: "SULUR" },
      { regno: "TN42Y", area: "UTHAMAPALAYAM" },
      { regno: "TN43", area: "ARIYALUR" },
      { regno: "TN43Z", area: "SIVAGANGA" },
      { regno: "TN45", area: "RAMANATHPURAM" },
      { regno: "TN45Z", area: "KARAIKUDI" },
      { regno: "TN46", area: "HOSUR" },
      { regno: "TN47", area: "TIRUNELVELI" },
      { regno: "TN47X", area: "UNIT OFFICE - VALLIOOR" },
      { regno: "TN47Y", area: "KANGAYAM" },
      { regno: "TN47Z", area: "ARANTHANGI" },
      { regno: "TN48", area: "THANJAVUR" },
      { regno: "TN48X", area: "PATTUKOTTAI" },
      { regno: "TN48Y", area: "UO LALGUDI" },
      { regno: "TN48Z", area: "PERUNDURAI" },
      { regno: "TN49", area: "DHARAPURAM" },
      { regno: "TN49Y", area: "ATTUR" },
      { regno: "TN50", area: "UDUMALPET" },
      { regno: "TN50Y", area: "VALAPADI" },
      { regno: "TN50Z", area: "ARAKONAM" },
      { regno: "TN51", area: "NAGERCOIL" },
      { regno: "TN52", area: "THIRUVER"}
    
  ]

  return (
    <>
    <Breadcrumb pageName='New Entry' />
    <div className='w-full bg-white'>
        
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
              <div className=''>
            <h6>RED 20mm : 744.40 MtrsWhite 20mm : 557.10MtrsRED 50mm : 2349.50Mtrs White 50mm : 2071.85MtrsYellow 50mm : 8576.50Mtrs RED 80mm: 0.00White 80mm: 0.00</h6>
        </div>
              </h3>
            </div>
            <form action="#">
              <div className="p-6.5">
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                    Date
                    </label>
                    <input
                      type="date"
                      placeholder="Enter your first name"
                      
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>

                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                    Vehicle Reg No 
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Vehicle Reg No"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>
                </div>
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                    Vehicle Manufacturing Year
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Vehicle Manufacturing Year"
                      
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>

                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                    Chassis No 
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Chassis No"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>
                </div>

                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                   Engine No : <span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your Engine No"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>
                <div className="mb-4.5">
                <label className="mb-3 block text-black dark:text-white">
                  Vechicle Make :
                </label>
                <div className="relative z-20 bg-white dark:bg-form-input">
                  <span className="absolute top-1/2 left-4 z-30 -translate-y-1/2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
</svg>

                  </span>
                  <select className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-12 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input">
                    
                    {
                      Vechile.map((vechicle)=>
                      <option value={vechicle.vechiclemake}>{vechicle.vechiclemake}</option>
                      )
                    }
                  </select>
                  <span className="absolute top-1/2 right-4 z-10 -translate-y-1/2">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.8">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                          fill="#637381"
                        ></path>
                      </g>
                    </svg>
                  </span>
                </div>
              </div>

              <div className="mb-4.5">
                <label className="mb-3 block text-black dark:text-white">
                  Vechicle Make :
                </label>
                <div className="relative z-20 bg-white dark:bg-form-input">
                  <span className="absolute top-1/2 left-4 z-30 -translate-y-1/2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
</svg>

                  </span>
                  <select className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-12 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input">
                    
                    {
                      Vechile.map((vechicle)=>
                      <option value={vechicle.vechiclemake}>{vechicle.vechiclemake}</option>
                      )
                    }
                  </select>
                  <span className="absolute top-1/2 right-4 z-10 -translate-y-1/2">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.8">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                          fill="#637381"
                        ></path>
                      </g>
                    </svg>
                  </span>
                </div>
              </div>

                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                   Owner Name 
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Owner Name"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>

                <div className="mb-6">
                  <label className="mb-2.5 block text-black dark:text-white">
                  Address :
                  </label>
                  <textarea
                    rows={6}
                    placeholder="Enter your Address"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  ></textarea>
                </div>

                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                  Phone No : 
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Phone No"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>

                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    RTO:
                  </label>
                  <div className="relative z-20 bg-transparent dark:bg-form-input">
                    <select className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
                      <option value="">Select Your RTO</option>
                      {Rto.map((rto)=>
                        <option value={rto.regno}>{rto.regno} - {rto.area}</option>
                      )}
                    </select>
                    <span className="absolute top-1/2 right-4 z-30 -translate-y-1/2">
                      <svg
                        className="fill-current"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.8">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                            fill=""
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </div>
                </div>
          
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                  Hologram Number: 
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Hologram Number"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>

               <div>
                <div><h3 className='text-black font-bold mt-8'>Old Certificate Details (Optional)</h3></div>
                <div>
                <div className="mb-4.5 mt-4">
                  <label className="mb-2.5 block text-black dark:text-white">
                  Old Certificate Number : 
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Hologram Number"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>
                
                </div>
               </div>
               <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    RTO:
                  </label>
                  <div className="relative z-20 bg-transparent dark:bg-form-input">
                    <select className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
                      <option value="">Select Your RTO</option>
                      {Rto.map((rto)=>
                        <option value={rto.regno}>{rto.regno} - {rto.area}</option>
                      )}
                    </select>
                    <span className="absolute top-1/2 right-4 z-30 -translate-y-1/2">
                      <svg
                        className="fill-current"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.8">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                            fill=""
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="mb-4.5 w-full">
                  <div className="w-full ">
                    <label className="mb-2.5 block text-black dark:text-white">
                    Date
                    </label>
                    <input
                      type="date"
                      placeholder="Enter your first name"
                      
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>

                  <div className="w-full mt-4.5">
                    <label className="mb-2.5 block text-black dark:text-white">
                    Remarks :
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Vehicle Reg No"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>
                </div>
                
                <div className='flex justify-items-center items-center w-full'><h3 className='text-black font-bold mt-8 text-center'>Reflective Tape Details</h3></div>
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row mt-4">
                  <div className="w-full xl:w-1/2">
                  <div className='flex items-center w-80 gap-4'>
                    <label className="mb-2.5 shrink-0  text-black dark:text-white inline-block">
                      RED 20MM :
                    </label>
                    <input
                      type="text area"
                      placeholder="Enter your first name"
                      value={"0.00"}
                      className="w-full cursor-not-allowed rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary  disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                    </div>
                  </div>

                  <div className="w-full xl:w-1/2">
                  <div className='flex items-center w-80 gap-4'>
                    <label className="mb-2.5 shrink-0  text-black dark:text-white inline-block">
                    White 20MM :
                    </label>
                    <input
                      type="text area"
                      placeholder="Enter your first name"
                      value={"0.00"}
                      className="w-full cursor-not-allowed bg-black-500 rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary  disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                    </div>
                  </div>
                </div>
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row mt-4">
                  <div className="w-full xl:w-1/2">
                  <div className='flex items-center w-80 gap-4'>
                    <label className="mb-2.5 shrink-0  text-black dark:text-white inline-block">
                       RED 50MM :
                    </label>
                    <input
                      type="text area"
                      placeholder="Enter your first name"
                      value={"2.00"}
                      className="w-full cursor-not-allowed rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary  disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                    </div>
                  </div>

                  <div className="w-full xl:w-1/2">
                  <div className='flex items-center w-80 gap-4'>
                    <label className="mb-2.5 shrink-0  text-black dark:text-white inline-block">
                    White 50MM :
                    </label>
                    <input
                      type="text area"
                      placeholder="Enter your first name"
                      value={"2.00"}
                      className="w-full cursor-not-allowed bg-black-500 rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary  disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                    </div>
                  </div>
                </div>



                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row mt-4">
                  <div className="w-full xl:w-1/2">
                  <div className='flex items-center w-80 gap-4'>
                    <label className="mb-2.5 shrink-0  text-black dark:text-white inline-block">
                    Yellow 50MM :
                    </label>
                    <input
                      type="text area"
                      placeholder="Enter your first name"
                      value={"20.00"}
                      className="w-full cursor-not-allowed rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary  disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                    </div>
                  </div>

                  <div className="w-full xl:w-1/2">
                  <div className='flex items-center w-80 gap-4'>
                    <label className="mb-2.5 shrink-0  text-black dark:text-white inline-block">
                    80MM RED Circular Reflector :
                    </label>
                    <input
                      type="text area"
                      placeholder="Enter your first name"
                      value={"0.00"}
                      className="w-full cursor-not-allowed bg-black-500 rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary  disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                    </div>
                  </div>
                </div>




                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row mt-4">
                  <div className="w-full xl:w-1/2">
                  <div className='flex items-center w-80 gap-4'>
                    <label className="mb-2.5 shrink-0  text-black dark:text-white inline-block">
                    80MM White Circular Reflector :
                    </label>
                    <input
                      type="text area"
                      placeholder="Enter your first name"
                      value={"0.00"}
                      className="w-full cursor-not-allowed rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary  disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                    </div>
                  </div>

                  <div className="w-full xl:w-1/2">
                  <div className='flex items-center w-80 gap-4'>
                    <label className="mb-2.5 shrink-0  text-black dark:text-white inline-block">
                    80MM Yellow Circular Reflector :
                    </label>
                    <input
                      type="text area"
                      placeholder="Enter your first name"
                      value={"0.00"}
                      className="w-full cursor-not-allowed bg-black-500 rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary  disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                    </div>
                  </div>
                </div>



                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row mt-4">
                  <div className="w-full xl:w-1/2">
                  <div className='flex items-center w-80 gap-4'>
                    <label className="mb-2.5 shrink-0  text-black dark:text-white inline-block">
                    Class 3:
                    </label>
                    <input
                      type="text area"
                      placeholder="Enter your first name"
                      value={"0"}
                      className="w-full cursor-not-allowed rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary  disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                    </div>
                  </div>

                  <div className="w-full xl:w-1/2">
                  <div className='flex items-center w-80 gap-4'>
                    <label className="mb-2.5 shrink-0  text-black dark:text-white inline-block">
                    Class 4 :
                    </label>
                    <input
                      type="text area"
                      placeholder="Enter your first name"
                      value={"0"}
                      className="w-full cursor-not-allowed bg-black-500 rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary  disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                    </div>
                  </div>
                </div>

  <div className='flex justify-items-center items-center w-full'><h3 className='text-black font-bold mt-4 text-center'>Reflective Tape Details</h3></div>
  <div className="rounded-sm mt-4 border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            
            <div className="flex flex-col gap-5.5 p-6.5">
              

              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Front Image
                </label>
                <input
                  type="file"
                  className="w-full rounded-md border border-stroke p-3 outline-none transition file:mr-4 file:rounded file:border-[0.5px] file:border-stroke file:bg-[#EEEEEE] file:py-1 file:px-2.5 file:text-sm file:font-medium focus:border-primary file:focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-strokedark dark:file:bg-white/30 dark:file:text-white"
                />
              </div>

              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Back Side Image
                </label>
                <input
                  type="file"
                  className="w-full rounded-md border border-stroke p-3 outline-none transition file:mr-4 file:rounded file:border-[0.5px] file:border-stroke file:bg-[#EEEEEE] file:py-1 file:px-2.5 file:text-sm file:font-medium focus:border-primary file:focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-strokedark dark:file:bg-white/30 dark:file:text-white"
                />
              </div>

              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Right Side Image
                </label>
                <input
                  type="file"
                  className="w-full rounded-md border border-stroke p-3 outline-none transition file:mr-4 file:rounded file:border-[0.5px] file:border-stroke file:bg-[#EEEEEE] file:py-1 file:px-2.5 file:text-sm file:font-medium focus:border-primary file:focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-strokedark dark:file:bg-white/30 dark:file:text-white"
                />
              </div>

              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Left Side Image
                </label>
                <input
                  type="file"
                  className="w-full rounded-md border border-stroke p-3 outline-none transition file:mr-4 file:rounded file:border-[0.5px] file:border-stroke file:bg-[#EEEEEE] file:py-1 file:px-2.5 file:text-sm file:font-medium focus:border-primary file:focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-strokedark dark:file:bg-white/30 dark:file:text-white"
                />
              </div>
            </div>
          </div>

                <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
                  Submit
                </button>
              </div>
            </form>
          </div>
    </div>

    </>
  )
}

export default NewEntry