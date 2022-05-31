import React from 'react';
import '../Component/Javascript/fbConnector.astro';

export default function Content() {

    return (
        
        
        <div className='flex place-content-center py-16'>
            <div className="box-border h-64 w-64 p-7 border-4 rounded-lg mt-5">
                <div>
                    <h1>Fetched Information</h1>

                    <div className='my-5'>
                        <div id="Name"></div>
                        <div id="nickName"></div>
                        <div id="Email"></div>
                        {/* <div id="Birthday"></div>
                        <div id="Age"></div>
                        <div id="Gender"></div> */}
                    </div>
                </div>
                

            </div>
        </div>
    );
}