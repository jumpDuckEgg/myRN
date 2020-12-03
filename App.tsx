/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {ScrollView, StyleSheet, StatusBar, Text, View} from 'react-native';

import Ibutton from 'element/button';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.title}>
        <Text style={styles.titleText}>这是我的第一个按钮组件</Text>
      </View>
      <ScrollView style={styles.box}>
        <Text style={styles.text}>按钮类型</Text>
        <View style={styles.directWrap}>
          <Ibutton title="主要按钮" type="primary" />
          <Ibutton title="信息按钮" type="info" />
          <Ibutton title="危险按钮" type="danger" />
          <Ibutton title="警告按钮" type="warning" />
          <Ibutton title="默认按钮" />
        </View>
        <Text style={styles.text}>朴素按钮</Text>
        <View style={styles.directWrap}>
          <Ibutton title="主要按钮" plain type="primary" />
          <Ibutton title="信息按钮" plain type="info" />
          <Ibutton title="危险按钮" plain type="danger" />
          <Ibutton title="警告按钮" plain type="warning" />
          <Ibutton title="默认按钮" plain />
        </View>
        <Text style={styles.text}>禁用状态</Text>
        <View style={styles.directWrap}>
          <Ibutton title="主要按钮" disabled type="primary" />
          <Ibutton title="信息按钮" disabled type="info" />
          <Ibutton title="危险按钮" disabled type="danger" />
          <Ibutton title="警告按钮" disabled type="warning" />
          <Ibutton title="默认按钮" disabled />
        </View>
        <Text style={styles.text}>按钮形状</Text>
        <View style={styles.directWrap}>
          <Ibutton title="主要按钮" type="primary" />
          <Ibutton title="信息按钮" round type="info" />
        </View>
        <Text style={styles.text}>按钮大小</Text>
        <View style={styles.directWrap}>
          <Ibutton title="主要按钮" size="normal" type="primary" />
          <Ibutton title="信息按钮" size="small" type="info" />
          <Ibutton title="危险按钮" size="mini" type="danger" />
        </View>
        <Text style={styles.text}>附加样式</Text>
        <View style={styles.directWrap}>
          <Ibutton
            title="主要按钮"
            style={styles.buttonMargin}
            type="primary"
          />
          <Ibutton title="信息按钮" style={styles.buttonMargin} type="info" />
          <Ibutton title="危险按钮" style={styles.buttonMargin} type="danger" />
          <Ibutton
            title="警告按钮"
            style={styles.buttonMargin}
            type="warning"
          />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  box: {
    marginHorizontal: 10,
  },
  title: {
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  titleText: {
    textAlign: 'center',
    fontSize: 20,
  },
  text: {
    marginVertical: 10,
  },
  buttonMargin: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  directWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default App;
