import React,{ useState } from 'react';
import {useCookies} from 'react-cookie';
import { Icon } from '@iconify/react';
import Textinput from '../components/shared/Textinput';
import Textinput2 from '../components/shared/Textinput2';
import { Passwordinput } from '../components/shared/Passwordinput';
import { Link, useNavigate } from 'react-router-dom';
import { makeUnauthenticatedPOSTRequest } from '../utils/serverHelper';

const SignUpComponent =  () =>{
    const [email, setEmail] = useState("");
    const [confirmemail, setconfirmEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [firstname, setFistname] = useState("");
    const [lastname, setLastname] = useState("");
    const [cookie, setCookie] = useCookies(["token"]);
    
    const navigateTo = useNavigate();

    const signup = async ()=>{
        if(email !== confirmemail){
            alert("recheck your email and confirmemail");
            return;
        }
        const data = {email, username, password, firstname, lastname};
        const response = await makeUnauthenticatedPOSTRequest(
            "/auth/register",
            data
        );
        if( response && !response.err){
            //console.log(response);
            const token = response.token;
            const date = new Date();
            date.setDate(date.getDate()+30);
            setCookie("token", token, {path: "/", expires: date}); // here path at / => every cookie has it
            navigateTo("/home");
        }
        else{
            alert("failure");
        }
    }


    return (
        <div className="w-full   flex flex-col items-center p-6 bg-black">
            <div className='w-full flex flex-col items-center text-white'>
            <Icon icon="logos:spotify-icon" width={40}/>
                <div className=' pt-4 text-[2.9rem] font-bold'> Sign up to start  </div>
                <div className='pb-4 text-[2.9rem] font-bold'>listening </div>
                <div className='inputRegion w-[400px] pt-9 pb-9'>
                    {/* input email and password */}
                    <Textinput label="Email address" placeholder="name@domain.com" value={email} setvalue={setEmail} />
                    <Textinput label="Confirm Email address" placeholder="Enter your email again" value={confirmemail} setvalue={setconfirmEmail} />
                    <Passwordinput label="Create Password" placeholder="Enter a strong password here" value={password} setvalue={setPassword} />
                    <Textinput2 label="Userame" desc="This name will appear on your profile" value={username} setvalue={setUsername}/>
                    <Textinput2 label="First Name" desc="" value={firstname} setvalue={setFistname}/>
                    <Textinput2 label="Last Name" desc="" value={lastname} setvalue={setLastname}/>
                       <button className='w-full p-3 bg-[#1cd85e] font-bold rounded-[50px] text-[1rem] text-black'
                            onClick={(e)=>{
                                e.preventDefault();
                                signup();
                            }}> 
                            Sign Up
                        </button>
                </div>
                <div className='font-bold pb-4'>Already have an account?</div>
                <Link to='/login'>
                    <button className='border border-white w-[400px] rounded-[50px] p-3 text-gray-400 font-semibold mt-2 mb-10'>
                            LOG IN INSTEAD
                    </button>
                </Link>
            </div>
        
        </div>
    );
        
}

export default SignUpComponent;