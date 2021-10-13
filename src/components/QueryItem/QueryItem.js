import './QueryItem.scss';

function QueryItem({ text, onMouseDown }) {

    return (
        <li className='query-item' onMouseDown={() => onMouseDown(text)}>{text}</li>
    )
}

export default QueryItem;