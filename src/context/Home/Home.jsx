import React from 'react';
import "../../styles/App.css"
import palm from "../../assets/palm.png"
import lock from "../../assets/icons/lock.svg"
import reload from "../../assets/icons/reload.svg"
import upload from "../../assets/icons/upload.svg"
import { useNavigate } from 'react-router-dom';
import Creators from '../Creators';

import AboutMe from '../AboutMe/AboutMe.jsx';
import Contacts from '../Contacts/Contacts.jsx';
import Experience from '../Experience/Experience.jsx';
import Goals from '../Goals/Goals.jsx';
import Projects from '../Projects/Projects.jsx';

const TABS_DATA = [
  { id: 'AboutMe', title: "About Me", content: "Feel free to read more about me if you'd like to learn more.", context: <AboutMe/> },
  //{ id: 'Goals', title: "Goals", content: "Click here to see my professional goals and aspirations.", context: <Goals/> },
  { id: 'Projects', title: "Projects", content: "Check out a detailed showcase of my works and the technologies I used to build them.", context: <Projects/> },
  { id: 'Experience', title: "Experience", content: "Discover my career journey and the skills I've gained along the way.", context: <Experience/> },
  { id: 'Contacts', title: "Contacts", content: "Let’s get in touch! You can find all my social links and contact info here.", context: <Contacts/> },
]

export default function Home() {
  const [scrolledLogo, setScrolledLogo] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState(0);

  const navigate = useNavigate();

  React.useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      const vh = window.innerHeight;

      setScrolledLogo(scroll > 50);

      if(scroll > vh){
        const sectionScroll = scroll - vh;
        const tabIndex = Math.floor(sectionScroll / vh);
        if(tabIndex >= 0 && tabIndex < TABS_DATA.length){
          setActiveTab(tabIndex);
        }
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const scrollToTab = (index) => {
    const vh = window.innerHeight;
    // Рассчитываем позицию: 100vh (Onboarding) + (индекс * 100vh)
    const targetScroll = vh + (index * vh); 

    window.scrollTo({
      top: targetScroll,
      behavior: 'smooth' // Плавная прокрутка
    });
  };

  return (
    <div className={`wrapper ${scrolledLogo ? 'is-scrolled' : ''}`}>
      <div style={{cursor: 'text'}} className="undertitle logo">
            <p className="title">Hi, I'm Vladyslav Kholod</p>
            <img src={palm} alt="palm icon" className="palm_icon"/>
          </div>
      <div className="container" style={{paddingTop: 0}}>
        <section className="block_onboarding block">
          <h1 className="main_title">
            FRONTEND<br />
            DEVELOPER
          </h1>
          <p className="description">
            specializing in building web apps with React.js<br/>
            and other powerful technologies.
          </p>
        </section>
        <section className="tabs_scroll_container">
          <div className="sticky_tabs_wrapper">
            <nav className="tabs_nav">
              <ul>
                {TABS_DATA.map((tab, index) => (
                  <li 
                    onClick={() => scrollToTab(index)}
                    key={tab.id} 
                    className={`tab_item title ${index === activeTab ? 'active' : ''}`}
                  >
                    {tab.title}
                  </li>
                ))}
              </ul>
            </nav>
            <div className="tabs_content" key={activeTab}>
              {/* active tab context */}
              <div className='tab_image'>
                {TABS_DATA[activeTab].context}
              </div>
              <p style={{width: '70%', textAlign: 'right'}} className="description">{TABS_DATA[activeTab].content}</p>
            </div>
          </div>
        </section>
        <section className="resume_reveal_wrapper">
          <div className="block_resume block">
            <p className='title'>Resume</p>
            <div className="resume_mac">
              <div className="mac_header">
                <div className="mac_buttons">
                  <div className="mac_button red"></div>
                  <div className="mac_button yellow"></div>
                  <div className="mac_button green"></div>
                </div>
                <div className="mac_url_bar">
                  <img src={lock} alt="lock icon" className="lock_icon"/>
                  <span className="url_text">resume.pdf</span>
                  <img src={reload} alt="reload icon" className="reload_icon"/>
                </div>
                <div className="mac_download">
                  <a href="/Vladyslav_Kholod_Frontend_CV.pdf" download="Vladyslav_Kholod_Frontend_CV.pdf" className="download_button">
                    <img src={upload} alt="download icon" className="upload_icon"/>
                  </a>
                </div>
              </div>
              <div className="mac_body">
                <h3 className="title_scheme">Vladyslav Kholod</h3>
                <div className="mac_placeholders">
                  <div className="placeholders_long_container">
                    <div className="placeholder_long_item">
                      <div className="long_item_line1 placeholder_item"></div>
                      <div className="long_item_line2 placeholder_item"></div>
                      <div className="long_item_line3 placeholder_item"></div>
                    </div>
                    <div className="placeholder_long_item">
                      <div className="long_item_line1 placeholder_item"></div>
                      <div className="long_item_line2 placeholder_item"></div>
                      <div className="long_item_line3 placeholder_item"></div>
                    </div>
                    <div className="placeholder_long_item">
                      <div className="long_item_line1 placeholder_item"></div>
                      <div className="long_item_line2 placeholder_item"></div>
                      <div className="long_item_line3 placeholder_item"></div>
                    </div>
                    <div className="placeholder_long_item">
                      <div className="long_item_line1 placeholder_item"></div>
                      <div className="long_item_line2 placeholder_item"></div>
                      <div className="long_item_line3 placeholder_item"></div>
                    </div>
                  </div>
                  <div className="placeholders_short_container">
                    <div className="placeholder_short_item">
                      <div className="short_item_line1 placeholder_item"></div>
                      <div className="short_item_line2 placeholder_item"></div>
                      <div className="short_item_line3 placeholder_item"></div>
                    </div>
                    <div className="placeholder_short_item">
                      <div className="short_item_line1 placeholder_item"></div>
                      <div className="short_item_line2 placeholder_item"></div>
                      <div className="short_item_line3 placeholder_item"></div>
                    </div>
                    <div className="placeholder_short_item">
                      <div className="short_item_line1 placeholder_item"></div>
                      <div className="short_item_line2 placeholder_item"></div>
                      <div className="short_item_line3 placeholder_item"></div>
                    </div>
                    <div className="placeholder_short_item">
                      <div className="short_item_line1 placeholder_item"></div>
                      <div className="short_item_line2 placeholder_item"></div>
                      <div className="short_item_line3 placeholder_item"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <footer className="footer_reveal">
          <div className="footer_text">
            <p className="title">
              Let’s build something great together
            </p>
            <p className="description">
              If you want to collaborate, discuss a project or just say hi — feel free to reach out.
            </p>
          </div>
          <div className="footer_links">
            <ul>
              <li><a href="https://www.linkedin.com/in/vladyslav-kholod-86647120a/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="mailto:vlad13holod@gmail.com">Email</a></li>
              <li><a href="https://github.com/Kholod13" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            </ul>
          </div>
          <Creators />
        </footer>
      </div>
    </div>
  );
}