import React from 'react';
import gql from 'graphql-tag';
import { Query, Mutation } from 'react-apollo';

const GET_COUNTER = gql`
    {
        counter {
            count,
            incrementBy
        }
    }
`;

const INCREMENT_COUNT = gql`
    mutation IncrementCount($count: Int!, $incrementBy: Int!) {
        incrementCount(count: $count, incrementBy: $incrementBy) @client {
            count
        }
    }
`;  

const Counter = () => {
    return (
        <Query query={GET_COUNTER}>
            {({data}) => {
                const { counter } = data;
                const { count, incrementBy } = counter;
                return (
                    <Mutation mutation={INCREMENT_COUNT} variables={counter}>
                        {(incrementCount, {loading, error}) => {
                            if (loading) return <h1>Loading...</h1>;
                            if (error) return <h1>Error {error}</h1>

                            return (
                                <div>
                                    <h1>{count}</h1>
                                    <button onClick={incrementCount}>Increment by {incrementBy}</button>
                                </div>      
                            )
                        }}              
                    </Mutation>
                );                
            }}
        </Query>
    )
}
 
export default Counter;