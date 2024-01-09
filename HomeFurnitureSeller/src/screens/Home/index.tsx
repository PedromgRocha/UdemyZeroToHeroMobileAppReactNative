import React, { useState, useEffect } from 'react';
import { FlatList, View } from 'react-native';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { categories } from '../../data/categories';
import { products } from '../../data/products';

import Header from '../../components/Header';
import CategoryBox from '../../components/CategoryBox';
import ProductHomeItem from '../../components/ProductHomeItem';

function Home({navigation}: any):  React.JSX.Element {
    const [selectedCategory, setSelectedCategory] = useState();
    const [keyword, setKeyword]: [any,any]= useState();
    const [filteredProducts, setFilteredProducts] = useState(products);

    useEffect(() => {
        if (selectedCategory && !keyword) {
            const updatedProducts = products.filter((product) => product?.category === selectedCategory);
            setFilteredProducts(updatedProducts);
        } else if (selectedCategory && keyword) {
            const updatedProducts = products.filter((product) => product?.category === selectedCategory && product?.title?.toLowerCase().includes(keyword?.toLowerCase()) );
            setFilteredProducts(updatedProducts); 
        } else if (!selectedCategory && keyword) {
            const updatedProducts = products.filter((product) => product?.title?.toLowerCase().includes(keyword?.toLowerCase()) );
            setFilteredProducts(updatedProducts); 
        } else if (!keyword && !selectedCategory) {
            setFilteredProducts(products);
        }
    }, [selectedCategory, keyword])

   

    const renderCategoryItem = ({ item, index }: any): React.JSX.Element => {
        return (
            <CategoryBox
                onPress={() => setSelectedCategory(item?.id)}
                isSelected={item?.id === selectedCategory}
                isFirst={index === 0} 
                title={item?.title} 
                image={item?.image} 
            />
        )
    }

    const renderProductItem = ({ item }: any): React.JSX.Element => {
        const onProductPress = (product:any) =>{
            navigation.navigate('ProductDetails', {product});
        };
        
        return (
            <ProductHomeItem 
            onPress={()=> onProductPress(item)}
            {...item} 
            />
        )
    }

    return (
        <SafeAreaView>
            <Header showSearch onSearch={setKeyword} keyword={keyword} title="Find All You Need" />
            
            <FlatList 
                showsHorizontalScrollIndicator={false} 
                style={styles.list} 
                horizontal 
                data={categories} 
                renderItem={renderCategoryItem} 
                keyExtractor={(item, index) => String(index)} 
            />

            <FlatList
                style={styles.productsList}
                numColumns={2}
                data={filteredProducts} 
                renderItem={renderProductItem}
                keyExtractor={(item) => String(item.id)} 
                ListFooterComponent={<View style={{ height: 200 }} />}
            />
        </SafeAreaView>
    )
}

export default React.memo(Home);