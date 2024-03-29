import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    container:{
        marginBottom: 20,
    },
    label: {
        marginVertical: 8,
        color: colors.blue,
        fontSize: 14,
        fontWeight: '500',
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: colors.grey,
        borderRadius: 14,
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        paddingHorizontal: 16,
        paddingVertical: 20,
        flex: 1,
    },
    eye : {
        width: 24,
        height: 24,
        marginHorizontal: 16,
    },
    arrow: {
        width: 24,
        height: 24,
        marginHorizontal: 16,
        transform: [{rotate: '90deg'}],
    },
    placeholder: {
        paddingHorizontal: 16,
        paddingVertical: 20,
        flex: 1,
        color: colors.lightGrey,
    }
});