import React from 'react';
import "../styles/App.css"
import palm from "../assets/palm.png"
import lock from "../assets/icons/lock.png"
import reload from "../assets/icons/reload.png"
import upload from "../assets/icons/upload.png"

export default function Home() {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="block_onboarding">
          <div className="undertitle">
            <p>Hi, I'm VLadyslav Kholod</p>
            <img src={palm} alt="palm icon" className="palm_icon"/>
          </div>
          <h1 className="title">FRONTEND DEVELOPER</h1>
          <p className="description">
            specializing in building web apps with React.js<br/>
            and other powerful technologies.
          </p>
        </div>
        <div className="block_tabs">
          <nav className="tabs_nav">
            <ul>
              <li className="tab_item">About Me</li>
              <li className="tab_item">Goals</li>
              <li className="tab_item">Projects</li>
              <li className="tab_item">Experience</li>
              <li className="tab_item">Contacts</li>
            </ul>
          </nav>
          <div className="tabs_content">

          </div>
        </div>
        <div className="block_resume">
          <h2>Resume</h2>
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
              <h3 className="mac_title">Vladyslav Kholod</h3>
              <div className="mac_placeholders">
                <div className="placeholders_long_container">
                  <div className="placeholder_long_item">
                    <div className="long_item_line1"></div>
                    <div className="long_item_line2"></div>
                    <div className="long_item_line3"></div>
                  </div>
                  <div className="placeholder_long_item">
                    <div className="long_item_line1"></div>
                    <div className="long_item_line2"></div>
                    <div className="long_item_line3"></div>
                  </div>
                  <div className="placeholder_long_item">
                    <div className="long_item_line1"></div>
                    <div className="long_item_line2"></div>
                    <div className="long_item_line3"></div>
                  </div>
                  <div className="placeholder_long_item">
                    <div className="long_item_line1"></div>
                    <div className="long_item_line2"></div>
                    <div className="long_item_line3"></div>
                  </div>
                </div>
                <div className="placeholders_short_container">
                  <div className="placeholder_short_item">
                    <div className="short_item_line1"></div>
                    <div className="short_item_line2"></div>
                    <div className="short_item_line3"></div>
                  </div>
                  <div className="placeholder_short_item">
                    <div className="short_item_line1"></div>
                    <div className="short_item_line2"></div>
                    <div className="short_item_line3"></div>
                  </div>
                  <div className="placeholder_short_item">
                    <div className="short_item_line1"></div>
                    <div className="short_item_line2"></div>
                    <div className="short_item_line3"></div>
                  </div>
                  <div className="placeholder_short_item">
                    <div className="short_item_line1"></div>
                    <div className="short_item_line2"></div>
                    <div className="short_item_line3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className="footer_text">
            <p className="text1">
              Let’s build something great together
            </p>
            <p className="text2">
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
            © 2026 Vladislav K. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}