import React from "react";
import { Link } from "react-router-dom";
import aboutimg from "../assets/images/2-2.png";
import './about.css'

export default function About() {
  return (
    <>
    {/* // <!--main section starts--> */}
    <section>
        <div class="main-container">
            <div class="main-wrap">
                <div class="special">
                    <h1 class="main-heading">The Mission behind <span class="main-edu">Edumindz</span></h1>
                    <p class="main-para">At Edumindz, we are committed to providing high-quality education to students worldwide. Our mission is to empower learners of all ages with the knowledge and skills they need to succeed in their personal and professional lives. By offering a diverse range of courses taught by world-class teachers and fostering a vibrant global student community, we strive to make education accessible, engaging, and transformative for everyone.</p>
                </div>
            </div>
        </div>
    </section>
    {/* <!--main section ends--> */}

    {/* // <!--students section starts--> */}
    <section class="stu-section">
        <div class="main-wraper">
            <div class="main-stu">
                <div class="achievements-wrapper">
                    <div class="achievement-wrapper">
                        <div class="achievement-number">7,000<span class="font-color-primary">+</span></div>
                        <div class="achievement-category">STUDENTS</div>
                    </div>
                    <div class="spacer achievement"></div>
                    <div class="achievement-wrapper">
                        <div class="achievement-number">100<span class="font-color-primary">+</span></div>
                        <div class="achievement-category">COURSES</div>
                    </div>
                    <div class="spacer achievement"></div>
                    <div class="achievement-wrapper">
                        <div class="achievement-number">800<span class="font-color-primary">+</span></div>
                        <div class="achievement-category">5-STAR REVIEWS</div>
                    </div>
                    <div class="spacer achievement"></div>
                    <div class="achievement-wrapper">
                        <div class="achievement-number">35<span class="font-color-primary">+</span></div>
                        <div class="achievement-category">teachers</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* // <!--students section ends--> */}

    {/* // <!--story section starts--> */}

    <section class="story-section">
        <h1 class="heading">Our story</h1>
            <div class="main-story">
                <div class="story-content">
                    <p class="s-heading"><strong>Tracing our footsteps: Our journey so far</strong></p>
                    <p class="s-content">Edumindz was founded in 2022 by a group of passionate educators who wanted to make quality education accessible to students across the globe. The team recognized the need for a platform that provided personalized learning experiences to students, and set out to create just that. Since then, Edumindz has grown into a thriving edtech platform, empowering students and teachers alike through innovative technology and world-class education. Today, we continue to strive towards our mission of transforming the way education is delivered and received, making learning accessible to all.</p>
                </div>
                <div>
                    <img src={aboutimg} alt="about us" width="600"/>
                </div>
            </div>
    </section>
    {/* <!--story swction starts--> */}
    </>
  );
}
