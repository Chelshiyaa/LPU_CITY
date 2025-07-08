import React, { useRef } from 'react'
import './Testimonials.css'
import next from '../../assets/next.png'
import back from '../../assets/back.png'
import test1 from '../../assets/test1.png'
import test2 from '../../assets/test2.png'
import test3 from '../../assets/test3.png'
import test4 from '../../assets/test4.png'
import test5 from '../../assets/test5.png'
const Testimonials = () => {

    const slider = useRef();
    let tx=0;
    const slideForward = () => {
        if(tx>-50){
            tx-=20.2;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    const slideBackward = () => {
       if(tx<0){
        tx+=20.2;
       }
       slider.current.style.transform = `translateX(${tx}%)`;
    }


  return (
    <div className='testimonials'>
        <img src={back} alt="" className='back-btn' onClick={slideBackward}/>
        <img src={next} alt="" className='next-btn' onClick={slideForward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={test1} alt="" />
                            <div>
                                <h3>Sri Saravana Vishnu</h3>
                                <samp>Lpu,Punjab</samp>
                            </div>
                        </div>
                        <p>This university has given me countless opportunities to grow both academically and personally. The faculty here is not just knowledgeable but also very supportive, always encouraging us to do our best. The modern infrastructure and access to top-notch labs make learning even more exciting.</p>
                    </div>
                </li>
                 <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={test2} alt="" />
                            <div>
                                <h3>Sanjay Gandhi</h3>
                                <samp>Lpu,Punjab</samp>
                            </div>
                        </div>
                        <p>Choosing this university was the best decision of my life. The environment is vibrant, inclusive, and filled with creative energy. Events, workshops, and industrial visits help us stay ahead in practical knowledge. It truly prepares us for the future, not just with degrees, but with confidence and experience.</p>
                    </div>
                </li>
                 <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={test3} alt="" />
                            <div>
                                <h3>William Jackson</h3>
                                <samp>Lpu,Punjab</samp>
                            </div>
                        </div>
                        <p>What sets my university apart is its dedication to student success. From mentorship programs to career counseling, everything is designed to help us shine. The lush green campus and peaceful atmosphere also make it a perfect place to study and grow. I’ve learned more here than I ever expected.</p>
                    </div>
                </li>
                 <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={test4} alt="" />
                            <div>
                                <h3>William Jackson</h3>
                                <samp>Lpu,Punjab</samp>
                            </div>
                        </div>
                        <p>I love how my university promotes innovation and leadership. Whether it's hackathons, cultural fests, or entrepreneurship cells, there’s always something happening. The professors are approachable and always willing to guide us. It feels more like a family than just an institution.</p>
                    </div>
                </li>
                 <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={test5} alt="" />
                            <div>
                                <h3>William Jackson</h3>
                                <samp>Lpu,Punjab</samp>
                            </div>
                        </div>
                        <p>Being a student here has been a transformative journey. The curriculum is designed with a perfect balance of theory and practical application. What I appreciate most is how it constantly adapts to the needs of the industry. I truly believe this university is shaping us to be future leaders.</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials