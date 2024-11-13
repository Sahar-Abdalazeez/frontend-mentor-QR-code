import "./App.css";
import qrCode from './qr-code.png';

function App() {
  return (
    <div className="App">
      <div className="qr-container">
        <img src={qrCode} alt={"QR-code"} />
        <p className="title">
          Improve your front-end <br /> skills by building projects
        </p>
        <p className="description">
          Scan the QR code to visit Frontend
          <br /> Mentor and take your coding skills to
          <br /> the next level
        </p>
      </div>
    </div>
  );
}

export default App;
