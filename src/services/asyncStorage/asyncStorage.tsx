import AsyncStorage from '@react-native-async-storage/async-storage';

export const getAllKeys = async () => {
  try {
    let keys = await AsyncStorage.getAllKeys();
    return keys;
  } catch (e) {
    console.error("Error to get allKeys: " + e)
  }
};

export const clearAll = async () => {
  try {
    await AsyncStorage.clear()
  } catch(e) {
    // clear error
  }

  console.log('Done.')
}

export const filterKeysByTag = async (tag:string) => {
  const keys = await getAllKeys();
  return keys?.filter((key) => key.startsWith(tag));
}