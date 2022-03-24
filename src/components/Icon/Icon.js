import './Icon.scss'

const Icon = (props) => {

    let defaultProps = {
        size: 20,
        color: '#000',
        path: '',
        style: {}
    }

    defaultProps = { ...defaultProps, ...props }

    return (
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width={defaultProps.size} height={defaultProps.size} viewBox="0 0 20 20" style={defaultProps.style}>
            <path d={defaultProps.path} fill={ defaultProps.color }></path>
        </svg>
    )
}

export default Icon