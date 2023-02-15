import React, { useState, useEffect } from 'react';
import MediaCard from '../../components/card/mediacard';

import { Container } from './styled/user.styled';

const Users = () =>{
    const [data, setData] = useState<any>([]);

    useEffect(()=>{
        fetch('https://random-data-api.com/api/v2/users?size=5&response_type=json')
        .then(response => response.json())
        .then(json => {
            setData(json);
        });
    },[]);

    return (
        <Container>
            {
                data && data.map((user: any, index: number) => (
                    <MediaCard img={user?.avatar} title={user?.first_name} description={user?.phone_number} />
                ))
            }
        </Container>
        
    );
}

export default Users;