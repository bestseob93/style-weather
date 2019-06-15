import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

function ProductListContainer() {
  const [dataSource, setDataSource] = useState([]);
  useEffect(() => {
    const items = Array.apply(null, Array(60)).map((v, i) => ({
      id: i,
      src: `http://placehold.it/200x200?text=(${i} + 1)`,
    }));
    setDataSource(items);
  }, []);

  return (
    <View style={styles.productListWrapper}>
      <FlatList
        data={dataSource}
        renderItem={({ item }) => (
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              margin: 1,
            }}
          >
            <Image
              style={styles.productThumbnail}
              source={{
                uri: item.src,
              }}
            />
            <Text>{item.id}</Text>
          </View>
        )}
        numColumns={2}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  productListWrapper: {
    flex: 1,
  },
  productThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
});

export default ProductListContainer;
