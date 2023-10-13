import { TextInput, } from 'react-native';
import { styles } from '../../styles/searcherStyles';
import { replaceBlankSpaces } from '../../utils/globalUtils';
interface SearcherProps {
  onChangeTextValue: (data: string) => void;
}

const Searcher: React.FC<SearcherProps> = (props) => {
  const setMovieName = (name:string) => {
    const newName = replaceBlankSpaces(name);
    props.onChangeTextValue(newName);
  }

  return (
    <>
      <TextInput
        placeholder="Enter a title"
        onChangeText={setMovieName}
        style={styles.searcher}
      >
      </TextInput>
    </>
  )
}

export default Searcher;