import React from 'react'
import DeleteIcon from '../assets/trash-03.png'
import EditIcon from '../assets/edit-02.png'
import {Info,data,company} from '../Constants/Constants'
import Logo from '../assets/Rectangle43.png'
import FigmaLogo from'../assets/figma.png'
import AdobeLogo from '../assets/adobe.png'
import XDLogo from '../assets/xd.png'
import SalaryLogo from '../assets/coins.png'
import LocationLogo from '../assets/location.png'
import EyeLogo from '../assets/eye.png'
import UsersLogo from '../assets/users.png'
import UserLogo from '../assets/user.png'
import MsgLogo from '../assets/msg.png'


 

const Hero = () => {
  return (
    <div>
        <div className='h-8 md:h-16 '>
            <div className='flex items-center h-[100%] text-sm md:text-xl' >
                <ul className='list-none flex justify-evenly w-[100%] md:w-[50%] '>
                <li className='text-[#DC4A2D]'>Job Preview</li>
                <li>Applicants</li>
                <li>Match</li>
                <li>Messages</li>
                </ul>
                <ul><div class="w-[95%] mx-auto border-t-[0.2px] border-gray-400 mt-4 mb-2"></div></ul>
            </div>
        </div>
        <div class="w-[5vw] ml-[6vw] border-t-[0.2px] border-[#DC4A2D] mb-2"></div>
        <hr/>
        <div className='flex flex-col md:flex-row h-[80vh]'>
            <div className='w-full lg:w-[80%] min-h-[180vh] md:min-h-[120vh] pl-[66px] pt-[40px] '>
                <div>
                    <div className='flex lg:gap-10'>
                        <p className="lg:text-5xl text-3xl gap-5 font-semibold mb-2">{data.Position}</p>
                        <p className='mt-4'>posted 2 days ago</p>
                        <div className='mt-4 text-[#DC4A2D] border-[#DC4A2D]'>{data.IsOpen}</div>
                    </div>
                    <div className='flex gap-10 mt-4 mb-4'>
                        <p className='flex gap-2 '> <img src={LocationLogo}/>{data.Location}</p>
                        <p className='flex gap-2 '> <img src={SalaryLogo}/>{data.Salary}</p>
                    </div>
                </div>
                <div class="w-[100%] mx-auto border-t-[0.2px] border-gray-300 mt-4 mb-2"></div>
                <div className='flex flex-col md:flex-row md:gap-10' >
                    <div className='flex flex-col' >
                        <p>Skills Required</p>
                        <ul>
                            <li className='flex gap-2 border-[1px] mt-1 mb-1'><img src={FigmaLogo}/> Figma</li>
                            <li className='flex gap-2 border-[1px]  mb-1'><img src={AdobeLogo}/> Adobe Illustrator</li>
                            <li className='flex gap-2 border-[1px]  mb-1'><img src={XDLogo}/> Adobe XD</li>
                        </ul>
                    </div>
                    
                    <div className='flex flex-col'>
                        <p>Preferred Language</p>
                        <p className="font-semibold">{data.Language}</p>
                    </div>
                    <div className='flex flex-col'>
                        <p>Type</p>
                        <p className="font-semibold">{data.Type}</p>
                    </div>
                    <div className='flex flex-col'>
                        <p>Years Of Experience</p>
                       <p className="font-semibold"> {data.Yoe}</p>
                    </div>
                </div>
                <div class="w-[100%] mx-auto border-t-[0.2px] border-gray-300 mt-4 mb-2"></div>
                <div className="mt-4">
                        <h3 >About the Job:</h3>
                        <ul className="list-disc pl-6 mt-2">
                        {data.AboutJob.map((item, index) => (
                            <li className='list-decimal' key={index}>{item}</li>
                        ))}
                        </ul>
                    </div> 
                    <h3 >Benefits:</h3>
                    <ul className="list-disc pl-6 mt-2 mb-2">
                    {data.Benefits.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                    </ul>
                    <p>Schedule :
                        <br/>
                         {data.Schedule}</p>
                    <h3 >Supplementary Pay Types:</h3>
                        <ul className="list-disc pl-6 mt-2 mb-2">
                        {data.SupplementaryPayTypes.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                        </ul>
                        <p>Work Location : {data.WorkLocation}</p>
                <div class="w-[100%] mx-auto border-t-[0.2px] border-gray-300 mt-4 mb-2"></div>
                <div className=' w-[60%] '>
                  <div className='flex gap-5'>
                   <img src={Logo}/>
                   <p className='mt-2'>{company.Name} </p>
                  </div>  
                  <div className='flex justify-between mt-7'>
                    <div>
                        <p>Company size</p>
                        <p className="font-medium">{company.CompanySize}</p>
                    </div>
                    <div>
                        <p>Type</p>
                        <p className="font-medium">{company.Type}</p>
                    </div>
                  </div>
                  <div className='flex justify-between  mt-7'>
                    <div>
                        <p>Sector</p>
                        <p className="font-medium">{company.Sector}</p>
                    </div>
                    <div>
                        <p className='ml-[2.5rem]'>Funding</p>
                        <p className="font-medium">{company.Funding}</p>
                    </div>
                  </div>
                  <div className='flex justify-between  mt-7'>
                    <div >
                        <p>Founded In</p>
                        <p className="font-medium">{company.FoundedIn}</p>
                    </div>
                    <div>
                        <p className='ml-[11rem]'>Founded By</p>
                        <p className="font-medium">{company.FoundedBy}</p>
                    </div>
                  </div>
                </div>              
            </div>
            <div className='w-full min-w-[350px] lg:w-[20%] min-h-[60vh]  md:min-h-[120vh] p-10'>
            <div className="flex space-x-4">
            <button className="flex items-center  text-[#DC4A2D] rounded-xl px-4 py-2 border-[1px] hover:bg-gray-500 border-[#DC4A2D]">
                <img src={DeleteIcon} alt="Delete" className="w-4 h-4 mr-2" />
                Delete Job
            </button>
            <button className="flex items-center bg-[#DC4A2D] text-white rounded-xl px-4 py-2 hover:bg-blue-600 focus:outline-none">
                <img src={EditIcon} alt="Edit" className="w-4 h-4 mr-2" />
                Edit Job
            </button>
            </div>
                <div className='mt-10'>
                  <div className='flex justify-between'>
                    <div  className='flex gap-2 '> <img src={UsersLogo}/>Applicants </div>
                    <div className='font-bold'>{Info.Applicants}</div>
                  </div>
                  <div class="w-[95%] mx-auto border-t-[0.2px] border-gray-400 mt-4 mb-4"></div>
                  <div  className='flex justify-between'>
                  <div  className='flex gap-2 '> <img src={UserLogo}/>Matches</div>
                  <div className='font-bold'>{Info.Matches}</div>
                  </div>
                  <div class="w-[95%] mx-auto border-t-[0.2px] border-gray-400 mt-4 mb-4"></div>
                  <div  className='flex justify-between'>
                  <div  className='flex gap-2 '> <img src={MsgLogo}/>Messages</div>
                  <div className='font-bold'> {Info.Messages}</div>
                  </div>
                  <div class="w-[95%] mx-auto border-t-[0.2px] border-gray-400 mt-4 mb-4"></div>
                  <div  className='flex justify-between'>
                  <div  className='flex gap-2 '> <img src={EyeLogo}/>Views</div>
                  <div className='font-bold'>{Info.Views}</div>
                  </div>
                </div>
            </div>
            </div>
    </div>
  )
}

export default Hero