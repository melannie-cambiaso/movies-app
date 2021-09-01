import ImageColors from 'react-native-image-colors';

export const getImageColors = async (uri: string) => {
  const colors = await ImageColors.getColors(uri, {});
  let primary;
  let secondary;

  switch (colors.platform) {
    case 'android':
      // android result properties
      primary = colors.dominant;
      secondary = colors.average;
    case 'web':
      // web result properties
      primary = colors.dominant;
      secondary = colors.lightVibrant;
      break;
    case 'ios':
      // iOS result properties
      primary = colors.primary;
      secondary = colors.secondary;
      break;
    default:
      primary = '';
      secondary = '';
  }
  return [primary, secondary];
};
