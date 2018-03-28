function toJSON( form, stringOnly ){
  const data = new FormData( form );
  const json = {};

  for( let [ name, value ] of data ){

    if( stringOnly && typeof value !== 'string' ){
      continue;
    }

    // don't store empty file inputs
    if( value.constructor.name === 'File' && value.size === 0 ){
      continue;
    }

    if( json[ name ]){
      // push the value
      if( Array.isArray( json[ name ])){
        json[ name ].push( value );

        continue;
      }

      // transform into an array
      json[ name ] = [ json[ name ], value ];

      continue;
    }

    // create pair
    json[ name ] = value;
  }

  return json;
}

export default toJSON;
