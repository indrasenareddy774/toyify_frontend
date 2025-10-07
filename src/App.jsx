import logo1 from './assets/logo1.png'
import './App.css'

function App() {
  return (
    <>
      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        {/* Logo Image */}
        <img 
          src={logo1} 
          alt="Toyify Logo" 
          style={{ width: '150px', height: 'auto', marginBottom: '20px' }}
        />

        {/* Heading and Description */}
        <h3>Welcome to Toyify...!</h3>
        <p>
          Fun & Safe Toys for Every Kid. We bring joy to children's lives with
          high-quality, safe, and educational toys.
        </p>
      </div>
    </>
  )
}

export default App
