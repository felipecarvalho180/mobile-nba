import axios from 'axios';
import Constants from 'expo-constants'

interface GetProps {
  path: string
  params?: {}
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

export default {
  get
};