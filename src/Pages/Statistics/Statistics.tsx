import React from "react";
import './Statistics.css';
import Layout from "../Layout/Layout";
import StatisticsTile from "./StatisticsTile/StatisticsTile";
import {faBarChart, faLineChart} from "@fortawesome/free-solid-svg-icons";

interface StatisticsProps {};

const Statistics: React.FC<StatisticsProps> = () => {
    return (
        <Layout title={'Statistics'}>
            <div className={'statistics-layout'}>
                <div className={'statistics-summary-layout'}>
                    <div className={'statistics-summary-text'}>
                        <div className={'statistics-summary-heading'}>Traffic Statistics</div>
                        <div className={'statistics-summary-subheading'}>Summary</div>
                    </div>
                    <div className={'statistics-summary-tile-layout'}>
                        <StatisticsTile title={'Model Average Accuracy'} value={'87.64'} icon={faBarChart} primaryColor={'#FA5A7D'} secondaryColor={'#FFE2E5'}/>
                        <StatisticsTile title={'Non Emergency Vehicles/Day'} value={'348'} icon={faLineChart} primaryColor={'#FF947A'} secondaryColor={'#FFF4DE'}/>
                        <StatisticsTile title={'Emergency Vehicles/Day'} value={'20'} icon={faLineChart} primaryColor={'#3CD856'} secondaryColor={'#DCFCE7'}/>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Statistics