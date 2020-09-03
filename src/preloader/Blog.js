import React from 'react'
import Card from './Card';

function Blog({ data }) {
    // console.log('blog section', data)
    return (
        <>
            {
                data.map((data, index) => {
                    return (
                        <Card data={data} key={index} />
                    )
                })
            }
        </>
    )
}

export default Blog;
