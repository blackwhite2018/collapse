import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Collapse.css';

const Collapse = ({ collapseLable, expandedLable, children  }) => {
    const [isExpanded, setExpanded] = useState(false);

    const handleExpandedChange = evt => {
        setExpanded(prevValue => !prevValue);
    };

    return (
        <div className="collapse">
            <div className="collapse__header">
                <button type="button" className="btn btn-collapse" onClick={ handleExpandedChange }>
                    { isExpanded ? collapseLable : expandedLable }
                </button>
            </div>
            <div className={ `collapse__body ${ isExpanded ? '' : 'collapse__body--show' }` }>
                { children }
            </div>
        </div>
    );
};

Collapse.defaultProps = {
    collapseLable: 'Подробнее',
    expandedLabel: 'Скрыть'
};

Collapse.propTypes = {
    props: PropTypes.shape({
        collapseLable: PropTypes.string,
        expandedLable: PropTypes.string
    })
};

export default Collapse;

