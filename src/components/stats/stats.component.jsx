import ChartContainer from "./chartContainer.component";
import ChartMostStarred from "./chartMostStarred.component";
import ChartStarsLanguage from "./chartStarsLanguage.component";
import ChartTopLanguages from "./chartTopLanguages.component";
import "./stats.styles.css";


export default function Stats({ reposData }) {

    return (
        <div className="stats-container">
            <div className="stats-main">
                <h3 className="section-title">Stats:</h3>
                <div className="charts-container">
                    <ChartContainer title={'Most Used Languages:'}>
                        {reposData ? <ChartTopLanguages reposData={reposData} /> : <i className="fas fa-spinner fa-4x"></i>}
                    </ChartContainer>
                    <ChartContainer title={'Top Starred Repos:'}>
                        {reposData ? <ChartMostStarred reposData={reposData} /> : <i className="fas fa-spinner fa-4x"></i>}
                    </ChartContainer>
                    <ChartContainer title={'Stars Per Language:'}>
                        {reposData ? <ChartStarsLanguage reposData={reposData} /> : <i className="fas fa-spinner fa-4x"></i>}
                    </ChartContainer>
                </div>
            </div>
        </div>
    )
}
