import './App.css'
import myphoto from "./img/my.jpeg";
import Typed from "typed.js";
import AOS from "aos";
import "aos/dist/aos.css";
import anime from 'animejs/lib/anime.es.js';  // Correct import for React
import 'boxicons'
import htmlicon from "./img/html5-02-svgrepo-com (1).svg";
import cssicon from "./img/css3-svgrepo-com.svg";
import jsicon from "./img/js01-svgrepo-com.svg";
import bootstrap from './img/bootstrap-svgrepo-com.svg';
import Jquery from "./img/jquery-svgrepo-com.svg";
import Mongo from "./img/mongodb-svgrepo-com.svg";
import node from "./img/node-16-svgrepo-com.svg";
import react from "./img/react-16-svgrepo-com.svg";
import reactNative from "./img/react-svgrepo-com.svg";
import assminpenal from './img/mypro.png';
import firstcry from './img/mypro2.png';
import jiocinema from './img/Screenshot 2024-04-22 at 3.23.49 PM 1.png';
import ecom from './img/React-ecom.png'
import calculator from './img/Screenshot 2024-06-10 at 8.21.04 AM.png'
import hemburger from './img/hamburger-svgrepo-com.svg'
import up from './img/up-2-svgrepo-com.svg'
import gmail from "./img/gmail-svgrepo-com (1).svg"
import guthub from "./img/github-svgrepo-com.svg"
import link from "./img/linkedin-svgrepo-com.svg"
import Resume from "./img/Resume.pdf"
import { useEffect, useState, useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import closeIcon from './img/closeIcon.svg'; // Import your close icon image

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Navigation } from 'swiper/modules';
function App() {

  useEffect(() => {
    const swiperSlides = document.querySelectorAll('.swiper-slide');

    if (swiperSlides.length > 0) {
      anime({
        targets: swiperSlides, // Target all swiper-slide elements
        translateY: [50, 0], // Slide up effect
        opacity: [1], // Fade in
        delay: anime.stagger(200), // Stagger the delay between slides
        duration: 1000,
        easing: 'easeOutExpo',
      });
    }

  }, []); // This runs once on component mount

  useEffect(() => {
    const handleScroll = () => {
      const columnleft = document.querySelectorAll(".columnleft");
      const columnright = document.querySelectorAll(".columnright");
      const triggerBottom = (window.innerHeight / 5) * 4; // Define the trigger position for the animation

      // For columnleft
      columnleft.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < triggerBottom) {
          section.classList.add("visible-left"); // Add visible-left to trigger animation
        } else {
          section.classList.remove("visible-left"); // Remove visible-left if not in viewport
        }
      });

      // For columnright
      columnright.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < triggerBottom) {
          section.classList.add("visible-right"); // Add visible-right to trigger animation
        } else {
          section.classList.remove("visible-right"); // Remove visible-right if not in viewport
        }
      });
    };

    // Add the scroll event listener
    document.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty array ensures this effect runs once on mount and unmount

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible'); // Add visibility class
        } else {
          entry.target.classList.remove('visible'); // Remove class when out of view
        }
      });
    }, { threshold: 0.5 });

    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);


  useEffect(() => {
    // Sticky Navbar and Scroll-Up Button
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      const scrollUpBtn = document.querySelector(".scroll-up-btn");

      if (window.scrollY > 100) {
        navbar?.classList.add("sticky");
      } else {
        navbar?.classList.remove("sticky");
      }

      if (window.scrollY > 500) {
        scrollUpBtn?.classList.add("show");
      } else {
        scrollUpBtn?.classList.remove("show");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Scroll Up Button Click
    const scrollUpBtn = document.querySelector(".scroll-up-btn");
    scrollUpBtn?.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    return () => {
      scrollUpBtn?.removeEventListener("click", () => { });
    };
  }, []);

  useEffect(() => {
    // Typed.js for Text Animation
    const typedOptions = {
      strings: [
        "Fullstack Developer",
        "Software Developer",
        "Problem Solver",
        "AI Enthusiast",
      ],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    };

    const typed1 = new Typed(".typing", typedOptions);
    const typed2 = new Typed(".typing-2", typedOptions);

    return () => {
      typed1.destroy();
      typed2.destroy();
    };
  }, []);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      offset: 200,
      once: false,
    });
  }, []);


  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu); // Toggle the state of showMenu
  };

  const menuRef = useRef(null);

  return (
    <>
      <div className="scroll-up-btn">
        <img src={up} alt="" width={25} height={40} name='up-arrow-alt' />
      </div>
      <nav className="navbar animate__animated animate__slideInDown">
        <div className="max-width">
          <div className="logo">
            <a href="#">Kashyap</a>
          </div>
          <ul
            className={`menu ${showMenu ? 'active' : ''}`}
            ref={menuRef}
          >
            <li>
              <a href="#home" className="menu-btn ">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="menu-btn">
                About
              </a>
            </li>
            <li>
              <a href="#Tech Stack" className="menu-btn">
                Tech Stack
              </a>
            </li>
            <li>
              <a href="#skills" className="menu-btn">
                Skills
              </a>
            </li>
            <li>
              <a href="#teams" className="menu-btn">
                My Project
              </a>
            </li>
            <li>
              <a href="#contact" className="menu-btn">
                Contact
              </a>
            </li>
            <li>
              <a href={Resume} className="menu-btn" target="_blank">
                Resume
              </a>
            </li>
          </ul>
          <div className="menu-btn" onClick={handleMenuToggle}>
            {showMenu ? (
              <img src={closeIcon} alt="Close" width={30} height={30} />
            ) : (
              <img src={hemburger} alt="Menu" width={30} height={30} />
            )}
          </div>
        </div>
      </nav>
      {/* home section start */}
      <section className="home" id="home">
        <div className="max-width">
          <div className="home-content animate__animated animate__slideInLeft">
            <div className="text">
              <div className="text-1 animate__animated animate__slideInLeft">
                Hello, My Name Is
              </div>
              <div className="text-2 animate__animated animate__slideInLeft">
                Kashyap Surani
              </div>
              <div className="text-3 animate__animated animate__slideInLeft">
                <span className="typing" />
              </div>
              <div className="display-flx animate__animated animate__slideInLeft">
                <a target="_blank" href="https://www.linkedin.com/in/kashyap-surani-1016b2296/">
                  <img src={link} alt="" className="bx bxl-linkedin animate__animated animate__slideInLeft" width={25} height={25} />

                </a>
                <a target="_blank" href="mailto:kashyapsurani49@gmail.com">
                  <img src={gmail} alt="" className="bx bxl-linkedin animate__animated animate__slideInLeft" width={25} height={25} />
                </a>
                <a target="_blank" href="https://github.com/Kashyapsurani">
                  <img src={guthub} alt="" className="bx bxl-linkedin animate__animated animate__slideInLeft" width={25} height={25} />

                </a>
              </div>
            </div>
          </div>
          <div className="image animate__animated animate__slideInRight">
            <img src={myphoto} alt="Kashyap Surani" width="100%" height="100%" />
          </div>
        </div>
      </section>


      {/* about section start */}
      <section className="about" id="about">
        <div className="max-width">
          <h2 className="title">About me</h2>
          <div className="about-content">
            <div className="column left columnleft">
              <img src={myphoto} alt="" width="100%" height="100%" />
            </div>
            <div className="column right columnright">
              <div className="text">
                <p>
                  I m Kashyap and I am <span className="typing-2" />
                </p>
              </div>
              <p>
                I am Kashyap Surani, a dedicated Full Stack Web Developer with
                expertise in HTML, CSS, JavaScript, Bootstrap, jQuery, React.js,
                Node.js, and Express.js. Passionate about crafting seamless digital
                experiences, I thrive on mastering new technologies and pushing
                boundaries in web development. With a keen eye for design and a
                knack for problem-solving, I specialize in building responsive,
                user-friendly applications that exceed expectations. Beyond coding,
                I enjoy staying updated on tech trends, seeking outdoor adventures,
                and connecting with like-minded individuals. Let s collaborate and
                turn ideas into impactful web solutions!
              </p>
              <a
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "auto"
                }}
                href={Resume}
                target="_blank"
              >
                Resume
                <i className="bx bx-right-arrow-alt" />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* services section start */}
      <section className="services" id="Tech Stack">
        <div className="max-width">
          <h2 className="title">💻 Tech Stack</h2>
          <div className="serv-content">
            <div className="card">
              <div className="box">
                <img src={htmlicon} alt="" />
                <div className="text">HTML</div>
              </div>
            </div>
            <div className="card">
              <div className="box">
                <img src={cssicon} alt="" />
                <div className="text">CSS</div>
              </div>
            </div>
            <div className="card">
              <div className="box">
                <img src={jsicon} alt="" />
                <div className="text">Javascript</div>
              </div>
            </div>
            <div className="card">
              <div className="box">
                <img src={bootstrap} alt="" />
                <div className="text">Bootstrap </div>
              </div>
            </div>
            <div className="card">
              <div className="box">
                <img src={Jquery} alt="" />
                <div className="text">Jquery </div>
              </div>
            </div>
            <div className="card">
              <div className="box">
                <img src={node} alt="" />
                <div className="text">Node js </div>
              </div>

            </div>
            <div className="card">
              <div className="box">
                <img src={Mongo} alt="" />
                <div className="text">Mongo DB</div>
              </div>
            </div>
            <div className="card">
              <div className="box">
                <img src={react} alt="" />
                <div className="text">React js </div>
              </div>
            </div>
            <div className="card">
              <div className="box">
                <img src={reactNative} alt="" />
                <div className="text">React Native </div>
              </div>
            </div>

          </div>
        </div>

      </section>
      {/* skills section start */}
      <section className="skills" id="skills">
        <div className="max-width">
          <h2 className="title" data-aos="fade-up">
            My skills
          </h2>
          <div className="skills-content" data-aos="fade-up" data-aos-delay={100}>
            <div className="column left" data-aos="fade-right">
              <div className="text" data-aos="bounce-in" data-aos-delay={200}>
                My creative skills
              </div>
              <p>
                I Learn C Language in 2019 Than In 2021-2022 I Learn HTML AND CSS
                And December-2023 To March-2025 Learn Fullstack Web-Development In
                Red and White Multimedia Education- Amreli. Gujrat{" "}
              </p>
              <a
                href="#about"
                id="celebrateButton"
                className="celebrate-btn"
                data-aos="fade-up"
                data-aos-delay={1000}
              >
                Read More
              </a>
            </div>
            <div className="column right">
              <div className="bars" data-aos="fade-up" data-aos-delay={500}>
                <div className="info">
                  <span>HTML</span>
                  <span>100%</span>
                </div>
                <div
                  className="line html"
                  data-aos="fade-right"
                  data-aos-offset={300}
                  data-aos-easing="ease-in-sine"
                />
              </div>
              <div className="bars" data-aos="fade-up" data-aos-delay={1000}>
                <div className="info">
                  <span>CSS</span>
                  <span>90%</span>
                </div>
                <div
                  className="line css"
                  data-aos="fade-right"
                  data-aos-offset={300}
                  data-aos-easing="ease-in-sine"
                />
              </div>
              <div className="bars" data-aos="fade-up" data-aos-delay={1500}>
                <div className="info">
                  <span>JavaScript</span>
                  <span>85%</span>
                </div>
                <div
                  className="line js"
                  data-aos="fade-right"
                  data-aos-offset={300}
                  data-aos-easing="ease-in-sine"
                ></div>
              </div>
              <div className="bars" data-aos="fade-up" data-aos-delay={2000}>
                <div className="info">
                  <span>Bootstrap</span>
                  <span>95%</span>
                </div>
                <div
                  className="line bootstrap"
                  data-aos="fade-right"
                  data-aos-offset={300}
                  data-aos-easing="ease-in-sine"
                />
              </div>
              <div className="bars" data-aos="fade-up" data-aos-delay={2500}>
                <div className="info">
                  <span>jQuery</span>
                  <span>80%</span>
                </div>
                <div
                  className="line jQuery"
                  data-aos="fade-right"
                  data-aos-offset={300}
                  data-aos-easing="ease-in-sine"
                />
              </div>
              <div className="bars" data-aos="fade-up" data-aos-delay={3000}>
                <div className="info">
                  <span>React js</span>
                  <span>85%</span>
                </div>
                <div
                  className="line React"
                  data-aos="fade-right"
                  data-aos-offset={300}
                  data-aos-easing="ease-in-sine"
                />
              </div>
              <div className="bars" data-aos="fade-up" data-aos-delay={3500}>
                <div className="info">
                  <span>Node js</span>
                  <span>75%</span>
                </div>
                <div
                  className="line Node"
                  data-aos="fade-right"
                  data-aos-offset={300}
                  data-aos-easing="ease-in-sine"
                />
              </div>
              <div className="bars" data-aos="fade-up" data-aos-delay={4000}>
                <div className="info">
                  <span>Express js</span>
                  <span>80%</span>
                </div>
                <div
                  className="line express"
                  data-aos="fade-right"
                  data-aos-offset={300}
                  data-aos-easing="ease-in-sine"
                />
              </div>
              <div className="bars" data-aos="fade-up" data-aos-delay={4500}>
                <div className="info">
                  <span>MongoDB</span>
                  <span>75%</span>
                </div>
                <div
                  className="line MongoDB"
                  data-aos="fade-right"
                  data-aos-offset={300}
                  data-aos-easing="ease-in-sine"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="teams" id="teams">



        <h2 className="title">My Project</h2>
        <div className=".carousel max-width swiper mySwiper">
          <div className="swiper-wrapper carousel owl-carousel">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              loop={true}
              navigation={true}
              modules={[Autoplay, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="card">
                    <div className="box swiper-slide">
                      <img className="imgs" src={assminpenal} alt="" />
                      <div className="text">Addmin penal</div>
                      <br />
                      <p></p>
                      <ul>
                        <li>This Is My Addmin Penal use of html css</li>
                        <br />
                        <li> I Created Responsive Navbar Sidebar Login Sing up Page</li>
                        <br />
                        <a
                          target="_blank"
                          href="https://github.com/Kashyapsurani/Addmin-Penal.git"
                        >

                          <box-icon name='github' type='logo' style={{ background: 'white', marginRight: 10, marginBottom: 10, borderRadius: 10 }} ></box-icon>
                          <h4 style={{ marginBottom: 10, }}>source code</h4>
                        </a>
                        <a target="_blank" href="https://addmin-penal.vercel.app/">
                          <box-icon name='netlify' type='logo' style={{ background: 'white', marginRight: 10, borderRadius: 10 }}></box-icon>
                          <h4>Go To Live</h4>
                        </a>
                      </ul>
                      <p />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="card">
                    <div className="box swiper-slide">
                      <img className="imgs" src={firstcry} alt="" />
                      <div className="text">Firstcry</div>
                      <br />
                      <p></p>
                      <ul>
                        <li>This Is Firstcry And My First Clone Website</li>
                        <br />
                        <li> I Created Responsive Navbar and with html css</li>
                        <br />
                        <a
                          target="_blank"
                          href="https://github.com/Kashyapsurani/firstcry-clone.git"
                        >
                          <box-icon name='github' type='logo' style={{ background: 'white', marginRight: 10, marginBottom: 10, borderRadius: 10 }} ></box-icon>
                          <h4 style={{ marginBottom: 10, }}>source code</h4>
                        </a>
                        <a
                          target="_blank"
                          href="https://65c5e150c498c77658f52bc9--regal-bunny-4eb6fb.netlify.app/"
                        >
                          <box-icon name='netlify' type='logo' style={{ background: 'white', marginRight: 10, borderRadius: 10 }}></box-icon>
                          <h4>Go To Live</h4>
                        </a>
                      </ul>
                      <p />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="card">
                    <div className="box swiper-slide">
                      <img
                        className="imgs"
                        src={jiocinema}
                        alt=""
                      />
                      <div className="text">JioCinema</div>
                      <br />
                      <p></p>
                      <ul>
                        <li>This Is My JioCinema-clone I Created a 5 Page </li>
                        <br />
                        <li> I Created Responsive Navbar footer </li>
                        <br />
                        <a
                          target="_blank"
                          href="https://github.com/Kashyapsurani/JioCinema-clone.git"
                        >
                          <box-icon name='github' type='logo' style={{ background: 'white', marginRight: 10, marginBottom: 10, borderRadius: 10 }} ></box-icon>
                          <h4 style={{ marginBottom: 10, }}>source code</h4>
                        </a>
                        <a
                          target="_blank"
                          href="https://jio-cinema-clone-weld.vercel.app/"
                        >
                          <box-icon name='netlify' type='logo' style={{ background: 'white', marginRight: 10, borderRadius: 10 }}></box-icon>
                          <h4>Go To Live</h4>
                        </a>
                      </ul>
                      <p />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="card">
                    <div className="box swiper-slide">
                      <img className="imgs" src={ecom} alt="" />
                      <div className="text">React E Commers</div>
                      <br />
                      <p></p>
                      <ul>
                        <li>This is My React E Commers</li>
                        <br />
                        <li>I Use React Router Dom Add To Cart And Favrate</li>
                        <br />
                        <a
                          target="_blank"
                          href="https://github.com/Kashyapsurani/React-E-commerce"
                        >
                          <box-icon name='github' type='logo' style={{ background: 'white', marginRight: 10, marginBottom: 10, borderRadius: 10 }} ></box-icon>
                          <h4 style={{ marginBottom: 10, }}>source code</h4>
                        </a>
                        <a
                          target="_blank"
                          href="https://react-e-commerce-pe8i.vercel.app/"
                        >
                          <box-icon name='netlify' type='logo' style={{ background: 'white', marginRight: 10, borderRadius: 10 }}></box-icon>
                          <h4>Go To Live</h4>
                        </a>
                      </ul>
                      <p />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>

                <div className="swiper-slide">
                  <div className="card">
                    <div className="box swiper-slide">
                      <img
                        className="imgs"
                        src={calculator}
                        alt=""
                      />
                      <div className="text">Calculator</div>
                      <br />
                      <p></p>
                      <ul>
                        <li>This Is calculator whith the help of javascript </li>
                        <br />
                        <li>use for symple calculestion</li>
                        <br />
                        <a
                          target="_blank"
                          href="https://github.com/Kashyapsurani/javascript-D28-21-may-project-calculator-.git"
                        >
                          <box-icon name='github' type='logo' style={{ background: 'white', marginRight: 10, marginBottom: 10, borderRadius: 10 }} ></box-icon>
                          <h4 style={{ marginBottom: 10, }}>source code</h4>
                        </a>
                        <a
                          target="_blank"
                          href="https://javascript-d28-21-may-project-calculator.vercel.app/"
                        >
                          <box-icon name='netlify' type='logo' style={{ background: 'white', marginRight: 10, borderRadius: 10 }}></box-icon>
                          <h4>Go To Live</h4>
                        </a>
                      </ul>
                      <p />
                    </div>
                  </div>
                </div>
              </SwiperSlide>

            </Swiper>
          </div>
        </div>
      </section>
      {/* contact section start */}
      <section className="contact" id="contact">
        <div className="max-width">
          <h2 className="title">Contact me</h2>
          <div className="contact-content">
            <div className="column left">
              <div className="text">Rech Me</div>
              <div className="icons">
                <div className="row">
                  <i className="fas fa-user" />
                  <div className="info">
                    <div className="head">Name</div>
                    <div className="sub-title">Kashyap surani</div>
                  </div>
                </div>
                <div className="row">
                  <i className="fas fa-map-marker-alt" />
                  <div className="info">
                    <div className="head">Address</div>
                    <div className="sub-title">Amreli,Gujrati</div>
                  </div>
                </div>
                <div className="row">
                  <i className="fas fa-envelope" />
                  <div className="info">
                    <div className="head">Email</div>
                    <div className="sub-title">kashyapsurani49@gmail.com</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column right">
              <div className="text">Message me</div>
              <form action="#">
                <div className="fields">
                  <div className="field name">
                    <input type="text" placeholder="Name" required="" />
                  </div>
                  <div className="field email">
                    <input type="email" placeholder="Email" required="" />
                  </div>
                </div>
                <div className="field">
                  <input type="text" placeholder="Subject" required="" />
                </div>
                <div className="field textarea">
                  <textarea
                    cols={30}
                    rows={10}
                    placeholder="Message.."
                    required=""
                    defaultValue={""}
                  />
                </div>
                <div className="button-area">
                  <a
                    style={{ color: "white" }}
                    href="mailto:kashyapsurani49@gmail.com"
                  />
                  <button type="submit">
                    <a
                      style={{ color: "white" }}
                      href="mailto:kashyapsurani49@gmail.com"
                    >
                      Send message
                    </a>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* footer section start */}
      <footer>
        <span>
          Created By<a href="mailto:kashyapsurani49@gmail.com">Kashyap surani</a>{" "}
          <span className="far fa-copyright" />{" "}
        </span>
      </footer>
    </>

  )
}

export default App;