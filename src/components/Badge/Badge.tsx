import React, { useContext } from 'react';
import { AppContext } from '../../context/appContext';

interface IBadgeProps {
    badgeName: string
    badgeColor?: string
}


function Badge({badgeName, badgeColor}: IBadgeProps) {

    const { setFilter } = useContext(AppContext)

    function handleClick(event: React.MouseEvent<HTMLElement>) {
        event.stopPropagation();
        setFilter(badgeName)
    }

    return (
        <button 
            className="rounded-full px-4 py-2 text-cyan-50 ml-3 whitespace-nowrap mr-8"
            style={{ backgroundColor: badgeColor}}
            onClick={handleClick}
            >
            {badgeName}
        </button>
    );
}

export default Badge;