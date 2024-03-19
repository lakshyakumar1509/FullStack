import React from 'react';
import PropTypes from 'prop-types';
import { Suspense } from 'react';
import ErrorBoundary from './ErrorBoundary';
import loader from '../assets/images/loader2.gif';
const LazySuspense = ({ component: Component, ...rest }) => {
    return (
        <Suspense fallback={<img src={loader} alt='Loader' style={{ display: 'block', margin: 'auto' }}/>}>
            <ErrorBoundary>
                <Component {...rest} />
            </ErrorBoundary>
        </Suspense>
    );
};

LazySuspense.propTypes = {
    component: PropTypes.elementType.isRequired
};

export default LazySuspense;
