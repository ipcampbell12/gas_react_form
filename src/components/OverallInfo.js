import React from 'react';

function OverallInfo(props) {
    console.log('This component is getting rendered')
    console.log("The visbility state passed is:", props.visbility)
    console.log("The overallInfo state passed is:", props.overallInfo)
    return (
        <React.Fragment>
            {
                !props.visbility && (
                    <div>
                        <h3>Family Information</h3>
                        <ul>
                            {
                                props.overallInfo &&
                                props.overallInfo.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))

                            }
                        </ul>
                    </div>
                )

            }



        </React.Fragment>
    );
}

export default OverallInfo;