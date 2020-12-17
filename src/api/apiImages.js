import React from 'react';
import { API } from '../config';

const ShowImages = ({item, url, github, img}, props) => (
    <div id={props.id} className={props.className} onClick={() => window.open(github, '_blank')}>
        <img src={img} className="mb-3"  style={{float: 'center', maxHeight: "90%", maxWidth: "90%"}} />
    </div>
);

export default ShowImages;