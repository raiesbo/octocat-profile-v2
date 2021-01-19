import ChartTopLanguages from "./chartTopLanguages.component";
import ChartMostStarred from "./chartMostStarred.component";
import ChartStarsLanguage from "./chartStarsLanguage.component";
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
                                <h4 className="chart-title">Most Used Languages:</h4>
                                {reposData ? <ChartTopLanguages reposData={ reposData } /> : <i className="fas fa-spinner fa-4x"></i>}
                            </div>
                        </div>

                        <div className="chart-container">
                            <div className="chart-main chart2">
                                <h4 className="chart-title">Top Starred Repos:</h4>
                                {reposData ? <ChartMostStarred reposData={ reposData } /> : <i className="fas fa-spinner fa-4x"></i>}
                            </div>
                        </div>

                        <div className="chart-container">
                            <div className="chart-main chart3">
                                <h4 className="chart-title">Stars Per Language:</h4>
                                {reposData ? <ChartStarsLanguage reposData={ reposData } /> : <i className="fas fa-spinner fa-4x"></i>}
                            </div>
                        </div>

                    {/* </div> */}

                </div>

            </div>

        </div> 
        
    )
}


export default Stats;