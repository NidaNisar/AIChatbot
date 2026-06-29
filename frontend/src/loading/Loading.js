
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import{ React,useState,useEffect} from 'react';
import './loading.css'

const Loading = ({load}) => {
    const [progress, setProgress] =useState(0);
     useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);
  if(load){
  return (
    <div className='loadingg'>
       
 <Stack spacing={2} direction="row">
      
      <CircularProgress
        variant="determinate"
        value={progress}
        aria-label="Export data"
      />
    </Stack>
  
    </div>
  );
}
}

export default Loading;

