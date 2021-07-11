import React, { useState } from 'react';
import { View, FlatList, Text } from 'react-native';

import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { Profile } from "../../components/Profile";
import { ListHeader } from '../../components/ListHeader';
import { Appointment } from '../../components/Appointment';
import { Background } from '../../components/Background';

import { styles } from "./styles";
import { ListDivider } from '../../components/ListDivider';
import { useNavigation } from '@react-navigation/native';

export function Home(){ 
    const navigation = useNavigation();

    function handerAppoimentDetails(){
        navigation.navigate('AppointmentDetails');
    }


    const [category, setCategory] = useState('')

    const appoinments = [{
        id: '1',
        guild: {
            id:'1',
            name:'Lendários',
            icon: null,
            owner: true
        },
        category: '1',
        date: '22/06 às 20:40h',
        description: 'É hoje que vamos chegar ao challenger sem perder um partida da md10'
    },
    {
        id: '2',
        guild: {
            id:'1',
            name:'Lendários',
            icon: null,
            owner: true
        },
        category: '1',
        date: '22/06 às 20:40h',
        description: 'É hoje que vamos chegar ao challenger sem perder um partida da md10'
    }]

    function handleCategorySelect(categoryId: string)
    {
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }
    function handleAppointmentCreate()
    {
        navigation.navigate('AppointmentCreate');
    }
    return(
        <Background>
            <View style={styles.header}>
                <Profile/>
                <ButtonAdd onPress={handleAppointmentCreate}/>
            </View>
                <CategorySelect
                categorySelected={category}
                setCategory={handleCategorySelect}
                />
                <ListHeader
                        title="Partidas agendadas"
                        subtitle="Total 6"
                    />
                        <FlatList
                            data={appoinments}
                            keyExtractor={item => item.id}
                            renderItem={({item}) => (
                                <Appointment 
                                data={item}
                                onPress={handerAppoimentDetails}
                                />
                            )}
                            ItemSeparatorComponent={() => <ListDivider isCentered={false}/>}
                            contentContainerStyle={{paddingBottom: 69}}
                            style={styles.matches}
                            showsHorizontalScrollIndicator={false}
                        />
        </Background>
    )

}