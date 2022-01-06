import React, { memo } from 'react'

const ChildB = ({name}) => {
    console.log('childB Render');
    return (
        <div>
            childB component {name}
        </div>
    )
}

export default memo(ChildB)
