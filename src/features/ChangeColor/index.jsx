import React, { useState } from 'react';
import PropTypes from 'prop-types';

ChangeColorFeature.propTypes = {
    
};

function ChangeColorFeature(props) {
    const [color, setColor] = useState('White');
    return (
        <div>
            <p>{color}</p>
            <button onClick={()=>setColor('Black')}>Change to Black</button>
            <button onClick={()=>setColor('Red')}>Change to Red</button>
        </div>
    );
}

export default ChangeColorFeature;