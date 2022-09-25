// convert
const instance = axios.create({
    baseURL: 'https://web-production-3a7b.up.railway.app'
});

function setAuth(authToken) {
    instance.defaults.headers.common['Authorization'] = authToken;
}

function getEventAttendance(eventId) {
    return instance.get(`/attendance/${eventId}`);
}

function getLeaderboardByCollege(collegeName) {
    return instance.get(`/colleges/${collegeName}/leaderboard/`);
}

function getUserById(userId) {
    return instance.get(`/users/${userId}`);
}

function getEventsByCollege(collegeName) {
    return instance.get(`/events/${collegeName}`);
}

function getCollaborators(collegeName) {
    return instance.get(`/collaborators/${collegeName}`);
}

function createEvent(collegeName, event) {
    return instance.post(`/events/${collegeName}`, event);
}

function updateEvent(collegeName, eventId, event) {
    return instance.put(`/events/${collegeName}`, event, { params: {event_id: eventId}});
}

function deleteEvent(collegeName, eventId) {
    return instance.delete(`/events/${collegeName}`), { params: {event_id: eventId}};
}

function addAttendance(eventId) {
    return instance.post(`/attendance/${eventId}`);
}

function removeAttendance(eventId) {
    return instance.delete(`/attendance/${eventId}`);
}

function updateUserInfo(userId, collegeName) {
    return instance.put(`/users/${userId}`, { 'affiliation': collegeName});
}

function updateAttendance(eventId) {
    return instance.put(`/attendance/${eventId}`);
}
