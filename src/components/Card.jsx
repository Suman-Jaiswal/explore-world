import React, { useContext } from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { ThemeContext } from '../ThemeContext';

export default function CardComponent(props) {

    const {darkMode} = useContext(ThemeContext)
    const {
        name,
        capital,
        region,
        alpha2Code,
        altSpellings,
        callingCodes
    } = props.country

    return (
        <>
            <Card style={{ width: '18rem', margin: '10px auto', boxShadow: '0 1px 1px 0 rgba(0,0,0,0.4)' }}
              bg={darkMode? 'dark': 'light'}
              text={darkMode? 'light': 'dark'}
            >
                <Card.Img variant="top" src={`https://flagcdn.com/256x192/${alpha2Code.toLowerCase()}.webp`} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {altSpellings.slice(0, 2).map(s => <span className='me-2' >{s}</span>)}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Capital: {capital}</ListGroupItem>
                    <ListGroupItem>Region: {region}</ListGroupItem>
                    <ListGroupItem>
                        Calling codes:   {callingCodes.map(s => <span className='me-2' >{s}</span>)}
                    </ListGroupItem>
                </ListGroup>
            </Card>
        </>

    )
}

