import { Link } from '@remix-run/react';
import { moneyFormat } from '~/helpers';

function Harp({ harp }) {

    const { name, price, image, description, url } = harp;

    const imageSrc = image.data.attributes.formats.medium.url;

    return (
        <div className="harp">

            <img src={imageSrc} alt={`harmonica ${name} image`} />
            
            <div className="content">
                <h3>{name}</h3>
                <p className='description'>{description}</p>
                <p className='price'>{moneyFormat(price)}</p>

                <Link className='link' to={`/harps/${url}`}>View product</Link>
            </div>
        </div>
    )
}

export default Harp