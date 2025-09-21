import 'boxicons'
import img from './img2/chart1.PNG'
import img2 from './img2/char2.PNG'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const visitorsData = [
  { month: 'Jun', visitors: 9 },
  { month: 'Jul', visitors: 12 },
  { month: 'Aug', visitors: 14 },
  { month: 'Sep', visitors: 24 },
];
const Dashboard = () => {
    return(
        <>
            <div className="dashboard container">
                {/* Top Nav */}
                <div className="dash-nav d-flex pt-4 pb-2 justify-content-md-between justify-content-around container">
                  <p>
                    <span className='dash-icon shadow '>
                      <box-icon name='home-heart' color='#ffff' width='30px' height='30px'></box-icon>
                    </span>
                    <span>Dashboard</span>
                  </p>
                  <p>
                    <span>Overview</span>
                    <box-icon name='info-circle' color='#da8cff'></box-icon>
                  </p>
                </div>

                {/* Cards */}
                <div className="dash-cards container">
                    <div className="row ">

                        {/* Projects */}
                        <div className="dash-cards col-md-4 col-12">
                            <div className="cards c1 shadow">
                                <h4>No. of Projects
                                    <span><box-icon name='briefcase-alt' color='#ffffff'></box-icon></span>
                                </h4>
                                <h2>3</h2>
                                <p className='d-flex gap-2 mt-2 '>Updated Recently
                                    <span><box-icon name='time' type='solid' color='#12ec22'></box-icon></span>
                                </p>
                            </div>
                        </div>

                        {/* Certifications */}
                        <div className="dash-cards col-md-4 col-12 py-md-0 py-2">
                            <div className="cards c2 shadow">
                                <h4>No. of Certifications
                                    <span><box-icon name='award' type='solid' color='#ffffff'></box-icon></span>
                                </h4>
                                <h2>4</h2>
                                <p className='d-flex gap-2 mt-2 '>Verified Certificates
                                    <span><box-icon name='check-circle' type='solid' color='#E6FF31'></box-icon></span>
                                </p>
                            </div>
                        </div>

                        {/* Contact Requests */}
                        <div className="dash-cards col-md-4 col-12">
                            <div className="cards c3 shadow">
                                <h4>Contact Requests
                                    <span><box-icon name='envelope' color='#ffffff'></box-icon></span>
                                </h4>
                                <h2>10</h2>
                                <p className='d-flex gap-2 mt-2 '>New This Week
                                    <span><box-icon name='message-detail' type='solid' color='#21FF04'></box-icon></span>
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Charts */}
                <div className="charts container mt-5">
        <h4 className="mb-3">Portfolio Visitors (Monthly)</h4>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={visitorsData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="visitors" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

            </div>
        </> 
    )
}

export default Dashboard;
 