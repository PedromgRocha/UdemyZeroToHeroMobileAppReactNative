import { StyleSheet } from "react-native";
import {colors} from "../../utils/colors";
 
export const styles = StyleSheet.create({
    container: {
        marginHorizontal: 30,
    },
    secondTitle: {
       fontWeight: '500',
       fontSize: 16,
       color: colors.grey,
    },
    item: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        marginVertical: 8,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    icon: {
        width: 24,
        height: 24,
    },
    button: {
        paddingVertical: 12,
        marginTop: 16,
    }
})