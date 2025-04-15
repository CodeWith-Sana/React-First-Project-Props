import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

//  This function accepts 4 Parameters
function ProductCard({image , title , price , descrip}) {
  const productadded = () =>{
    alert('Product has been added successfully..!');

  };
  return (
    <div >   
        <Card  style={{ width: '200px', height:'280px' }}>
          <Card.Img variant="top" src = {image} style={{ width: '100%', height:'100px', objectFit:'cover' }} />
          <Card.Body>
            <Card.Title style={{ fontSize: '14px', color: 'black' }}>{title}</Card.Title>
            <Card.Text style={{ fontSize: '10px', color: '#222222' }}>{price}</Card.Text>
             <Card.Text style={{ fontSize: '10px', color: '#222222' }}>{descrip}</Card.Text>
            <Button className='btn-add' onClick={productadded}>Add to cart</Button>
          </Card.Body>
        </Card>
     
    </div>
  );
}

export default ProductCard;



