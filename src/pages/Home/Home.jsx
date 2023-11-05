import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import 'react-toastify/dist/ReactToastify.css';
import sprite from '../../components/Pictures/sprite.svg';
import { ToastContainer, toast } from 'react-toastify';
import {
  DivBoxContact,
  DivContainer,
  DivMap,
  DivBoxContactTel,
  DivTextNav,
  DivListNav,
  SectionContact,
  SectionMap,
  SectionNav,
  SectionPhoto,
  SectionSlider,
} from './Home.styled';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const copyText = e => {
    navigator.clipboard
      .writeText(e.target.textContent)
      .then(() => {
        toast('Phone copied!');
      })
      .catch(err => {
        console.log('Something went wrong', err);
      });
  };
  let navigate = useNavigate();

  return (
    <div>
      <SectionPhoto>
        <h1>CAR RENT</h1>
      </SectionPhoto>
      <SectionNav>
        <DivContainer>
          <DivTextNav>
            <div>
              <h1>WHY SHOULD YOU CONTACT?</h1>
            </div>
            <p>
              Our showroom was opened in September 2010, but today it is already
              one of the leaders in the car market. Our team is trying with all
              its might to improve the quality of customer service, speed up
              delivery, control the quality of cars sold, and expand the
              assortment. Thanks to this, we have a wide range of regular
              customers throughout Ukraine.
            </p>
          </DivTextNav>
          <DivListNav>
            <li href={`#contact`}>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <svg width={150} height={150}>
                  <use href={sprite + `#contact`}></use>
                </svg>
              </Link>
            </li>
            <li onClick={() => navigate('car-list')}>
              <svg width={150} height={150}>
                <use href={sprite + `#list`}></use>
              </svg>
            </li>
            <li onClick={() => navigate('favorite')}>
              <svg width={150} height={150}>
                <use href={sprite + `#likebig`}></use>
              </svg>
            </li>
          </DivListNav>
        </DivContainer>
      </SectionNav>
      <SectionSlider>
        <h1>There should be a slider here, there is no ego yet... </h1>
      </SectionSlider>
      <SectionMap>
        <DivContainer>
          <DivMap
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <iframe
              title="This is a unique title"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2585.923397025346!2d34.5265463!3d49.59919399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d82601f3347a5f%3A0x36f3f9aeec44a6a!2z0LLRg9C70LjRhtGPINCc0LDRgNGI0LDQu9CwINCR0ZbRgNGO0LfQvtCy0LAsIDE1LCDQn9C-0LvRgtCw0LLQsCwg0J_QvtC70YLQsNCy0YHRjNC60LAg0L7QsdC70LDRgdGC0YwsINCj0LrRgNCw0ZfQvdCwLCAzNjAwMA!5e0!3m2!1suk!2sde!4v1676137902068!5m2!1suk!2sde"
              width="100%"
              height="100%"
              // style="border: 0"
              allowFullScreen=""
              loading="lazy"
              rel="noopener noreferrer"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </DivMap>
        </DivContainer>
      </SectionMap>
      <SectionContact>
        <DivContainer>
          <DivBoxContact title="contact" id={`contact`}>
            <div>
              <h3>WORK SCHEDULE</h3>
              <p>Summer period </p>
              <p>Mon-Sat from 9:00 a.m. to 7:00 p.m </p>
              <p>Sun. from 9:00 a.m. to 5:00 p.m </p>
              <p>Winter period </p>
              <p>Mon-Sat from 9:00 a.m. to 5:00 p.m</p>
              <p>Sun. from 9:00 a.m. to 4:00 p.m</p>
            </div>
            <div>
              <h3>CONTACTS</h3>
              <DivBoxContactTel>
                <a href="mailto:fake.mail@fake.com">fake.mail@fake.com</a>
                <p onClick={copyText}>+380730000000 </p>
                <p onClick={copyText}>+380730000000 </p>
              </DivBoxContactTel>
            </div>
          </DivBoxContact>
        </DivContainer>
      </SectionContact>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default Home;
