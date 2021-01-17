import ChartOne from "./chartOne.component";
// import ChartTwo from "./ChartTwo.component";
// import ChartThree from "./ChartThree.component";
import "./stats.styles.css";


const Stats = ({ reposData }) => {

    return (
        <div className="stats-container">

            <div className="stats-main">

                <h3 className="section-title">Stats:</h3>
                <div className="charts-container">

                    {/* <div className="charts-main"> */}

                        <div className="chart-container">
                            <div className="chart-main chart1">
                                <h4>Top Languages:</h4>
                                {reposData ? <ChartOne reposData={ reposData } /> : <i className="fas fa-spinner fa-4x"></i>}
                            </div>
                        </div>

                        <div className="chart-container">
                            <div className="chart-main chart2">
                                <h4>Stars per Language:</h4>
                                <i className="fas fa-spinner fa-4x"></i>
                            </div>
                        </div>

                        <div className="chart-container">
                            <div className="chart-main chart3">
                                <h4>Starred Repos:</h4>
                                <i className="fas fa-spinner fa-4x"></i>
                            </div>
                        </div>

                    {/* </div> */}

                </div>

            </div>

        </div> 
        
    )
}


export default Stats;