import { Button, TextInput, View, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { connect } from 'react-redux'
import { addTodo } from 'core'

const AddTodo = ({ dispatch }) => {
    const [text, setText] = useState('');
    return (
        <View style={styles.container}>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: '60%' }}
                onChangeText={(text) => setText(text)}
                value={text}
            />
            <Button
                onPress={e => {
                    if (!text.trim()) {
                        return
                    }
                    dispatch(addTodo(text))
                    setText('')
                }}
                title="Add Todo"
                color="#841584"
                style={{ height: 40}}
            /></View>
    )
}

const styles = StyleSheet.create({
    container: {
        display:'flex',
        flexDirection: 'row'
    },
});

export default connect()(AddTodo)