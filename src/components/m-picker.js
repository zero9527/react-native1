import React, { useState, useMemo } from "react";
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { THEME_COLOR } from 'src/utils';

// 下拉选择
const MPicker = (props) => {
  const [showMenu, setShowMenu] = useState(false);
  const [menuSelectedValue, setMenuSelectedValue] = useState(props.select);

  // 选中的文本
  const menuSelectedText = useMemo(() => {
    const menuSelectedItem = props.menuList.find(item => item.value === menuSelectedValue);
    return menuSelectedItem ? menuSelectedItem.label : ''
  }, [menuSelectedValue]);

  function menuSelectChange({ value }) {
    setMenuSelectedValue(value);
    props.onChange(value);
    setShowMenu(!showMenu);
  }

  return (
    <>
      <View style={styles.pickerWrapper}>
        <Text style={styles.select} onPress={() => setShowMenu(!showMenu)}>
          { menuSelectedText }
        </Text>
        {showMenu && 
          <View style={styles.menu} pointerEvents="auto">
            {
              props.menuList.map((menuitem, index) => {
                return (
                  <Text 
                    key={index}
                    style={[
                      styles.menuitem,
                      { color: menuitem.value === menuSelectedValue ? THEME_COLOR : 'gray' }
                    ]}
                    onPress={() => menuSelectChange(menuitem)}
                  >{ menuitem.label }</Text>
                )
              })
            }
          </View>
        }
      </View>
      {showMenu && 
        <Text style={styles.bg} onPress={() => setShowMenu(!showMenu)} />
      }
    </>
  )
}

const styles = StyleSheet.create({
  pickerWrapper: {
    position: 'relative',
    zIndex: 11,
    overflow: 'visible'
  },
  select: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    color: THEME_COLOR,
    zIndex: 11
  },
  menu: {
    width: 60,
    // position: 'absolute',
    // top: '100%',
    // right: -10,
    backgroundColor: '#fff',
    borderColor: '#eee',
    borderWidth: 1,
    shadowColor: '#f1f1f1',
    shadowOpacity: 1,
    shadowOffset: {width: 1, height: 1},
    elevation: 1,
  },
  menuitem: {
    paddingVertical: 10,
    textAlign: 'center',
  },
  bg: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    position: 'absolute',
    display: 'none',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.6)',
    zIndex: 10,
  }
});

export default MPicker;
