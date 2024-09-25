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
                        key={`${badge}-${idx}`}
                        className={idx < limit && !isShow ? 'block' : isShow ? 'block' : 'hidden'}
                    >
                        {badge}
                    </Badge>
                )
            })}

            {badges?.length - limit && !isShow && (
                <button onClick={() => setIsShow(true)}>
                    <Badge>{badges.length - limit}+ Lainnya</Badge>
                </button>
            )}
        </div>
    )
}
