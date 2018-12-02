import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Loader from './components/layout/Loader/Loader'

// Redux & firebase
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { rootReducer } from './store/reducers/rootReducer'
import thunk from 'redux-thunk'
import { getFirebase, reactReduxFirebase } from 'react-redux-firebase'
import { getFirestore, reduxFirestore } from 'redux-firestore'
import fbconfig from './config/fbconfig'

const store = createStore(rootReducer, 
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
        reactReduxFirebase(fbconfig, { useFirestoreForProfile: true, userProfile: 'users', attachAuthIsReady: true}),
        reduxFirestore(fbconfig)
    )
)

ReactDOM.render(<Loader loading={true} />, document.getElementById('root'))

store.firebaseAuthIsReady.then(() => {
    ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'))
})