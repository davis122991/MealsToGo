import { useState, useRef, useEffect, useContext } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { Camera } from 'expo-camera';
import styled from 'styled-components';
import { Text } from '../../../components/typography/text.component';

import { AuthenticationContext } from '../../../services/authentication/authentication.contex';

const ProfileCamera = styled(Camera)`
  width: 100%;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
`;

const SnapButton = styled(Button)`
  justifycontent: center;
  alignitems: center;
  width: 100px;
  height: 50px;
  background-color: #fff;
  color: #000;
  margin-bottom: 40px;
`;

export const CameraScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const cameraRef = useRef();
  const { user } = useContext(AuthenticationContext);

  const snap = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
      navigation.goBack();
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <ProfileCamera
      ref={(camera) => (cameraRef.current = camera)}
      type={Camera.Constants.Type.front}
      ratio={'16:9'}
    >
      <SnapButton onPress={snap}>Snap</SnapButton>
    </ProfileCamera>
  );
};
