import React, { useState } from "react";
import { FlatList, Image, View, Dimensions } from "react-native";
import { styles } from "./styles";

const { width } = Dimensions.get('window')

function ImageCarousel({ images }: any): React.JSX.Element {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleScrollEnd = (e: any) => {
        const horizontalOffset = e.nativeEvent.contentOffset.x;
        const index = Math.round(horizontalOffset / width);

        setActiveIndex(index);
    }

    const renderImage = ({ item }: any) => {
        return (
            <Image style={styles.image} source={{ uri: item }}></Image>
        );
    }

    return (
        <View>
            <FlatList
                horizontal
                pagingEnabled
                style={styles.list}
                data={images}
                renderItem={renderImage}
                onMomentumScrollEnd={handleScrollEnd}
            ></FlatList>

            <View style={styles.pagination} >
                {images?.map((_: any, i: any) => (
                    <View key={i} style={[styles.paginationLine, i === activeIndex ? styles.activeLine : {}]} />
                ))}
            </View>
        </View>

    );
}

export default React.memo(ImageCarousel);