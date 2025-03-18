import React from "react"
import PropTypes from "prop-types";

const SkillCard = ({ name, icon, color, description }) => (
    <div className="skill-card">
        <div className="skill-icon" style={{ '--icon-color': color }}>
            {React.cloneElement(icon, { style: { color } })}
        </div>
        <h3 className="skill-name">
            {name}
        </h3>
        <p className="skill-description">
            {description}
        </p>
    </div>
);

SkillCard.propTypes = {
    name: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
    color: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

export default React.memo(SkillCard);