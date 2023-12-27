import { useState, useContext } from 'react';
import { ActivityIndicator } from 'react-native-paper';

import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  AuthInput,
  Title,
} from '../components/account.styles';
import { Text } from '../../../components/typography/text.component';
import { Spacer } from '../../../components/spacer/spacer.component';

import { ErrorConteiner } from '../components/account.styles';

import { AuthenticationContext } from '../../../services/authentication/authentication.contex';

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { onLogin, isLoading, error } = useContext(AuthenticationContext);

  return (
    <AccountBackground>
      <AccountCover />

      {/* Title */}
      <Title>Meals To Go</Title>

      {/* Login Form Container */}
      <AccountContainer>
        {/* Email Input */}
        <AuthInput
          label='E-mail'
          value={email}
          textContentType='emailAddress'
          keyboardType='email-address'
          autoCapitalize='none'
          onChangeText={(u) => setEmail(u)}
        />

        {/* Password Input */}
        <Spacer size='large'>
          <AuthInput
            label='Password'
            value={password}
            textContentType='password'
            secureTextEntry
            autoCapitalize='none'
            onChangeText={(p) => setPassword(p)}
          />
        </Spacer>

        {/* Error Container */}
        {error && (
          <Spacer size='large'>
            <ErrorConteiner>
              <Text variant='error'>Error: {error}</Text>
            </ErrorConteiner>
          </Spacer>
        )}

        {/* Login Button */}
        <Spacer size='large'>
          {!isLoading ? (
            <AuthButton
              icon='lock-open-outline'
              mode='contained'
              onPress={() => onLogin(email, password)}
            >
              Login
            </AuthButton>
          ) : (
            <ActivityIndicator animating={true} />
          )}
        </Spacer>
      </AccountContainer>

      {/* Back Button */}
      <Spacer size='large'>
        <AuthButton mode='contained' onPress={() => navigation.goBack()}>
          Back
        </AuthButton>
      </Spacer>
    </AccountBackground>
  );
};
