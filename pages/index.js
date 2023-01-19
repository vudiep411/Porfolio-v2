import { useState } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Stars } from "@react-three/drei"
import Earth from "../components/Earth"
import Mars from "../components/Mars"
import MatrixBackground from "../components/Matrix"
import Jupiter from "../components/Jupiter"
import ThreeDText from "../components/text3D/ThreeDText"
import Navbar from "../components/Navbar"
import { useMediaQuery } from "react-responsive"
import About from "../components/About"
import Projects from "../components/Projects"
import Education from "../components/Education"
import Footer from "../components/Footer"
import { Button } from "@mui/material"


export default function Home() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 650px)" })
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenProject, setIsOpenProject] = useState(false)
  const [isOpenEducation, setIsOpenEducation] = useState(false)

  const handleAboutModal = () => {
    setIsOpen((prev) => !prev)
  }

  const handleProjectModal = () => {
    setIsOpenProject(prev => !prev)
  }

  const handleEducationModal = () => {
    setIsOpenEducation(prev => !prev)
  }

  return (
    <div>
      <Navbar/>
      {isOpen && <About handleAboutModal={handleAboutModal}/>}
      {isOpenProject && <Projects handleProjectModal={handleProjectModal}/>}
      {isOpenEducation && <Education handleEducationModal={handleEducationModal}/>}
      {!isTabletOrMobile && <MatrixBackground/>}
      <div className="canvas-container">
        <div>
          <h1 className="title">Welcome to my simulated Profile.</h1>
          <h1 className="title">I am Vu, your host</h1>
          <p className='wait'>(Please wait 10 seconds for the universe to be simulated)</p>
        </div>
        <div className="universe">
          <Canvas>
            <OrbitControls
              enablePan={false}
              zoomSpeed={0.6}
              // enableZoom={false}
            />
            <Stars
              radius={300}
              depth={60}
              count={20000}
              factor={7}
              saturation={0}
              fade={true}
            />
            <ambientLight intensity={0.5}/>
            <pointLight color="#f6f3ea" position={[2, 0, 5]} intensity={1.2}/>
            <Earth position={[-2, 0, 0]} handleProjectModal={handleProjectModal}/>
            <Mars position={[0, 0, 0]} handleAboutModal={handleAboutModal}/>
            <Jupiter position={[2, 0, 0]} handleEducationModal={handleEducationModal}/>
            <ThreeDText text="Projects" position={[-2.6, 0.7, 0]}/>
            <ThreeDText text="About" position={[-0.5, 0.7, 0]}/>
            <ThreeDText text="Education" position={[1.2, 0.7, 0]}/>
          </Canvas>
          <div style={{display: 'flex', justifyContent: 'center', paddingTop: '15px', width: 'auto'}}>
            <Button variant="contained" color="success" style={{padding: '15px'}} href='/blog'><b>My Blogs</b></Button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
