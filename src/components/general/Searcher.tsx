import { useState } from 'react';
import { TextInput, } from 'react-native';
import { styles } from '../../styles/searcherStyles';

interface SearcherProps {
  onChangeTextValue: (data: string) => void;
}

const Searcher: React.FC<SearcherProps> = (props) => {
  const replaceBlankSpaces = (string:string) => {
    return string.replace(" ", "+");
  }

  const setMovieName = (name:string) => {
    const newName = replaceBlankSpaces(name);
    props.onChangeTextValue(newName);
  }

  return (
    <>
      <TextInput
        placeholder="Enter a movie"
        onChangeText={setMovieName}
        style={styles.searcher}
      >
      </TextInput>
    </>
  )
}

export default Searcher;