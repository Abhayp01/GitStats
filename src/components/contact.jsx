import React from "react";

function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="mx-auto text-center">
        <h2 className="text-3xl font-black text-slate-500 sm:text-3xl md:text-4xl mb-6">
          Contact Me
        </h2>
        <div className="text-slate-800 font-bold text-lg mb-8">
          <p>Feel free to reach out to me on the following platforms:</p>
          <div className="flex justify-center items-center mt-4 p-2">
            <div className="flex flex-col items-center mx-2 p-2">
              <a
                href="https://github.com/Abhayp01"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-800 hover:text-gray-600"
              >
                <svg
                  className="mx-auto fill-current h-8 w-8 mb-2 text-center"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#ffffff"
                  height="50px"
                  viewBox="0 0 16 16"
                  width="50px"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.58.82-2.14-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.14 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                </svg>
                GitHub
              </a>
            </div>
            <div className="flex flex-col mx-2">
              <a
                href="https://linkedin.com/in/abhayprajapati03"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-700 hover:text-gray-600"
              >
                <img
                  className="mx-auto w-[30px] mb-2"
                  src="https://cdn.iconscout.com/icon/free/png-256/free-linkedin-189-721962.png"
                  alt=""
                />
                LinkedIn
              </a>
            </div>
            <div className="flex flex-col items-center mx-2">
              <a
                href="www.leetcode.com/Abhay01"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-700 hover:text-gray-600"
              >
                <img
                  className="mx-auto w-[30px] mb-2"
                  src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
                  alt=""
                />
                LeetCode
              </a>
            </div>
            <div className="flex flex-col items-center mx-2">
              <a
                href="mailto:prajapatiabhay2003@gmail.com"
                className="text-slate-800 hover:text-gray-600"
              >
                <img
                  className="mx-auto w-[30px] mb-2"
                  src="https://cdn.iconscout.com/icon/free/png-256/free-mail-704-433327.png"
                  alt=""
                />
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
