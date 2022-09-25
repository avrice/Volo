// convert
import axios from "axios";

const instance = axios.create({
    baseURL: 'https://web-production-3a7b.up.railway.app'
});

export function setAuth(authToken) {
    instance.defaults.headers.common['Authorization'] = authToken;
}

export function getEventAttendance(eventId) {
    return instance.get(`/attendance/${eventId}`);
}

export function getLeaderboardByCollege(collegeName) {
    return instance.get(`/colleges/${collegeName}/leaderboard`);
}

export function getUserById(userId) {
    return instance.get(`/users/${userId}`);
}

export function getEventsByCollege(collegeName) {
    return instance.get(`/events/${collegeName}`);
}

export function getCollaborators(collegeName) {
    return instance.get(`/collaborators/${collegeName}`);
}

export function createEvent(collegeName, event) {
    return instance.post(`/events/${collegeName}`, event);
}

export function updateEvent(collegeName, eventId, event) {
    return instance.put(`/events/${collegeName}`, event, { params: {event_id: eventId}});
}

export function deleteEvent(collegeName, eventId) {
    return instance.delete(`/events/${collegeName}`), { params: {event_id: eventId}};
}

export function addAttendance(eventId) {
    return instance.post(`/attendance/${eventId}`);
}

export function removeAttendance(eventId) {
    return instance.delete(`/attendance/${eventId}`);
}

export function updateUserInfo(userId, collegeName) {
    return instance.put(`/users/${userId}`, { 'affiliation': collegeName});
}

export function updateAttendance(eventId) {
    return instance.put(`/attendance/${eventId}`);
}

export * as api from './api';