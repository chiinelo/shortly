import './App.css';
import "../src/styles/landingPage.css"
import logo from "../src/images/logo.svg"
import illustration from "../src/images/illustration-working.svg"


function App() {
  return (
    
    <div className='App'>
{/* navbar */}
  <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <img src={logo} alt="" />
    </a>
    <button className="navbar-toggler border border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="#">Home</a>
        <a className="nav-link" href="#">Features</a>
        <a className="nav-link" href="#">Pricing</a>
        <a className="nav-link disabled">Disabled</a>
      </div>
    </div>
  </div>
</nav>

{/* body */}
<img src={illustration} alt="" width="100%" className='illustration'/>

<p className='fs-1 fw-bolder'>More than just shorter links</p>
<p className='fs-5 fw-normal'>Build your and's recognition and get etailed insights on how your links are performing</p>

<button className='startedButton mb-5'>Get Started</button>

<div className='shortenSection'>

<form action="/App" >
  <input type="text" className='shortenInput' placeholder='Shorten a link here...'/> <br />
  <button className='shortenButton'>Shorten it!</button>
</form>
</div>
<p className='fs-2 fw-bold'>Advances Statistics</p>
<p className='fs-5 fw-normal'>Track how your links are performing across the eb with out advanced statistics dashboard</p>

{/* cards */}
<div className="card brandedCard">
  <div className="card-body">
    <h5 className="card-title">Brand Recognition</h5>
    <p className="card-text">Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</p>
  </div>
</div>

<div className="card brandedCard">
  <div className="card-body">
    <h5 className="card-title">Detailed Reecords</h5>
    <p className="card-text">Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
  </div>
</div>

<div className="card brandedCard">
  <div className="card-body">
    <h5 className="card-title">Fully Customizable</h5>
    <p className="card-text">Improve brand awareness and content discoverability through customizable links supercharging audience engagement.</p>
  </div>
</div>

<div className='boostLinks'>
  <p className='text-light fs-1 fw-bolder'>Boost your links today</p>
  <button className='startedButton mb-5'>Get Started</button>
</div>






    </div>
  );
}

export default App;
