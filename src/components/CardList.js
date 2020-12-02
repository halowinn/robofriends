import React from 'react';
import Card from './Card';
// import Linking from 'react-native'

const CardList = ({ robots }) => {
return (
    <div>
            {/* <React.StrictMode> */}
            {   
                robots.map((user,i) => {
                    return (
                        <Card 
                            key={i} 
                            id={robots[i].id} 
                            name={robots[i].name} 
                            // social={robots[i].social}
                            email={robots[i].email}
                            // onPress={() => Linking.openURL('robots[i].social')}
                        />
                    )
                })
            }
            {/* </React.StrictMode>, */}
        </div>
    )
}

export default CardList