import React from 'react';

export const LeaderboardPanel = () => {
    // Fetch leaderboard from db and store it as a list of objects or whatever
    const lb = [
        {
            name: 'John Doe',
            hours: 10
        },
        {
            name: 'Jane Doe',
            hours: 15
        }
    ]
    return (
        <p>{lb.map((user) => <p>{user.name} | {user.hours}</p>)}</p>
    )
}