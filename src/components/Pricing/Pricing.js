import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {
    const pricingOptions = [
        { id: 1, name: 'Free', price: 0 },
        { id: 2, name: 'Regular', price: 9.99 },
        { id: 3, name: 'premium', price: 19.99 },
    ]
    return (
        <div className='bg-indigo-200 p-4 mt-8'>
            <h1 className='text-6xl font-mono text-white'>Best Deals of the Town</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat velit ea eos sed vitae sint praesentium cum, ipsa aperiam adipisci et vel!</p>
            <div className='grid md:grid-cols-3 gap-3 mt-8'>
                {
                    pricingOptions.map(option => <PricingOption
                        key={option.id}
                        Option={option}
                    ></PricingOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;