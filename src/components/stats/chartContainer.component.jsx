import "./chartContainer.styles.css";

export default function ChartContainer({ children, title }) {
    return (
        <div className="chart-container">
            <div className="chart-main chart1">
                <h4 className="chart-title">{title}</h4>
                {children}
            </div>
        </div>
    )
}