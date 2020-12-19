import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Constants from 'expo-constants'

interface GetProps {
  path: string
  params?: {}
}

interface StorageProps {
  id: string
  value?: {}
}

const get = async ({
  path,
  params,
}: GetProps) => {
  let result
  try {
    result = await axios.get(path, {
      params,
      headers: {
        'Ocp-Apim-Subscription-Key': Constants.manifest.extra.SPORTDATA_KEY
      },
    });
  } catch (error) {
    throw error;
  }

  return result;
};

const getStorage = async ({ id }: StorageProps) => {
  const jsonValue = await AsyncStorage.getItem(id)
  return jsonValue != null ? JSON.parse(jsonValue) : null;
}

const setStorage = async ({ id, value }: StorageProps) => {
  const jsonValue = JSON.stringify(value)
  await AsyncStorage.setItem(id, jsonValue)
}

const delStorage = async ({ id }: StorageProps) => {
  await AsyncStorage.setItem(id, '')
}

export default {
  get,
  getStorage,
  setStorage,
  delStorage
};