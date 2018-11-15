import React from 'react';
import gql from 'graphql-tag';
import { Query, Mutation } from 'react-apollo';

import IncrementForm from '../Counter/IncrementForm';
import Counter from '../Counter/Counter';

export const GET_COUNTER = gql`
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

const INCREMENT_COUNT_BY = gql`
    mutation IncrementCountBy($incrementBy: Int!) {
        incrementCountBy(incrementBy: $incrementBy) @client {
            incrementBy
        }
    }
`;

const Main = () => {
    return (
        <Query query={GET_COUNTER}>
            {({data}) => {
                const { counter } = data;
                const { count, incrementBy } = counter;
                return (
                    <Mutation mutation={INCREMENT_COUNT} variables={counter}>
                        {(incrementCount, {loading, error}) => {
                            return (
                                <div>
                                    <Mutation mutation={INCREMENT_COUNT_BY} variables={counter}>
                                        {(incrementCountBy, {loading, error}) => {                                                                    
                                            return (
                                                <div>
                                                    <Counter count={count} incrementBy={incrementBy} incrementCount={incrementCount} />
                                                    <IncrementForm incrementCountBy={incrementCountBy}  />
                                                </div>                                                    
                                            )                               
                                        }}                                        
                                    </Mutation>
                                </div>      
                            )
                        }}              
                    </Mutation>
                );                
            }}
        </Query>
    )        
}
 
export default Main;