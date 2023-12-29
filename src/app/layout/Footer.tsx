// import {
//   faFacebook,
//   faInstagram,
//   faTwitter,
// } from "@fortawesome/free-brands-svg-icons"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

// import { Link } from "react-router-dom"
// import Paths from "../routes/paths"
import logo from "./../assets/images/logo.png"

const Footer: React.FC = () => (
  <div className="w-full h-full">
    <footer className="w-full h-full flex justify-between items-center bg-ct-trademark-dark text-white p-4">
      <div className="flex items-center">
        <img
          src={logo}
          alt="Logo"
          className="hidden sm:block w-auto h-8 mr-2"
        />
        {/* <div className="flex items-center space-x-4 ml-5 mr-5">
          <a
            href="https://twitter.com/your-handle"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ct-blue-600 hover:text-ct-blue-700"
          >
            <FontAwesomeIcon icon={faTwitter as any} size="lg" />
          </a>
          <a
            href="https://instagram.com/your-handle"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-400 hover:text-red-400"
          >
            <FontAwesomeIcon icon={faInstagram as any} size="lg" />
          </a>
          <a
            href="https://facebook.com/your-handle"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-400"
          >
            <FontAwesomeIcon icon={faFacebook as any} size="lg" />
          </a>
        </div> */}
      </div>
      <div className="flex items-center space-x-4">
        {/* <Link className="" to={Paths.terms}>
          Términos y condiciones
        </Link>
        <Link className="" to={Paths.policy}>
          Política de privacidad
        </Link> */}
      </div>
    </footer>
  </div>
)

export default Footer
