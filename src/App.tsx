import logo from "./assets/netflixlogo.svg";

function App() {
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
                  className="bg-gray-900 opacity-50 border rounded-md border-gray-300 p-3 w-96 text-xl"
                  placeholder="Email address"
                />
                <div className="px-4 py-2 bg-[#c11119] text-2xl font-bold rounded-md">
                  Get Started &#8827;
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-screen h-[60vh] bg-black items-center justify-center text-white min-w-[600px]">
          <div className="w-1/3 flex flex-col gap-5">
            <div className="text-6xl text flex font-extrabold">
              Enjoy on your TV
            </div>
            <div className="text-2xl text-start">
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </div>
          </div>
          <div className="w-1/3 relative  min-w-[500px]">
            <video autoPlay loop className="px-16 w-full">
              <source src="/video1.mp4" type="video/mp4" />
            </video>
            <img
              src="/tv.png"
              style={{ position: "absolute", left: "2%", top: "-35%" }}
            />
          </div>
        </div>
        <div className="flex w-screen h-[60vh] bg-black items-center justify-center text-white  min-w-[600px]">
          <div className="w-1/3">
            <img src="/phone.jpg" />
          </div>
          <div className="w-1/3 flex flex-col gap-5">
            <div className="text-6xl text flex font-extrabold">
              Download your shows to watch offline
            </div>
            <div className="text-2xl text-start">
              Save your favourites easily and always have something to watch.
            </div>
          </div>
        </div>
        <div className="flex w-screen h-[60vh] bg-black items-center justify-center text-white  min-w-[600px]">
          <div className="w-1/3 flex flex-col gap-5">
            <div className="text-6xl text flex font-extrabold">
              Watch everywhere
            </div>
            <div className="text-2xl text-start">
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </div>
          </div>
          <div className="w-1/3 relative min-w-[500px]">
            <video autoPlay loop className="px-16">
              <source src="/video2.mp4" type="video/mp4" />
            </video>
            <img
              src="/mactv.png"
              style={{ position: "absolute", left: "2%", top: "-35%" }}
            />
          </div>
        </div>
        <div className="flex w-screen h-[60vh] bg-black items-center justify-center text-white  min-w-[600px]">
          <div className="w-1/3">
            <img src="/children.png" />
          </div>
          <div className="w-1/3 flex flex-col gap-5">
            <div className="text-6xl text flex font-extrabold">
              Create profiles for kids
            </div>
            <div className="text-2xl text-start">
              Send children on adventures with their favourite characters in a
              space made just for them—free with your membership.
            </div>
          </div>
        </div>

        <div className="w-screen h-[60vh] bg-black"></div>
        <div className="w-screen h-[60vh] bg-black"></div>
      </div>
    </>
  );
}

export default App;
