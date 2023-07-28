import React from 'react'

type Props = {
    id: string,
    label: string,
    type: string
}

export const Input: React.FC<Props> = ({id, label, type}) => {
    return (
        <div className='flex items-center'>
            <label htmlFor={id} className='px-2 text-right table-cell text-grey-mid w-24'>{label}</label>
            <input id={id} type={type} className='border border-grey-mid rounded table-cell h-8 flex-0' />
        </div>
    )
}