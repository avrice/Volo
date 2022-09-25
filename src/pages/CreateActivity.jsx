import React, { useState } from 'react';
import axios from 'axios';

export const CreateActivity = () => {
    const [title, setTitle] = useState('');
    const [college, setCollege] = useState('');
    const [netId, setNetId] = useState('');
    const [contactName, setContactName] = useState('');
    const [location, setLocation] = useState('');
    const [startDate, setStartDate] = useState(0);
    const [startTime, setStartTime] = useState(0);
    const [endDate, setEndDate] = useState(0);
    const [endTime, setEndTime] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            title: title,
            netId: netId,
            contactName: contactName,
            location: location,
            startDate: startDate,
            endDate: endDate,
            endTime: endTime
        }
        let parsedCollege = college.toLowerCase().split(' ')[0];

        axios.post(`/events/${parsedCollege}/`, {
            data: data
        })
    }

}