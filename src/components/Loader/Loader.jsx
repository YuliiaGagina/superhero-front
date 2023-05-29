import {RotatingLines } from 'react-loader-spinner'
import css from './Loader.module.css';


export const Loader = () =>{
    return(
        <div style={{ position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.1)',}}>
            <RotatingLines wrapperClassName={css.loader}
           
  strokeColor="grey"
  strokeWidth="5"
  animationDuration="0.75"
  width="96"
  visible={true}
  wrapperStyle={{ position: 'absolute',
  top: '50%',
  left: '50%',
  transform:  'translate(-50%, -50%)',}}
/>

        </div>
    )
}