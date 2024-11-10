import Image from "next/image"
import logo from "../app/assets/facebook-logo.png"
import github from "../app/assets/github-logo.png"
import pic from "../app/assets/yellow-image.jpeg"
import profile from "../app/assets/yellow-image.jpeg"
export default function Portfolio(){
  return(
    <div className="bg-[rgb(21,21,21)] h-auto">

          {/* navbar */}
          <div className="flex justify-between items-center h-20 bg-[rgb(21,21,21)]">
  <div className="text-white font-bold text-2xl ml-16 hover:text-[#2cdae3]">Portfolio</div>
  
  {/* Desktop Navigation */}
  <div className="hidden md:flex text-white font-bold text-xl mr-16 space-x-5">
    <a href="#" className="hover:text-[#2cdae3]">Home</a>
    <a href="#" className="hover:text-[#2cdae3]">About</a>
    <a href="#" className="hover:text-[#2cdae3]">Skills</a>
  </div>
  
  {/* Mobile Navigation */}
  <div className="md:hidden flex justify-end mr-6">
    <button className="text-white text-2xl" id="menu-btn">
      &#8801;
    </button>
    <div className="hidden" id="menu">
      <ul className="flex flex-col text-white font-bold text-xl space-y-5">
        <li><a href="#" className="hover:text-[#2cdae3]">Home</a></li>
        <li><a href="#" className="hover:text-[#2cdae3]">About</a></li>
        <li><a href="#" className="hover:text-[#2cdae3]">Skills</a></li>
      </ul>
    </div>
  </div>
</div>

{/* Home Section */}
<div className="flex flex-col lg:flex-row items-center lg:items-start">
  {/* Text Content */}
  <div className="mt-16 lg:mt-32 mx-4 lg:ml-16 text-center lg:text-left">
    <h1 className="text-white font-bold text-2xl md:text-3xl">
      Hello, Its Me <br />
      <span className="text-5xl md:text-7xl">Hafiz Hamza</span> <br />
      <span>
        And I am a{" "}
        <span className="text-[#2cdae3]">Junior Developer</span>
      </span>
    </h1>
    <p className="mt-6 text-white text-sm md:text-base">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel veniam
      enim et, obcaecati porro veritatis qui nobis libero quia. <br />
      Consequuntur, architecto aliquid! Consequuntur hic tempore assumenda
      ratione cupiditate aliquam ex.
    </p>
    <div className="flex justify-center lg:justify-start mt-4 space-x-4">
      <Image
        className="bg-[#2cdae3] rounded-full inline-block hover:bg-white p-2"
        src={logo}
        alt="logo"
      />
      <Image
        className="bg-[#2cdae3] rounded-full inline-block hover:bg-white p-2"
        src={github}
        alt="logo"
      />
    </div>
    <a
      href="https://milestone5-fawn-omega.vercel.app/"
      className="block bg-[#2cdae3] text-white w-[150px] md:w-[170px] h-[40px] md:h-[50px] rounded-3xl text-center mt-6 py-2 text-sm md:text-[20px] font-bold mx-auto lg:mx-0"
    >
      Download CV
    </a>
  </div>

  {/* Profile Image */}
  <div className="mt-8 lg:mt-20 flex justify-center">
    <Image
      className="max-md:h-[250px] max-md:w-[250px] rounded-full shadow-[0px_0px_15px_6px] shadow-white border-black"
      src={pic}
      alt="profile"
      height={350}
      width={350}

    />
  </div>
</div>

     {/* about section */}
        <div>  
        <h1 className="text-white text-6xl font-bold  mt-8 text-center max-md:text-[50px]">About Me</h1>
        <p className="text-white text-2xl text-center mt-8 max-md:text-[20px]">I'm Hafiz Hamza and I am a student of Second Year at my D.J College and <br /> Now I am also a student of GIAIC In this Journey I am learning different tencnologies like Programming , designing , development etc. <br />I have gain my confidence and inshallah I acheived my goals in my future .</p>
        <div>
        <Image className="max-md:h-[250px] max-md:w-[250px] m-auto rounded-full mt-20 shadow-[0px_0px_15px_6px] shadow-white  border-black" src={profile} alt="profile" height={300}/>
        </div>
        </div>


        {/* Skills Section */}
<h1 className="text-white text-4xl md:text-6xl text-center font-bold mt-10">
  Skills Section
</h1>
<div className="flex justify-center flex-wrap gap-6 md:gap-8 mt-12 px-4">
  <div className="shadow-[0px_0px_15px_5px]  shadow-white rounded-lg w-[150px] h-[150px] md:w-[200px] md:h-[200px] bg-white bg-[url('https://img.freepik.com/free-vector/gradient-code-logo-with-tagline_23-2148811020.jpg?ga=GA1.1.904921068.1702209666&semt=ais_hybrid')] bg-cover"></div>
  <div className="shadow-[0px_0px_15px_5px]  shadow-white rounded-lg w-[150px] h-[150px] md:w-[200px] md:h-[200px] bg-white bg-[url('https://img.freepik.com/premium-vector/css-vector-icon-design-illustration_1174953-23508.jpg?ga=GA1.1.904921068.1702209666&semt=ais_hybrid')] bg-cover"></div>
  <div className="shadow-[0px_0px_15px_5px]  shadow-white rounded-lg w-[150px] h-[150px] md:w-[200px] md:h-[200px] bg-white bg-[url('https://img.freepik.com/free-vector/programmers-using-javascript-programming-language-computer-tiny-people-javascript-language-javascript-engine-js-web-development-concept-bright-vibrant-violet-isolated-illustration_335657-986.jpg?ga=GA1.1.904921068.1702209666&semt=ais_hybrid')] bg-cover"></div>
  <div className="shadow-[0px_0px_15px_5px]  shadow-white rounded-lg w-[150px] h-[150px] md:w-[200px] md:h-[200px] bg-white bg-[url('https://img.freepik.com/premium-vector/create-impact-with-3d-coral-pink-neon-letter-f-icon-dark-backgrounds_462839-8288.jpg?ga=GA1.1.904921068.1702209666&semt=ais_hybrid')] bg-cover"></div>
  <div className="shadow-[0px_0px_15px_5px]  shadow-white rounded-lg w-[150px] h-[150px] md:w-[200px] md:h-[200px] bg-white bg-[url('https://t3.ftcdn.net/jpg/05/50/01/22/240_F_550012297_vt1cUy6CCs7qYHlSa1zm1z0MND9DYwvP.jpg')] bg-cover"></div>
  <div className="shadow-[0px_0px_15px_5px]  shadow-white rounded-lg w-[150px] h-[150px] md:w-[200px] md:h-[200px] bg-white bg-[url('https://img.freepik.com/free-vector/creative-gradient-code-logo_23-2148820572.jpg?ga=GA1.1.904921068.1702209666&semt=ais_hybrid')] bg-cover"></div>
  <div className="shadow-[0px_0px_15px_5px]  shadow-white rounded-lg w-[150px] h-[150px] md:w-[200px] md:h-[200px] bg-white bg-[url('https://img.freepik.com/free-photo/still-life-books-versus-technology_23-2150062920.jpg?ga=GA1.1.904921068.1702209666&semt=ais_hybrid')] bg-cover"></div>
</div>

    </div>
  )
}