import { Link } from 'react-router-dom';
import './Button.scss';

export default function Button(props) {
    return (
        <>
            <Link className={props.classes} to={props.link} style={props.clicked ?
                {
                    color: `${props.color}`,
                    backgroundColor: `transparent`,
                    border: props.border && `2px solid ${props.color}`,
                    padding: props.padding ? `${props.padding}` : "8px 10px",
                    borderRadius: '14px'
                } :
                {
                    color: `#fff`,
                    backgroundColor: props.color,
                    border: `2px solid ${props.color}`,
                    padding: props.padding ? `${props.padding}` : "8px 10px",
                    borderRadius: '14px'
                }
            }><span>{props.text}</span>{props.object}</Link>
        </>
    );
}