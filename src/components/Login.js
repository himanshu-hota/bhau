import React,{useRef,useEffect,useState} from 'react';
import classes from './Login.module.css';
import video1 from '../media/video1.mp4';
import video2 from '../media/video2.mp4';
import Form from './Form';
import Video from './Video';
// import video2 from '../media/video2.mp4';

const Login = () => {

    const [wrongPassword, setWrongPassword,] = useState(false);
    const [correctPassword, setCorrectPassword] = useState(false);
    // 
    const videoEl = useRef(null);

    const attemptPlay = () => {
        videoEl &&
            videoEl.current &&
            videoEl.current.play().catch(error => {
                console.error("Error attempting to play", error);
            });
    };

    useEffect(() => {
        if (wrongPassword){
            attemptPlay();
            setTimeout(() => {
                setWrongPassword(false);
            },12000)
        }
        
        if (correctPassword) {
            attemptPlay();
            setTimeout(() => {
                setCorrectPassword(false);
            }, 1500)
        }


    }, [wrongPassword,correctPassword]);

    // 

    const email = useRef();
    const password = useRef();

    const submitHandler = (event) => {
        event.preventDefault();
        const userEmail = email.current.value;
        const userPass = password.current.value;
        if(userEmail === 'username' && userPass === 'pass'){
            setWrongPassword(false);
            setCorrectPassword(true);
        }else{
            setCorrectPassword(false);
            setWrongPassword(true);
        }
        
    }

    return (
        <div className={`${classes.container} `}>
            <Form submit={submitHandler} email={email} password={password} />
            {wrongPassword && <Video src={video1} refs={videoEl} />}
            {correctPassword && <Video src={video2} refs={videoEl} />}
        </div>
    )
}



export default Login;


