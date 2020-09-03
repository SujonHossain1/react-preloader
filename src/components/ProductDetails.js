import React from 'react'
import ContentLoader from 'react-content-loader'

const ProductDetails = (props) => {
    const length = props.data.length;
    console.log(length) // props length =  10;
    const loopArray = [0, 1, 2, 3, 4];
    const newLength = length - loopArray.length; // props length 10 - 5 = 5;


    if (loopArray.length < length) {
        for (let i = newLength; i < length; i++) {
            loopArray.push(i);
            console.log(i)
        }
    }


    return (
        <div style={{textAlign: 'left'}}>

            {
                loopArray.map((item, index) => {
                    return (
                        <div key={index}>
                            <ContentLoader
                                speed={2}
                                width={440}
                                height={150}
                                viewBox="0 0 400 150"
                                backgroundColor="#f3f3f3"
                                foregroundColor="#ecebeb"
                                
                            >
                                <rect x="10" y="18" rx="0" ry="0" width="390" height="150" />
                             
                            </ContentLoader>
                        </div>
                    )
                })
            }
        </div>

    )
}


export default ProductDetails