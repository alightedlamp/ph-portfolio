import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="ph5-l pt3-l pb5-l">
          <div className="links">
            <div class="link">
              <a
                href="https://codepen.io/alightedlamp/"
                class="icon codepen"
                title="CodePen"
              >
                <svg viewBox="0 0 512 512">
                  <path d="M427 201.9c-0.6-4.2-2.9-8-6.4-10.3L264.2 87.3c-4.9-3.3-11.4-3.3-16.3 0L91.4 191.6c-4 2.7-6.5 7.4-6.5 12.2v104.3c0 4.8 2.5 9.6 6.5 12.2l156.4 104.3c4.9 3.3 11.4 3.3 16.3 0L420.6 320.4c4-2.6 6.6-7.4 6.6-12.2V203.9C427.1 203.2 427.1 202.6 427 201.9 427 201.7 427.1 202.6 427 201.9zM270.7 127.1l115.2 76.8 -51.5 34.4 -63.8-42.7V127.1zM241.3 127.1v68.6l-63.8 42.7 -51.5-34.4L241.3 127.1zM114.3 231.4l36.8 24.6 -36.8 24.6V231.4zM241.3 384.9L126.1 308.1l51.5-34.4 63.8 42.6V384.9zM256 290.8l-52-34.8 52-34.8 52 34.8L256 290.8zM270.7 384.9V316.3l63.8-42.6 51.5 34.4L270.7 384.9zM397.7 280.6l-36.8-24.6 36.8-24.6V280.6z" />
                </svg>
              </a>
            </div>
            <div class="link">
              <a
                href="https://github.com/alightedlamp"
                class="icon github"
                title="GitHub"
              >
                <svg viewBox="0 0 512 512">
                  <path d="M256 70.7c-102.6 0-185.9 83.2-185.9 185.9 0 82.1 53.3 151.8 127.1 176.4 9.3 1.7 12.3-4 12.3-8.9V389.4c-51.7 11.3-62.5-21.9-62.5-21.9 -8.4-21.5-20.6-27.2-20.6-27.2 -16.9-11.5 1.3-11.3 1.3-11.3 18.7 1.3 28.5 19.2 28.5 19.2 16.6 28.4 43.5 20.2 54.1 15.4 1.7-12 6.5-20.2 11.8-24.9 -41.3-4.7-84.7-20.6-84.7-91.9 0-20.3 7.3-36.9 19.2-49.9 -1.9-4.7-8.3-23.6 1.8-49.2 0 0 15.6-5 51.1 19.1 14.8-4.1 30.7-6.2 46.5-6.3 15.8 0.1 31.7 2.1 46.6 6.3 35.5-24 51.1-19.1 51.1-19.1 10.1 25.6 3.8 44.5 1.8 49.2 11.9 13 19.1 29.6 19.1 49.9 0 71.4-43.5 87.1-84.9 91.7 6.7 5.8 12.8 17.1 12.8 34.4 0 24.9 0 44.9 0 51 0 4.9 3 10.7 12.4 8.9 73.8-24.6 127-94.3 127-176.4C441.9 153.9 358.6 70.7 256 70.7z" />
                </svg>
              </a>
            </div>
            <div class="link">
              <a
                href="https://instagram.com/philipharrell"
                class="icon instagram"
                title="Instagram"
              >
                <svg viewBox="0 0 512 512">
                  <g>
                    <path d="M256 109.3c47.8 0 53.4 0.2 72.3 1 17.4 0.8 26.9 3.7 33.2 6.2 8.4 3.2 14.3 7.1 20.6 13.4 6.3 6.3 10.1 12.2 13.4 20.6 2.5 6.3 5.4 15.8 6.2 33.2 0.9 18.9 1 24.5 1 72.3s-0.2 53.4-1 72.3c-0.8 17.4-3.7 26.9-6.2 33.2 -3.2 8.4-7.1 14.3-13.4 20.6 -6.3 6.3-12.2 10.1-20.6 13.4 -6.3 2.5-15.8 5.4-33.2 6.2 -18.9 0.9-24.5 1-72.3 1s-53.4-0.2-72.3-1c-17.4-0.8-26.9-3.7-33.2-6.2 -8.4-3.2-14.3-7.1-20.6-13.4 -6.3-6.3-10.1-12.2-13.4-20.6 -2.5-6.3-5.4-15.8-6.2-33.2 -0.9-18.9-1-24.5-1-72.3s0.2-53.4 1-72.3c0.8-17.4 3.7-26.9 6.2-33.2 3.2-8.4 7.1-14.3 13.4-20.6 6.3-6.3 12.2-10.1 20.6-13.4 6.3-2.5 15.8-5.4 33.2-6.2C202.6 109.5 208.2 109.3 256 109.3M256 77.1c-48.6 0-54.7 0.2-73.8 1.1 -19 0.9-32.1 3.9-43.4 8.3 -11.8 4.6-21.7 10.7-31.7 20.6 -9.9 9.9-16.1 19.9-20.6 31.7 -4.4 11.4-7.4 24.4-8.3 43.4 -0.9 19.1-1.1 25.2-1.1 73.8 0 48.6 0.2 54.7 1.1 73.8 0.9 19 3.9 32.1 8.3 43.4 4.6 11.8 10.7 21.7 20.6 31.7 9.9 9.9 19.9 16.1 31.7 20.6 11.4 4.4 24.4 7.4 43.4 8.3 19.1 0.9 25.2 1.1 73.8 1.1s54.7-0.2 73.8-1.1c19-0.9 32.1-3.9 43.4-8.3 11.8-4.6 21.7-10.7 31.7-20.6 9.9-9.9 16.1-19.9 20.6-31.7 4.4-11.4 7.4-24.4 8.3-43.4 0.9-19.1 1.1-25.2 1.1-73.8s-0.2-54.7-1.1-73.8c-0.9-19-3.9-32.1-8.3-43.4 -4.6-11.8-10.7-21.7-20.6-31.7 -9.9-9.9-19.9-16.1-31.7-20.6 -11.4-4.4-24.4-7.4-43.4-8.3C310.7 77.3 304.6 77.1 256 77.1L256 77.1z" />
                    <path d="M256 164.1c-50.7 0-91.9 41.1-91.9 91.9s41.1 91.9 91.9 91.9 91.9-41.1 91.9-91.9S306.7 164.1 256 164.1zM256 315.6c-32.9 0-59.6-26.7-59.6-59.6s26.7-59.6 59.6-59.6 59.6 26.7 59.6 59.6S288.9 315.6 256 315.6z" />
                    <circle cx="351.5" cy="160.5" r="21.5" />
                  </g>
                </svg>
              </a>
            </div>
            <div class="link">
              <a
                href="https://www.linkedin.com/in/philipharrell/"
                class="icon linkedin"
                title="LinkedIn"
              >
                <svg viewBox="0 0 512 512">
                  <path d="M186.4 142.4c0 19-15.3 34.5-34.2 34.5 -18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5C171.1 107.9 186.4 123.4 186.4 142.4zM181.4 201.3h-57.8V388.1h57.8V201.3zM273.8 201.3h-55.4V388.1h55.4c0 0 0-69.3 0-98 0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9 0 26.9 0 98 0 98h57.5c0 0 0-68.2 0-118.3 0-50-28.3-74.2-68-74.2 -39.6 0-56.3 30.9-56.3 30.9v-25.2H273.8z" />
                </svg>
              </a>
            </div>
            <div class="link">
              <a
                href="https://soundcloud.com/p_harrell"
                class="icon soundcloud"
                title="SoundCloud"
              >
                <svg viewBox="0 0 512 512">
                  <path d="M443.5 273.1c0 25.1-20.4 45.5-45.5 45.5H271.5V162.3c4.8-1.8 9.9-3.1 15.1-3.9 4.1-0.6 8.3-1 12.5-1 42.3 0 77 32.7 80.3 74.1 5.7-2.5 11.9-4 18.6-4C423.1 227.6 443.5 248 443.5 273.1zM224.2 193.2v125.4h15.1v-134.5c-3.4 3.7-6.4 7.8-9 12.1C228.4 195 226.3 194.1 224.2 193.2zM247.6 318.6h15.1v-152.4c-5.4 2.7-10.5 6.1-15.1 9.9V318.6zM151.8 208.9v109.7h15.1V196.9C161.3 200.2 156.2 204.2 151.8 208.9zM106.5 231.6v86.5c1.9 0.2 3.7 0.4 5.7 0.4h7.9v-86.6c-2.6-0.5-5.2-0.7-7.9-0.7C110.3 231.3 108.4 231.4 106.5 231.6zM86.5 310.2c3.4 2.5 7.2 4.5 11.3 5.9v-82.4c-4.1 1.4-7.9 3.4-11.3 5.9V310.2zM128.4 234.4v84.2h15.1v-98.7c-3.4 5.6-6 11.8-7.5 18.4C133.6 236.8 131.1 235.5 128.4 234.4zM175.9 318.6h15.1V188.8c-5.3 0.7-10.3 2-15.1 3.8V318.6zM200.1 318.6h15.1v-128.3c-4.8-1.2-9.9-1.9-15.1-1.9V318.6L200.1 318.6zM79.1 303.4v-56.9c-6.6 7.6-10.6 17.6-10.6 28.5C68.5 285.8 72.5 295.7 79.1 303.4z" />
                </svg>
              </a>
            </div>
            <div class="link">
              <a
                href="https://philipandrewharrell.tumblr.com"
                class="icon tumblr"
                title="Tumblr"
              >
                <svg viewBox="0 0 512 512">
                  <path d="M210.8 80.3c-2.3 18.3-6.4 33.4-12.4 45.2 -6 11.9-13.9 22-23.9 30.5 -9.9 8.5-21.8 14.9-35.7 19.5v50.6h38.9v124.5c0 16.2 1.7 28.6 5.1 37.1 3.4 8.5 9.5 16.6 18.3 24.2 8.8 7.6 19.4 13.4 31.9 17.5 12.5 4.1 26.8 6.1 43 6.1 14.3 0 27.6-1.4 39.9-4.3 12.3-2.9 26-7.9 41.2-15v-55.9c-17.8 11.7-35.7 17.5-53.7 17.5 -10.1 0-19.1-2.4-27-7.1 -5.9-3.5-10-8.2-12.2-14 -2.2-5.8-3.3-19.1-3.3-39.7v-91.1H345.5v-55.8h-84.4v-90H210.8z" />
                </svg>
              </a>
            </div>
            <div class="link">
              <a
                href="https://twitter.com/n_othanks"
                class="icon twitter"
                title="Twitter"
              >
                <svg viewBox="0 0 512 512">
                  <path d="M419.6 168.6c-11.7 5.2-24.2 8.7-37.4 10.2 13.4-8.1 23.8-20.8 28.6-36 -12.6 7.5-26.5 12.9-41.3 15.8 -11.9-12.6-28.8-20.6-47.5-20.6 -42 0-72.9 39.2-63.4 79.9 -54.1-2.7-102.1-28.6-134.2-68 -17 29.2-8.8 67.5 20.1 86.9 -10.7-0.3-20.7-3.3-29.5-8.1 -0.7 30.2 20.9 58.4 52.2 64.6 -9.2 2.5-19.2 3.1-29.4 1.1 8.3 25.9 32.3 44.7 60.8 45.2 -27.4 21.4-61.8 31-96.4 27 28.8 18.5 63 29.2 99.8 29.2 120.8 0 189.1-102.1 185-193.6C399.9 193.1 410.9 181.7 419.6 168.6z" />
                </svg>
              </a>
            </div>
            <div class="link">
              <a
                href="mailto:philipharrell@gmail.com"
                class="icon email"
                title="Email"
              >
                <svg viewBox="0 0 512 512">
                  <path d="M101.3 141.6v228.9h0.3 308.4 0.8V141.6H101.3zM375.7 167.8l-119.7 91.5 -119.6-91.5H375.7zM127.6 194.1l64.1 49.1 -64.1 64.1V194.1zM127.8 344.2l84.9-84.9 43.2 33.1 43-32.9 84.7 84.7L127.8 344.2 127.8 344.2zM384.4 307.8l-64.4-64.4 64.4-49.3V307.8z" />
                </svg>
              </a>
            </div>
          </div>
        </footer>
          )
          }
}
export default Footer;
