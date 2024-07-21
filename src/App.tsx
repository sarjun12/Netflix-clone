import { useState } from "react";

import logo from "./assets/netflixlogo.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-col gap-2 bg-zinc-700">
        <div className="backgroundimage">
          <div className="w-screen background h-screen">
            <div className="py-6 px-8 max-w-[1250px] mx-auto flex justify-between">
              <img src={logo} className="w-[148px] h-[40px]"></img>
              <div className="flex gap-3">
                <select className="bg-gray-950 border border-gray-400 rounded-md px-3 text-white">
                  <option value="">English</option>
                  <option value="">हिंदी</option>
                  <option value="">தமிழ்</option>
                </select>
                <button className="bg-[#c11119] px-3 rounded-md text-white font-bold">
                  Sign in
                </button>
              </div>
            </div>
            <div className="w-full h-full flex justify-center flex-col gap-4 items-center text-center text-white">
              <div className="text-[3rem] font-bold">
                Unlimited movies, TV shows and more
              </div>
              <div className="text-2xl">Watch anywhere. Cancel anytime.</div>
              <div className="text-lg">
                Ready to watch? Enter your email to create or restart your
                membership.
              </div>
              <div className="flex gap-2  ">
                <input
                  className="bg-gray-900 opacity-50 border border-gray-300 p-3 w-96 text-xl"
                  placeholder="Email address"
                />
                <div className="px-4 py-2 bg-[#c11119] text-2xl font-bold">
                  Get Started &gt;
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-screen h-[60vh] bg-black"></div>
        <div className="w-screen h-[60vh] bg-black"></div>
        <div className="w-screen h-[60vh] bg-black"></div>
        <div className="w-screen h-[60vh] bg-black"></div>
        <div className="w-screen h-[60vh] bg-black"></div>
        <div className="w-screen h-[60vh] bg-black"></div>
      </div>
    </>
  );
}

export default App;
