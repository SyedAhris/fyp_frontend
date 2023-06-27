import React, {useEffect, useState} from "react";
import './Intersection.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTv} from "@fortawesome/free-solid-svg-icons";
import IntersectionTile from "./IntersectionTile/IntersectionTile";
import Layout from "../Layout/Layout";
import {Intersection} from "../../Classes/Intersection";

interface IntersectionProps {};

export interface IntersectionData {
    id: string;
    name: string;
    latitude: number;
    longitude: number;
    liveLink: string;
};

const IntersectionPage: React.FC<IntersectionProps> = () => {

    const [intersectionData, setIntersectionData] = useState<Intersection[]>([]);

    useEffect(() => {
        getData()
    }, []);


    const getData = async () => {
        try {
            const response = await fetch('http://192.168.0.100:3001/intersection/', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                // console.log(response);
                const data = await response.json();
                setIntersectionData(data);
                // console.log('GET request successful', data);
            } else {
                // console.log(response);
                throw new Error('GET request failed');
            }
        } catch (error) {
            console.error('Error making GET request', error);
        }
    };

    return (
        <Layout title={'Intersection'}>
            <div className={'intersection-layout'}>
                <div className={'intersection-card'}>
                    <div className={'intersection-heading'}>Intersections</div>
                    <div className={'intersection-headers'}>
                        <div className={'intersection-table-id'}>
                            ID
                        </div>
                        <div className={'intersection-table-name'}>
                            Intersection Name
                        </div>
                        <div className={'intersection-table-coordinates'}>
                            Coordinates
                        </div>
                        <div className={'intersection-table-live'}>
                            Live Feed
                        </div>
                    </div>
                    {intersectionData.map((intersectionData: Intersection) => {
                        return (
                            <div>
                            <hr className={'intersection-hr'}/>
                            <IntersectionTile  key={intersectionData._id}
                                               _id={intersectionData._id}
                                               location={intersectionData.location}
                                               name={intersectionData.name}
                                               signals={intersectionData.signals}/>
                            </div>
                        );
                    })}
                </div>
            </div>
        </Layout>
    );
}

export default IntersectionPage;