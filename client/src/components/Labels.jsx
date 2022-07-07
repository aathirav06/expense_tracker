import React from 'react'


const obj = [

    {

        type: "Savings",
        color: 'var(--color-yellow)',
        percent: 45

    },

    {

        type: "Investments",
        color: 'var(--color-yellow)',
        percent: 20

    },

    {

        type: "Expense",
        color: 'var(--color-yellow)',
        percent: 10

    },




]
const Labels = () => {
    return (
        <>
            {obj.map((v,i)=><LabelComponent key={i} data={v}></LabelComponent>)}
        </>
    )
}

export default Labels

function LabelComponent({data}) {
    if(!data) return <></>
    return (
        <div className="labels flex justify-between">
            <div className="flex gap-2">
                <div className="w-2 h-2 rounded py-3" style={{ background:data.color??'var(--color-yellow)' }}></div>
                <h3 className='text-md'>(data.type??'')</h3>
            </div>
            <h3 className='font-bold'>(data.percent??0)%</h3>
        </div>
    )
}