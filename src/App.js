import logo from './logo.svg';
import './App.css';
function Feature (){
  return (

    <div className='feature'>
        <img src="" alt="" className="feature-image"></img>
          <h3 className='feature-title'>title2</h3>
          <p className='feature-desc'> 
          In publishing and graphic design, Lorem ipsum is a placeholder
           text commonly used to demonstrate the visual form of a document 
           or a typeface without relying on meaningful content. Lorem ipsumm
          ay be used as a placeholder before final copy is available
          </p>
       
    </div>
    )
}
function App() {
  //  const name="phongvo";  
  //  function fullname(firstName, lastName){
  //   return '$(firstName) $(lastName)';
  // }
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //        {/* /* <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p> */}
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         <h1> phong {name === 'phongvo' ? 'phongvo' : 'sao roi'}</h1> 
  //       </a>
  //     </header>
  //   </div>
  // );
return (
  <div>
      <YoutubeItem></YoutubeItem>
  </div>
)
}
function YoutubeItem(){
  return(
    <div className='Youtube-Item'>
      <div className='Youtube-Image'>
          <img src='https://i.pinimg.com/originals/00/6e/3b/006e3b7562cec2b15a448fe514048420.jpg'/>
      </div>
      <div className='Youtube-Footer'>
      <div className='Youtube-Avata'>

      </div>
      <div className='Youtube-info'>
        <h3 className='Youtube-Title'>
          learning reactjs
        </h3>
        <h4 className='Youtube-Authen'>
          phong
        </h4>
      </div>
    </div>
    </div>
  )
}
export default App;
