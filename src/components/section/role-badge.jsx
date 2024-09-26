import React, { useState } from 'react'
import { Badge } from '../ui/badge'

export const RoleBadge = ({ badges }) => {
    const limit = 5

    const [isShow, setIsShow] = useState(false)

    return (
        <div className='flex flex-wrap gap-3'>
            {badges.map((badge, idx) => {
                return (
                    <Badge
                        key={idx}
                        className={(idx < limit) > 0 && !isShow ? 'block' : isShow ? 'block' : 'hidden'}
                    >
                        {badge.title}
                    </Badge>
                )
            })}

            {badges?.length - limit > 0 && !isShow && (
                <button onClick={() => setIsShow(true)}>
                    <Badge>{badges.length - limit > 0 ? badges.length - limit : 0}+ Lainnya</Badge>
                </button>
            )}
        </div>
    )
}
