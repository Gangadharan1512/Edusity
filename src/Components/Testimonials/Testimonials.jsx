import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../edusity_assets/next-icon.png'
import back_icon from '../../edusity_assets/back-icon.png'
import user_1 from '../../edusity_assets/user-1.png'
import user_2 from '../../edusity_assets/user-2.png'
import user_3 from '../../edusity_assets/user-3.png'
import user_4 from '../../edusity_assets/user-4.png'


const Testimonials = () => {


    const slider = useRef();
    let tx = 0;

    const slideForward = () =>{
        if(tx>-50){
            tx-=25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }

    const slideBackward = () =>{
        if(tx<0){
            tx+=25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }



  return (
    <div className='testimonials'>
        <img src={next_icon} alt=""  className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <dir>
                                <h3>Ahish</h3>
                                <span>Google, USA</span>
                            </dir>
                        </div>
                        <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academics excellence have truly exceeded my expectations</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <dir>
                                <h3>Deepak</h3>
                                <span>Microsoft, USA</span>
                            </dir>
                        </div>
                        <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academics excellence have truly exceeded my expectations</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <dir>
                                <h3>Gangs</h3>
                                <span>Apple, USA</span>
                            </dir>
                        </div>
                        <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academics excellence have truly exceeded my expectations</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <dir>
                                <h3>Dhinesh</h3>
                                <span>Facebook, USA</span>
                            </dir>
                        </div>
                        <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academics excellence have truly exceeded my expectations</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials