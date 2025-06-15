import 'boxicons'
import img from './img2/chart1.PNG'
import img2 from './img2/char2.PNG'
const Dashboard = () => {
    return(
        <>
            <div className="dashboard container">
                <div className="dash-nav d-flex pt-4 pb-2 justify-content-md-between justify-content-around container">
                  <p> <span className='dash-icon shadow '><box-icon name='home-heart' color='#ffff' width='30px' height='30px'></box-icon></span><span>Dashboard</span></p>
                  <p><span>Overview</span><box-icon name='info-circle' color='#da8cff' ></box-icon></p>
                </div>
                <div className="dash-cards container">
                    <div className="row ">

                    <div className="dash-cards col-md-4 col-12">
                        <div className="cards c1 shadow">
                        <h4>Weekly Salees<span><box-icon name='line-chart' color='#ffffff' ></box-icon></span></h4>
                        <h2><span>₹</span>12,0000</h2>
                        <p className='d-flex gap-2 mt-2 '>Increase by 60%<span><box-icon name='up-arrow' type='solid' color='#12ec22' ></box-icon></span></p>
                        </div>
                        </div>

                        <div className="dash-cards col-md-4 col-12 py-md-0 py-2" >
                        <div className="cards c2 shadow">
                        <h4>Weekly Orders<span><box-icon name='bookmark' type='solid' color='#ffffff' ></box-icon></span></h4>
                        <h2><span>₹</span>45,00000</h2>
                        <p className='d-flex gap-2 mt-2 '>Decreased by 10% <span><box-icon name='down-arrow' type='solid' color='#E61731' ></box-icon></span></p>
                        </div>
                        </div>

                        <div className="dash-cards col-md-4 col-12">
                        <div className="cards c3 shadow">
                        <h4>Visitiors Online<span><box-icon name='diamond'  color='#ffffff'></box-icon></span></h4>
                        <h2><span>₹</span>12,00000</h2>
                        <p className='d-flex gap-2 mt-2 '>Increase by 10%<span><box-icon name='up-arrow' type='solid' color='#21FF04' ></box-icon></span></p>
                        </div>
                        </div>

                    </div>
                </div>

                <div className="charts py-5 container">
                    <div className="row  ">
                        <div className="col-md-7 col-12">
                            <div className="chart1 ">
                                <img src={img} alt="chart1" className='rounded-3' />
                            </div>
                        </div>
                        <div className="col-md-5  col-12 py-3 py-md-0">
                            <div className="chart2 chart">
                                <img src={img2} alt="chart2" className='rounded-3' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </> 
    )
}
export default Dashboard;