import { PropTypes } from 'prop-types'
function Badge ({content}) {
    return (
        <div className="badge">
            {content}
        </div>
    )
}

Badge.propTypes = {
    content: PropTypes.string.isRequired
}

export default Badge;