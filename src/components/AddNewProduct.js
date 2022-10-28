import { Form, Button } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';

const AddNewProduct = () =>{
    return(
        
        <Form>
            <Form.Group>
                <Form.Control 
                    type="text"
                    placeholder="productName"
                    
                />
            </Form.Group>
            <br></br>
            <Form.Group>
                <Form.Control 
                    type="text"
                    placeholder="storeName"
                    
                />
            </Form.Group>
            <br></br>
            <Form.Group>
                <Form.Control 
                    type="text"
                    placeholder="price"
                   
                />
            </Form.Group>
            <br></br>
            <Form.Group>
                    <Dropdown>
                      <Dropdown.Toggle >
                        Category
                      </Dropdown.Toggle>
                
                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Shoes For Kids</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Shoes For Men</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Shoes For Women</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
            </Form.Group>
            <br></br>
            <Form.Group>
                <Form.Control 
                    type="date"
                    placeholder="date"
                   
                />
            </Form.Group>
            <br></br>
            <Form.Group>
                <Form.Control 
                    type="text"
                    placeholder="img"
                    
                />
            </Form.Group>
            <br></br>
            <Form.Group>
                <Form.Control 
                    as="textarea"
                    placeholder="description"
                   
                />
            </Form.Group>
            <br></br>
            <Form.Group>
               <Form.Label>Status</Form.Label><br></br>
               <Form.Check name="status" label="In Stock" inline type="radio" />
               <Form.Check name="status" label="Temporary Out-of-stock" inline type="radio" />
               <Form.Check name="status" label="Not Available" inline type="radio" />
            </Form.Group>
            <br></br>
            <Button variant="success" type="submit" block>
                Add New Product
            </Button>
        </Form>

    )
}

export default AddNewProduct