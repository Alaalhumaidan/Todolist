import './App.css';
import ReactDOM from 'react-dom';


function App() {

  const Timeline = (props) => {
   
    return (

      <div className="timeline">
        <div className="timeline-progress"></div>
        <div className="timeline-items">
        <div className="timeline-title">
      Alaa's Timeline!
      </div>
          <div className="timeline-item">
            <div className="timeline-content">
              1997
            </div>
            <div className="timeline-description">
            Hello World! I was born.
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-content">
              2003
            </div>
           <div className="timeline-description">
            I got my fav & only sister
           </div>
          </div>
                  <div className="timeline-item">
            <div className="timeline-content">
              2014
            </div>
            <div className="timeline-description">
            Graduated HighSchool!
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-content">
              2018
            </div>
            <div className="timeline-description">
              Started my own business in the age of 21! Started to DEPEND on myself.
              </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-content">
              2019
            </div>
            <div className="timeline-description">
              GRADUATED UNI ! 
              </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-content">
              2020
            </div>
            <div className="timeline-description">
             Started my Master's degree !!!!
              </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-content">
              2021
            </div>
            <div className="timeline-description">
              Joined CODED!
              &Hopefully graduating my Master's
              </div>
          </div>
        </div>
      </div>
    )
  }
  <reportWebVitals/>
  
  ReactDOM.render(<Timeline />, document.getElementById('root'))
  }

export default App;
