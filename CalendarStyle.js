import {
    StyleSheet,
    Dimensions
} from 'react-native';

const {scale, width} = Dimensions.get('window');
let iconSize = 22;
let resultFontSize = 20;
let weekTextFontSize = 16;
let slashLength = 80;
if (width < 350) {
    resultFontSize = 18;
    weekTextFontSize = 14;
    iconSize = 20;
    slashLength = 70;
}

export default StyleSheet.create({
    container: {
        flex: 1
    },
    ctrl: {
        flex: 1.5,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    result: {
        flex: 2.5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    resultSlash: {
        width: slashLength,
        height: 1 / scale,
        transform: [
            {
                rotateZ: '-45deg'
            }
        ]
    },
    resultPart: {
        flex: 1,
        marginHorizontal: 15,
        // backgroundColor: 'red'
    },
    resultText: {
        fontSize: resultFontSize,
        marginVertical: 4,
        fontWeight: '200'
    },
    clearText: {
        fontSize: 18,
        fontWeight: '400',
        margin: 15
    },
    startText: {
        textAlign: 'left'
    },
    endText: {
        textAlign: 'right'
    },
    week: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#F2F2F2'
    },
    weekText: {
        flex: 1,
        fontSize: weekTextFontSize,
        textAlign: 'center',
        color: 'rgba(0, 0, 0, 0.6)'
    },
    scroll: {
        flex: 9
    },
    scrollArea: {
        flex: 1,
        backgroundColor: '#FAFAFA'
    },
    btn: {
        flex: 1.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    confirmContainer: {
        overflow: 'hidden',
        backgroundColor: 'rgba(25, 170, 144, 1)',
        borderRadius: 4,
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center'
    },
    confirmContainerDisabled: {
        backgroundColor: 'rgba(25, 170, 144, 0.20)'
    },
    confirmText: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    confirmTextDisabled: {
        color: 'rgba(255, 255, 255, 0.40)'
    },
    closeIcon: {
        width: iconSize,
        height: iconSize,
        margin: 15
    }
});
