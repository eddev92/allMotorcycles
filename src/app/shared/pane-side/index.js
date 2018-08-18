import React from 'react';
import '../../styles/pane-side.css';

const PaneSideComponent = ({show = false}) => {
        return (
            <div className={show ? 'main-side showSide' : 'main-side'}>
                side
            </div>
        );
}

export default PaneSideComponent;
