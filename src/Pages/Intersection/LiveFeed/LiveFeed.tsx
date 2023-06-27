import React, {useEffect, useState} from "react";
import './LiveFeed.css';
import {IntersectionData} from "../Intersection";
import Layout from "../../Layout/Layout";
import {useLocation} from "react-router-dom";
import LiveFeedTile from "./LiveFeedTile/LiveFeedTile";
import {faCar, faCarAlt, faRoad, faClock, faTrafficLight} from "@fortawesome/free-solid-svg-icons";
import {db} from "../../../Firebase/FirebaseConfig";
import {
    onValue, ref, onChildAdded, query,
    limitToLast,
} from 'firebase/database';
const LiveFeed: React.FC = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    // Extract the necessary props from the query parameters
    const intersectionData: any = {
        // Access the query parameter values
        // Example:
        id : queryParams.get('id') || '',
        name : queryParams.get('name') || '',
        latitude : parseFloat(queryParams.get('latitude') || '0'),
        longitude : parseFloat(queryParams.get('longitude') || '0'),
        signals : queryParams.get('signals')?.split(',') || '',
    };

    // console.log(intersectionData)

    const [imageData, setImageData] = useState<string | null>(null);
    const [data, setData] = useState({
        curr_green : 0,
        curr_green_duration_left : 0,
        next_green : '',
        next_green_duration : 0,
    });
    const [signal_1, setSignal_1] = useState({
        emergency : 0,
        non_emergency : 0,
        time_since_green: 0,
    });
    const [signal_2, setSignal_2] = useState({
        emergency : 0,
        non_emergency : 0,
        time_since_green: 0,
    });

    useEffect(() => {
        const myQuery = query(ref(db, 'realtime_data/intersection_1'), limitToLast(1));

        return onChildAdded(myQuery, (snapshot) => {
            // console.log('i ran');
            const vals = snapshot.val();
            if (snapshot.exists()) {
                setData(vals);
                setSignal_1(vals.signals.signal_1);
                setSignal_2(vals.signals.signal_2);
            }
        });
    }, []);

    console.log(data);
    // console.log(signal_2);
    return (
        <Layout title={'Live Feed'}>
            <div className={'live-feed-layout'}>
                <div className={'live-feed-card'}>
                    <div className={'live-feed-heading'}>Live Feed</div>
                    {/*show live feed here*/}
                    <div className={'live-feed-img-row'}>
                        {intersectionData.signals[0] !== undefined ?
                        <img className={'live-feed-stream-1'} src={'http://192.168.0.100:8000/streams/intersection_1_signal_1'} alt="Streamed Image" />
                        : null
                        }
                        {intersectionData.signals[1] !== undefined ?
                            <img className={'live-feed-stream-1'} src={'http://192.168.0.100:8000/streams/intersection_1_signal_2'} alt="Streamed Image" />
                            : null
                        }
                    </div>
                    <div>
                        {intersectionData.signals[2] !== undefined ?
                            <img className={'live-feed-stream-1'} src={'http://192.168.0.100:8000/streams/intersection_1_signal_1'} alt="Streamed Image" />
                            : null
                        }
                        {intersectionData.signals[3] !== undefined ?
                            <img className={'live-feed-stream-1'} src={'http://192.168.0.100:8000/streams/intersection_1_signal_1'} alt="Streamed Image" />
                            : null
                        }
                    </div>
                    <div className={'live-feed-stats'}>
                        <LiveFeedTile icon={faRoad} heading={'Intersection Name'} value={intersectionData.name}/>
                        <div className={'vl'}/>
                        <LiveFeedTile icon={faCar} heading={'Emergency Vehicles'} value={(signal_1.emergency + signal_1.emergency).toString()}/>
                        <div className={'vl'}/>
                        <LiveFeedTile icon={faCarAlt} heading={'Non Emergency Vehicles'} value={(signal_1.non_emergency + signal_1.non_emergency).toString()}/>
                    </div>
                    <div className={'live-feed-stats'}>
                        <LiveFeedTile icon={faTrafficLight} heading={'Current Green'} value={data.curr_green.toString()}/>
                        <div className={'vl'}/>
                        <LiveFeedTile icon={faClock} heading={'Current Green Duration'} value={data.curr_green_duration_left.toString()}/>
                        <div className={'vl'}/>
                        <LiveFeedTile icon={faTrafficLight} heading={'Next Green'} value={data.next_green.toString()}/>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default LiveFeed;