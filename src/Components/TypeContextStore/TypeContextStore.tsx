import React from 'react'
import {StoreContext} from './StoreContext';
import {store} from './Store'


const Names = () => {
    return (
        <StoreContext.Consumer>
            {store =>{
              console.log(store.test.name)
              return (
                  <div>
                      <h3>Hello my name is ContextAPI</h3>
                  </div>
              )
            } }
        </StoreContext.Consumer>
    )
}


export const TypeContextStore = () => {
    return <StoreContext.Provider value={store.getState()}>
        <div>
            <h3>Hello TypeContextStore</h3>
            <Names/>
        </div>
    </StoreContext.Provider>
}