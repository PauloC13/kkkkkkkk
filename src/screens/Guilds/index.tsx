import { useScrollToTop } from '@react-navigation/native';
import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import { Guild, GuildProps } from '../../components/Guild';
import { ListDivider } from '../../components/ListDivider';

import { styles } from './styles';

type Props ={
    handleGuildSelect: (guild: GuildProps) => void;
}

export function Guilds( { handleGuildSelect} : Props){
    const [guilds, setGuilds] = useState<GuildProps[]>([]);

 return(
     <View style={styles.container}>
        <FlatList
            data={guilds}
            keyExtractor={item=> item.id}
            renderItem={({item}) =>(
                <Guild 
                onPress={() => handleGuildSelect(item)}
                data={item} />
            )}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={() => <ListDivider isCentered/>}
            contentContainerStyle={{paddingBottom: 69, paddingTop: 103}}
            ItemSeparatorComponent={() => <ListDivider isCentered/>}
            style={styles.guilds}
        />
     </View>
    );
}