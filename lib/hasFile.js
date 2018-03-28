function hasFile( form ){
  const elements = Array.from( form.elements );

  return elements.some( element => {
    return element.type === 'file' && element.files.length > 0;
  });
}

export default hasFile;
