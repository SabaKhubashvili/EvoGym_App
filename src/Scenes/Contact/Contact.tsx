import React from 'react'
import { contactData, message, SelectedPage } from '../../Shared/types'
import { motion } from 'framer-motion'
import Htext from '../../Shared/Htext'
import ActionButton from '../../Shared/ActionButton'
import ContactUsPageGraphic from '../../assets/images/ContactUsPageGraphic.png'


interface Props{
    setSelectedPage: (value:SelectedPage)=>void
}

const Contact = ({setSelectedPage}:Props) => {

    const [formData,setFormData] = React.useState<contactData>({
        name:'',
        email:'',
        message:''
    });


    const [Message,setMessage] = React.useState<message>({
        value:'',
        type:''
    })

    const formStyle = `py-4 mb-6 bg-primary-500 placeholder-white px-5 rounded-md text-white `

    function handleSubmit(e:React.FormEvent<HTMLFormElement>)  {
        e.preventDefault()

        if(!formData.name || !formData.email || !formData.message){
            return setMessage({
                value:'Every Field Is Required',
                type:'error'
            })
        }else{
            setMessage({
                value:'succesfully Sent Message',
                type:'success'
            });
            
        }
    }

    function handleChange(e:React.ChangeEvent<HTMLInputElement>){
        const {name,value,type,checked} = e.target

        setFormData((prevData)=>({
                ...prevData,
                [name]:value
            }))
        
    }
  
    

  return (
    <section id='contactus' className='mx-auto w-5/6 pt-24 pb-32'>
        <motion.div onViewportEnter={()=>{setSelectedPage(SelectedPage.ContactUs)}}>
            <div >
            {/* Header */}
                <Htext><span className='text-primary-500' >Join Now</span> {" "} To Get In Shape</Htext>
            
            <p className='my-5'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo laoreet
             urna, ut fringilla dui malesuada in. Aenean auctor arcu vitae blandit consequat. 
             Vivamus interdum scelerisque elit quis tincidunt. Morbi et tristique mi, 
            vitae tempus quam. Phasellus luctus arcu et metus semper tristique. Nunc 
            facilisis sem et luctus bibendum. Donec.
            </p>
            </div>
            {/* Form And Image */}

            <div className="mt-10 justify-between md:flex">
                <div className='my-10 basis-3/5 md:mt-0' data-aos='fade-down'>
                    {/* Form */}
                    <form className='flex flex-col' onSubmit={handleSubmit}>
                        <input type="text"  onChange={handleChange} value={formData.name} name='name' className={formStyle} placeholder='NAME' />
                        <input type="email" onChange={handleChange} value={formData.email}  name='email' className={formStyle} placeholder='EMAIL' />
                        <input type="text" onChange={handleChange} value={formData.message}  name='message' className={`${formStyle} h-80`} placeholder='MESSAGE' />
                        
                        {Message.value &&
                        <div className={`w-full my-5 py-4 px-6 rounded-md ${Message.type == 'error' ? 'bg-red-600 text-white' : 'bg-green-600 text-white'} `} >
                            {/* Error Message */}
                            &#x2022; {Message.value}
                        </div>
                        }
                        <div className="mt-4">
                            <button className='bg-secondary-500 py-4 px-10 rounded-md cursor-pointer'>Submit</button>                         
                        </div>
                    </form>
                </div>

                <div className=' mt-10 md:mt-0  md:ml-10 flex mx-auto basis-2/5 md:h-full justify-center items-center w-3/4'  data-aos='fade-up'>
                    {/* Image */}
                    <img src={ContactUsPageGraphic} className='w-full' alt="" />
                </div>
            
            </div>
        </motion.div>
    </section>
  )
}

export default Contact