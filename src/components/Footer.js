import React from 'react'
import { pageLinks, socialLinks } from '../data'
export default function Footer() {
  return (
    <div> <footer className="section footer">
      <ul className="footer-links">
        {
          pageLinks.map((link) => {
            const { id, href, text } = link;
            return (
              <li key={id}>
                <a href={href} className="footer-link">{text}</a>
              </li>

            )
          })
        }
      </ul>
      <ul className="footer-icons">
        {socialLinks.map((link) => {
          const { href, icon, id } = link
          return (
            <li key={id}>
              <a href={href}
                target="_blank"
                rel='noreferrer'
                className="footer-icon">
                <i className={icon}></i>
              </a>
            </li>

          )
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer></div>
  )
}
