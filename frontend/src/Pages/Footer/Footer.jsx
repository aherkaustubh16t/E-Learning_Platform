import React from 'react'
import '../Home/Landing/Landing.css'

function Footer() {
  return (
    <div className="footer">
        <div className="leftPart">
          <div className="title">
            <img src="https://www.figma.com/file/6b4R8evBkii6mI53IA4vSS/image/53619c42501fb7619406ed947b38c5fa4f07597c" width={60} alt="" />
            <h2>Title</h2>
          </div>
          <p>Copyright  © 2025</p>
          <p>Small Change. Big Change.</p>
        </div>
        <div className="rightPart">
          <div className="links">
            <div className="link">
              <hr />
              <p>Home</p>
            </div>
            <div className="link">
              <hr />
              <p>About</p>
            </div>
            <div className="link">
              <hr />
              <p>How it works</p>
            </div>
            <div className="link">
              <hr />
              <p>Courses</p>
            </div>
            <div className="link">
              <hr />
              <p>Contact Us</p>
            </div>
            <div className="link">
              <hr />
              <p>Privacy Policy</p>
            </div>
          </div>
          <hr className="hr"/>
          <div className="icons">
            <img src="#" width={50} alt="linked in" />
            <img src="#" width={50} alt="Twiter" />
            <img src="#" width={50} alt="Facebook" />
            <img src="#" width={50} alt="Github" />
          </div>
        </div>
      </div>
  )
}

export default Footer
