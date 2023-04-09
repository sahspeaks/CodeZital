import React from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import './style.css'
import hero from '../assets/images/hero.jpeg'
import meta from '../assets/images/meta.png'
import apple from '../assets/images/apple.png'
import amazon from '../assets/images/amazon.png'
import netflix from '../assets/images/netflix.png'
import google from '../assets/images/google.png'
import about from '../assets/images/about.jpg'
import user1 from '../assets/images/user1.png'
import user2 from '../assets/images/user2.png'
import user3 from '../assets/images/user3.png'
import wct from '../assets/images/wct.png'
import tnc from '../assets/images/tnc.png'
import gsc from '../assets/images/gsc.png'
import oom from '../assets/images/oom.png'
import contactImg from '../assets/images/contact-img.jpeg'

import { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch,useSelector} from "react-redux";
import { newsletter } from "../redux/actions/user";




export default function Home({ user }) {
  const dispatch = useDispatch();
  const {loading,message} = useSelector(state=>state.user)

  const [email, setEmail] = useState("");

  const submitHandler = async(e) => {
    e.preventDefault();

    await dispatch(newsletter(email));
    if(message){
      toast.success(message)
    }
  };

  return (
    <>
      {/* <!-- home section starts  --> */}

      <section className="home" id="home" data-aos="fade-in">

        <div className="content">
          <h1>Grow your skills</h1>
          <h1 className="sub-head">define your future</h1>
          <p>Presenting <strong><span id="first">Edu</span><span id="last">mindz</span></strong>, the tech school of the future. We teach you the right skills to be prepared for tomorrow.</p>
          <Link to="/courses" className="btn">Our courses</Link>
          <Link to="/about" className="btn2">About us</Link>
        </div>

        <div className="image">
          <img src={hero} alt="Teaching" width="800px" />
        </div>

      </section>

      {/* <!-- home section ends --> */}

      {/* <!-- features/ section starts  --> */}

      <section className="features" id="features">

        <h4 className="heading" data-aos="fade-in"> OUR STUDENTS WORK IN COMPANIES SUCH AS </h4>

        <div className="box-container">
          <div className="company-logo" data-aos="fade-in"><img src={meta} alt="meta" /></div>
          <div className="company-logo" data-aos="fade-in"><img src={apple} alt="apple" /></div>
          <div className="company-logo" data-aos="fade-in"><img src={amazon} alt="amazon" /></div>
          <div className="company-logo" data-aos="fade-in"><img src={netflix} alt="netflix" /></div>
          <div className="company-logo" data-aos="fade-in"><img src={google} alt="google" /></div>

        </div>

      </section>

      {/* <!-- features section ends --> */}

      {/* <!-- about section starts  --> */}

      <section className="about" id="about">

        <h1 className="heading"> about Edumindz </h1>

        <div className="column">

          <div className="image">
            <img src={about} alt="about-us" />
          </div>

          <div className="content">
            <h3>Revolutionize learning with Edumindz - an all-in-one platform for personalized education and advanced analytics.</h3>
            <p>Edumindz is a comprehensive edtech platform that offers a wide range of features to enhance the learning experience for students of all ages. Our platform includes interactive video lectures, virtual classrooms, online assessments, and personalized learning paths to cater to the unique needs of each student. Our user-friendly interface allows for easy navigation and seamless integration with existing learning management systems. Edumindz also provides tools for educators to monitor student progress and identify areas for improvement. With Edumindz, students can learn at their own pace and achieve their full potential.</p>
            <div className="buttons">
              <Link to="/about" className="btn">Learn More</Link>
            </div>
          </div>

        </div>

      </section>

      {/* <!-- about section ends --> */}

      {/* <!-- newsletter  --> */}

      <div className="newsletter" data-aos="fade-in">

        <h3>Join our newsletter</h3>
        <p>Stay up-to-date with the latest trends and news in education by subscribing to our newsletter. Join now and never miss an update!</p>
        <form onSubmit={submitHandler}>
        <input
            className=""
            type="email"
            
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="abc@gmail.com"
          />
          <input type="submit" value="Subscribe"/>
        </form>

      </div>

      {/* <!-- review section starts  --> */}

      <section className="review" id="review">

        <h1 className="heading"> people's review </h1>

        <div className="box-container">

          <div className="box">
            <i className="fas fa-quote-right"></i>
            <div className="user">
              <img src={user1} alt="" />
              <h3>john deo</h3>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <div className="comment">
                I love the interactive games and quizzes on this site. They make learning so much more fun than just reading a textbook. And the community aspect is great too, I've met some really cool people through this website.
              </div>
            </div>
          </div>

          <div className="box">
            <i className="fas fa-quote-right"></i>
            <div className="user">
              <img src={user2} alt="" />
              <h3>john deo</h3>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <div className="comment">
                This website has helped me to develop my skills and knowledge in ways I never thought possible. The personalized learning system has helped me to identify my weaknesses and focus on improving them. I highly recommend this site to anyone who wants to take their learning to the next level.
              </div>
            </div>
          </div>

          <div className="box">
            <i className="fas fa-quote-right"></i>
            <div className="user">
              <img src={user3} alt="" />
              <h3>john deo</h3>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>
              <div className="comment">
                I can't believe all the resources on this website are free! It's really helped me to save money on materials. The reward-based learning system is a nice touch too, it makes me feel like I'm making progress towards my goals.
              </div>
            </div>
          </div>

        </div>

      </section>

      {/* <!-- review section ends --> */}

      {/* <!--Why learning with us starts--> */}

      <section className="learning-with-us">
        <h1 className="heading">Why learning with us?</h1>
        <div className="box-container">
          <div className="box1">
            <div className="box1-content">
              <img src={wct} alt="world class teacher" className="imgs" />
              <div className="main-content">
                <h2 className="heading2">World Class Teachers</h2>
                <p className="para">Our platform features world-class teachers who are passionate about their subjects and committed to helping students succeed. With their expertise and guidance, students can achieve their academic goals and unlock their full potential.</p>
              </div>
            </div>
            <div className="c-space"></div>
            <div className="box1-content">
              <img src={tnc} alt="top notch courses" className="imgs" />
              <div className="main-content">
                <h2 className="heading2">Top Notch Courses</h2>
                <p className="para">Our top-notch courses are designed and taught by industry experts to provide you with the latest knowledge and skills in your field. With a wide range of subjects and levels to choose from, you can advance your career or pursue a passion with confidence. Join us today to unlock your full potential.</p>
              </div>
            </div>
          </div>
          <div className="divider"></div>
          <div className="box2">
            <div className="box2-content">
              <img src={gsc} alt="global student community" className="imgs" />
              <div className="main-content">
                <h2 className="heading2">Global Student Community</h2>
                <p className="para">Join our global student community and connect with learners from around the world. Expand your horizons and gain a diverse perspective through collaboration and knowledge sharing.</p>
              </div>
            </div>
            <div className="c-space"></div>
            <div className="box2-content">
              <img src={oom} alt="one on one mentorship" className="imgs" />
              <div className="main-content">
                <h2 className="heading2">One-on-One Mentorship</h2>
                <p className="para">Our one-on-one mentorship provides personalized guidance and support to help you achieve your academic and career goals. Our experienced mentors offer tailored advice and feedback to help you succeed.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--Why learning with us ends--> */}

      {/* <!-- pricing section starts  --> */}

      <section className="courses" id="pricing" data-aos="zoom-in">

        <h1 className="heading"> Our Pricing Plans </h1>

        <div className="box-container">

          <div className="box">
            <h3 className="title"><span>standard</span></h3>
            <div className="price">$0<span>/monthly</span></div>
            <ul>
              <li> <i className="fas fa-check"></i> Free access to millions of educational resources </li>
              <li> <i className="fas fa-check"></i> Personalized learning paths and feedback </li>
              <li> <i className="fas fa-check"></i> Interactive games and quizzes for engagement </li>
              <li> <i className="fas fa-check"></i> Reward-based learning system </li>
              <li> <i className="fas fa-check"></i> Community-driven learning environment </li>
              <li> <i className="fas fa-check"></i> Mobile accessibility for flexibility and convenience </li>
              <li> <i className="fas fa-check"></i> Professional development opportunities for career advancement. </li>
            </ul>
            <Link to="/courses" className="btn_check">check out</Link>
          </div>

        </div>

      </section>

      {/* <!-- pricing section ends --> */}

      {/* <!-- contact section starts  --> */}

      
      {/* <!-- contact section edns --> */}

    </>
  );
}
