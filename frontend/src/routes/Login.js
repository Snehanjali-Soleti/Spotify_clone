import { Icon } from '@iconify/react';
import Textinput from '../components/shared/Textinput';
import { Passwordinput } from '../components/shared/Passwordinput';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { makeUnauthenticatedPOSTRequest } from '../utils/serverHelper';


const LoginComponent = () =>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cookie, setCookie] = useCookies("");
    const navigateTo = useNavigate();

    const login = async ()=>{
        const data = {email, password};
        const response = await makeUnauthenticatedPOSTRequest(
            "/auth/login",
            data
        );
        if( response && !response.err){
            // console.log(response);
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
        <div className="w-full h-screen flex flex-col items-center p-6 bg-black">
            <div className='w-full flex flex-col items-center'>
            <Icon icon="logos:spotify-icon" width={40}/>
                <div className=' pt-4 pb-4 text-[2rem] font-bold text-white'> Log in to Spotify </div>
                <div className='inputRegion w-[400px] pt-9 pb-9 text-white'>
                    {/* input email and password */}
                    <Textinput label="Email or username" placeholder="Email or username" value={email} setvalue={setEmail}/>
                    <Passwordinput label="Password" placeholder="Password" value={password} setvalue={setPassword} />
                    <button className='w-full p-3 bg-[#1cd85e] font-bold rounded-[50px] text-[1rem] text-black' 
                        onClick={(e)=>{
                            e.preventDefault();
                            login();
                        }}>
                        Log In
                    </button>
                </div>
                <div className='font-bold pb-4 text-white'>Don't have an account?</div>
                <button className='border border-white w-[400px] rounded-[50px] p-3  text-gray-200 font-semibold'>
                        <Link to="/signup">SIGN UP FOR SPOTIFY</Link>
                </button>
            </div>
        
        </div>
    );
        
}

export default LoginComponent;