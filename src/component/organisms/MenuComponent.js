import React from 'react'
import { View, Text } from 'react-native'
import { Avatar, TouchableRipple } from 'react-native-paper'


const MenuChild = ({ name, icon, navigation, route }) =>
{
    return (
        <View style={{ display: 'flex', flex: 1 }}>
            <TouchableRipple
                borderless={true}
                style={{ borderRadius: 20, padding: 10 }}
                onPress={() => navigation.navigate(route)}
                rippleColor="#FF826B"
            >
                <View>
                    <Avatar.Icon elevation={5} size={50} color={'white'} icon={icon} style={
                        {
                            alignSelf: 'center',
                            shadowRadius: 4, shadowOpacity: 0.4,
                            shadowOffset: { width: 2, height: 2 }, shadowColor: 'black',
                        }
                    } />
                    <Text style={{ 'alignSelf': 'center','textAlign':'center', 'fontWeight': '600', 'marginTop': 10 }}>{name}</Text>
                </View>
            </TouchableRipple>
        </View>
    )
}

const MenuComponent = ({ navigation }) =>
{
    return (<View style={{
        // justifyContent: 'center',
        display: 'flex',
        flexDirection: 'row',
        elevation: 15,
        borderRadius: 10, backgroundColor: 'white', marginVertical: 20, paddingHorizontal: 30, paddingVertical: 20, shadowRadius: 3, shadowOpacity: 0.2,
        shadowOffset: { width: 2, height: -1 }, shadowColor: 'black',
    }}>
        <MenuChild icon='calendar' name="Buat Janji" navigation={navigation} route='AppointmentScreen' />
        <MenuChild icon='comment-edit' name="Tanya Dokter" navigation={navigation} route='AskDoctorScreen' />
        <MenuChild icon='note' name="Catatan Dokter" navigation={navigation} route='DoctorNotesScreen' />
        <MenuChild icon='note' name="Catatan Dokter" navigation={navigation} route='DoctorDetailScreen' />

    </View>
    )
}

export default MenuComponent
