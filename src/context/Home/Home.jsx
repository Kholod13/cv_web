import React from 'react';
import "../../styles/App.css"
import palm from "../../assets/palm.png"
import lock from "../../assets/icons/lock.svg"
import reload from "../../assets/icons/reload.svg"
import upload from "../../assets/icons/upload.svg"

const TABS_DATA = [
  { id: 1, title: "About Me", content: "This is the About Me section." },
  { id: 2, title: "Goals", content: "This is the Goals section." },
  { id: 3, title: "Projects", content: "This is the Projects section." },
  { id: 4, title: "Experience", content: "This is the Experience section." },
  { id: 5, title: "Contacts", content: "This is the Contacts section." },
]

export default function Home() {
  const [scrolledLogo, setScrolledLogo] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState(0);

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

  return (
    <div className={`wrapper ${scrolledLogo ? 'is-scrolled' : ''}`}>
      <div className="undertitle logo">
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
                    key={tab.id} 
                    className={`tab_item title ${index === activeTab ? 'active' : ''}`}
                  >
                    {tab.title}
                  </li>
                ))}
              </ul>
            </nav>
            <div className="tabs_content">
              {/* Здесь отображается контент активного таба */}
              <h2 className="title">{TABS_DATA[activeTab].title}</h2>
              <p className="description">{TABS_DATA[activeTab].content}</p>
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
                  <button className="download_button">
                    <img src={upload} alt="upload icon" className="upload_icon"/>
                  </button>
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
              <li>LinkedIn</li>
              <li>Email</li>
              <li>GitHub</li>
            </ul>
          </div>
          <p className="creators">
            © 2026 Vladyslav K. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}