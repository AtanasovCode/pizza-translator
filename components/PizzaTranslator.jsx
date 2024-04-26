import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";


const PizzaTranslator = () => {

    const [regularText, setRegularText] = useState("");
    const [pizzaText, setPizzaText] = useState("");

    const getTranslation = () => {
        setPizzaText(regularText.split(' ').map((word) => word && '🍕').join(' '));
    }

    return (
        <View style={{ padding: 15 }}>
            <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 10, }}>
                Pizza Translator
            </Text>
            <TextInput
                style={{
                    borderColor: '#aaa',
                    borderWidth: 1,
                    padding: 12,
                    marginBottom: 15,
                    color: '#fff',
                    backgroundColor: "transparent",
                }}
                placeholder="Enter text to translate"
                placeholderTextColor="#aaa"
                onChangeText={(newText) => setRegularText(newText)}
                defaultValue={regularText}
            />
            <Button 
                title="Translate"
                style={{ 
                    padding: 12, 
                    backgroundColor: 'rgb(0, 12, 76)', 
                    color: '#000', 
                    marginBottom: 12,
                }} 
                onPress={() => getTranslation()}
            />
            <Text style={{color: '#FFF', marginTop: 15, marginBottom: 15, textAlign: 'center', fontSize: 20}}>
                Translation:
            </Text>
            <Text style={{color: '#fff', fontSize: 20, textAlign: 'center'}}>
                {pizzaText}
            </Text>
        </View>
    );
}

export default PizzaTranslator;