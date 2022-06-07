import React from 'react' 
import CardPutovanje from './CardPutovanje'

const CardsPutovanja = ({ mojaPutovanjas }) => {  
    return (
        <div className="row d-flex justify-content-center pt-4 pb-4">
            {mojaPutovanjas.map(mojaPutovanja => (  
                <div class="col-md-4 col-xs-3  col-sm-3 col-lg-3 pb-3" key={mojaPutovanja.id}>
                    <CardPutovanje putovanje={mojaPutovanja} {...mojaPutovanja} /> 
                </div>
            ))}
        </div>
    )
}

export default CardsPutovanja 