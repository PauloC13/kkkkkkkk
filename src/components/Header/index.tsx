import React, {ReactNode} from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Text, View } from 'react-native';

import { Background } from '../../components/Background';

import { LinearGradient } from 'expo-linear-gradient'
import { Feather } from '@expo/vector-icons';

import { styles } from './styles';

import { theme } from '../../global/styles/theme';
import { useNavigation } from '@react-navigation/native';

type Props = {
    title:string,
    action?: ReactNode;
}

export function Header({title, action} : Props){
 const navigation = useNavigation();
 const {secondary100, secondary40, heading} = theme.colors;

 function handleGoBack(){
    navigation.goBack();
 }
    return(
      <LinearGradient
        style={styles.container}
        colors={[secondary100, secondary40]}
      >
        <BorderlessButton>
          <Feather
          name="arrow-left"
          size={24}
          color={heading}
          onPress={handleGoBack}
          />
        </BorderlessButton>

        <Text style={styles.title}>
          {title}
        </Text>
        {
          action 
          ?
          <View>
            {action}
          </View>
          :
          <View style={{width: 24}}/>
        }
      </LinearGradient>
    );
}