import { useEffect, useState } from 'react';
import { services } from '../../assets/data/services';
import ServiceCard from './ServiceCard';
import { useDispatch, useSelector } from 'react-redux';
import { getSpecializedActions } from '../../redux/action/doctor.action';

const dataJoin = [
    { textColor: '#FEB60D', bgColor: 'rgba(151, 115, 255, .2)' },
    { textColor: '#9771FF', bgColor: 'rgba(151, 113, 255, .2)' },
    { textColor: '#01B5C5', bgColor: 'rgba(1, 181, 197, .2)' },
    { textColor: '#01B5C5', bgColor: 'rgba(1, 181, 199, .2)' },
    { textColor: '#FEB60D', bgColor: 'rgba(254, 182, 13, .2)' },
    { textColor: '#9771FF', bgColor: 'rgba(151, 113, 255, .2)' },
];

const ServiceList = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState([]);

    const getListSpecialized = useSelector(
        (state) => state.doctor.listSpecialized,
    );

    useEffect(() => {
        dispatch(getSpecializedActions());
    }, []);

    useEffect(() => {
        getListSpecialized?.length > 0 &&
            setData(() => {
                const joinedData = getListSpecialized?.map((item, index) => ({
                    ...item,
                    ...dataJoin[index],
                }));

                return joinedData;
            });
    }, []);
    return (
        <div className="container">
            <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px]
    lg:mt-[55px]"
            >
                {data &&
                    data?.map((item, index) => (
                        <ServiceCard item={item} index={index} key={index} />
                    ))}
            </div>
        </div>
    );
};

export default ServiceList;
