import './Image.scss';

const Image = ({ src }) => {
    return (
        <div className='img-wrap'>
            <img className='image' src={src} alt='img'/>
        </div>
    )
}

export default Image;