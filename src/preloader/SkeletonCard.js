import React from 'react'
import Skeleton from 'react-loading-skeleton';
function SkeletonCard() {
    return (
        <section>
            <h2>
                <Skeleton duration={2} height={30} width={300} />
            </h2>
            <ul>
                {
                    Array(9).fill().map((item, index) => {
                        return (
                            <li key={index}  style={{margin: '20px 0px'}}>
                                <Skeleton height={40} width={500} />
                                <Skeleton height={40} width={'80%'} />
                                <Skeleton height={40} width={'50%'} />
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}

export default SkeletonCard;
