import toJSON from './toJSON';

const escape = window.encodeURIComponent;

function toQuery( form ) {
  const params = toJSON( form, true );

  return Object.keys( params ).map( key => {
    if( Array.isArray( params[ key ])){
      return params[ key ].map( value => {
        return `${escape( key )}=${escape( value )}`;
      }).join( '&' );
    }

    return `${escape( key )}=${escape( params[ key ])}`;
  })
    .join( '&' );
}

export default toQuery;
