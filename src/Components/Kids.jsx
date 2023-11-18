import React from 'react'
import KidsRecord from './Kids.json'
import { Button, Card } from 'react-bootstrap'

function Kids() {
  return (
    <div>

<div class="row">
           {KidsRecord.map(data=>{
            return(
                <Card className="b-4" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={data.image} />
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text>
          {data.description}
        </Card.Text>
        <Card.Text>Rs.{data.price} ( 20%off )</Card.Text>
        <Button class="btn btn-outline-secondary" data-mdb-ripple-color="dark">Add to cart</Button>&nbsp;&nbsp;&nbsp;
        <Button class="btn btn-outline-secondary" data-mdb-ripple-color="dark">Buy Now</Button>
      </Card.Body>
    </Card>
            )
           })}
        </div>
        
    </div>
  )
}

export default Kids