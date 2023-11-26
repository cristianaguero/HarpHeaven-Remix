import { Link } from 'react-router-dom';
import { moneyFormat } from '~/helpers';

function Harp({ harp }) {

    const { name, price, image, description, url } = harp;

    const imageSrc = image.data.attributes.formats.medium.url;
    const title = description[0].children[0].text;
    const content = description[1].children[0].text;


    return (
        <div className="harp">

            <img src={imageSrc} alt={`harmonica ${name} image`} />
            
            <div className="content">
                <h3>{name}</h3>
                <h4>{title}</h4>
                <p className='description'>{content}</p>
                <p className='price'>{moneyFormat(price)}</p>

                <Link className='link' to={`/harps/${url}`}>View product</Link>
            </div>
        </div>
    )
}

export default Harp